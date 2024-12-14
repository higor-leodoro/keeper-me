import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TransactionEntity } from './transaction.entity';
import { Repository } from 'typeorm';
import { TransactionDto } from './transaction.dto';
import { UserEntity } from '../user/user.entity';

@Injectable()
export class TransactionService {
  constructor(
    @InjectRepository(TransactionEntity)
    private readonly transactionRepository: Repository<TransactionEntity>,
  ) {}

  async createTransaction(
    transaction: TransactionDto,
    user: UserEntity,
  ): Promise<Partial<TransactionEntity>> {
    const newTransaction = this.transactionRepository.create({
      ...transaction,
      user,
    });

    const savedTransaction =
      await this.transactionRepository.save(newTransaction);

    const { user: _, ...transactionWithoutUser } = savedTransaction;

    return transactionWithoutUser;
  }
}
