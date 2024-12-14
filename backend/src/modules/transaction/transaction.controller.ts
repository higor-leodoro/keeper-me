import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { TransactionService } from './transaction.service';
import { AuthGuard } from '../auth/auth.guard';
import { TransactionDto } from './transaction.dto';

@Controller('transactions')
@UseGuards(AuthGuard)
export class TransactionController {
  constructor(private readonly transactionsService: TransactionService) {}

  @Post()
  async createTransaction(
    @Body() transactionDto: TransactionDto,
    @Req() request: Request,
  ) {
    const user = request['user'];
    return await this.transactionsService.createTransaction(
      transactionDto,
      user,
    );
  }

  @Get()
  async getAllTransactions(@Req() request: Request) {
    const user = request['user'];
    return await this.transactionsService.getAllTransactions(user);
  }
}
