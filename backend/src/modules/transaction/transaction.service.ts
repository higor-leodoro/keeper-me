import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TransactionEntity } from './transaction.entity';
import {
  Between,
  FindOptionsWhere,
  MoreThanOrEqual,
  Repository,
} from 'typeorm';
import { TransactionDto } from './dtos/transaction.dto';
import { UserEntity } from '../user/user.entity';
import { formatDate } from 'src/utils/format.date';
import { TransactionResponseDto } from './dtos/transaction.response.dto';

@Injectable()
export class TransactionService {
  constructor(
    @InjectRepository(TransactionEntity)
    private readonly transactionRepository: Repository<TransactionEntity>,
  ) {}

  async createTransaction(
    transaction: TransactionDto,
    user: UserEntity,
  ): Promise<TransactionResponseDto> {
    const value =
      transaction.type === 'expense'
        ? -Math.abs(transaction.value)
        : Math.abs(transaction.value);

    const newTransaction = this.transactionRepository.create({
      ...transaction,
      value,
      user,
    });

    const savedTransaction =
      await this.transactionRepository.save(newTransaction);

    return this.formatTransactionResponse(savedTransaction);
  }

  async getAllTransactions(
    user: UserEntity,
  ): Promise<TransactionResponseDto[]> {
    const transactions = await this.transactionRepository.find({
      where: { user: { id: user.id } },
    });

    return transactions.map(this.formatTransactionResponse);
  }

  async getTransactionsByPeriod(
    user: UserEntity,
    startDate?: string,
    endDate?: string,
  ): Promise<{ transactions: TransactionResponseDto[]; totalExpense: string }> {
    let whereCondition: FindOptionsWhere<TransactionEntity>;

    if (startDate && endDate) {
      whereCondition = {
        user: { id: user.id },
        date: Between(new Date(startDate), new Date(endDate)),
      };
    } else if (startDate) {
      const date = new Date(startDate);
      whereCondition = {
        user: { id: user.id },
        date: Between(
          new Date(date.setHours(0, 0, 0, 0)),
          new Date(date.setHours(23, 59, 59, 999)),
        ),
      };
    } else {
      const thirtyDaysAgo = new Date();
      thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

      whereCondition = {
        user: { id: user.id },
        date: MoreThanOrEqual(thirtyDaysAgo),
      };
    }

    const transactions = await this.transactionRepository.find({
      where: whereCondition,
      order: { date: 'DESC' },
    });

    const totalExpense = transactions
      .filter((transaction) => Number(transaction.value) < 0)
      .reduce((sum, transaction) => sum + Number(transaction.value), 0);

    const formattedExpense = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(Math.abs(totalExpense));

    return {
      transactions: transactions.map(this.formatTransactionResponse),
      totalExpense: formattedExpense,
    };
  }

  async updateTransactionById(
    id: string,
    transaction: TransactionDto,
    user: UserEntity,
  ): Promise<TransactionResponseDto> {
    const existingTransaction = await this.transactionRepository.findOne({
      where: { id, user: { id: user.id } },
    });

    if (!existingTransaction) {
      throw new Error('Transaction not found');
    }

    const value =
      transaction.type === 'expense'
        ? -Math.abs(transaction.value)
        : Math.abs(transaction.value);

    await this.transactionRepository.update(id, {
      description: transaction.description,
      value,
      type: transaction.type,
    });

    const updatedTransaction = await this.transactionRepository.findOne({
      where: { id },
    });

    return this.formatTransactionResponse(updatedTransaction);
  }

  async deleteTransaction(id: string, user: UserEntity): Promise<void> {
    const transaction = await this.transactionRepository.findOneBy({
      id,
      user,
    });
    if (!transaction) throw new Error('Transaction not found');

    await this.transactionRepository.remove(transaction);
  }

  async calculateBalance(user: UserEntity): Promise<string> {
    const transactions = await this.transactionRepository.find({
      where: { user: { id: user.id } },
      select: ['value'],
    });

    const total = transactions.reduce((sum, transaction) => {
      const value = Number(transaction.value);
      return !isNaN(value) ? sum + value : sum;
    }, 0);

    const formattedBalance = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
    }).format(total);

    return formattedBalance;
  }

  private formatTransactionResponse(
    transaction: TransactionEntity,
  ): TransactionResponseDto {
    const { user, ...transactionWithoutUser } = transaction;
    return {
      ...transactionWithoutUser,
      date: formatDate(transaction.date),
    };
  }
}
