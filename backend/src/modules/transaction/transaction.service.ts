import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TransactionEntity } from './transaction.entity';
import { Repository } from 'typeorm';
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
