import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  Req,
  UseGuards,
} from '@nestjs/common';
import { TransactionService } from './transaction.service';
import { AuthGuard } from '../auth/auth.guard';
import { TransactionDto } from './dtos/transaction.dto';
import { TransactionResponseDto } from './dtos/transaction.response.dto';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('transactions')
@Controller('transactions')
@UseGuards(AuthGuard)
export class TransactionController {
  constructor(private readonly transactionsService: TransactionService) {}

  @Post()
  async createTransaction(
    @Body() transaction: TransactionDto,
    @Req() request: Request,
  ): Promise<TransactionResponseDto> {
    const user = request['user'];
    return await this.transactionsService.createTransaction(transaction, user);
  }

  @Get()
  async getAllTransactions(
    @Req() request: Request,
  ): Promise<TransactionResponseDto[]> {
    const user = request['user'];
    return await this.transactionsService.getAllTransactions(user);
  }

  @Get('period')
  async getTransactionsByPeriod(
    @Query('startDate') startDate: string,
    @Query('endDate') endDate: string,
    @Req() request: Request,
  ) {
    const user = request['user'];
    return await this.transactionsService.getTransactionsByPeriod(
      user,
      startDate,
      endDate,
    );
  }

  @Get('balance')
  async calculateBalance(@Req() request: Request) {
    const user = request['user'];
    return { balance: await this.transactionsService.calculateBalance(user) };
  }

  @Patch(':id')
  async updateTransaction(
    @Param('id') id: string,
    @Body() transaction: TransactionDto,
    @Req() request: Request,
  ): Promise<TransactionResponseDto> {
    const user = request['user'];
    return await this.transactionsService.updateTransactionById(
      id,
      transaction,
      user,
    );
  }

  @Delete(':id')
  async deleteTransaction(@Param('id') id: string, @Req() request: Request) {
    const user = request['user'];
    await this.transactionsService.deleteTransaction(id, user);
    return { message: 'transaction deleted successfully' };
  }
}
