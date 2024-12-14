import { Controller } from '@nestjs/common';
import { TransactionsService } from './transaction.service';

@Controller('transactions')
export class TransactionsController {
  constructor(private readonly transactionsService: TransactionsService) {}
}
