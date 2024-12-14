import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
  IsEnum,
} from 'class-validator';
import { TransactionType } from '../transaction.type.enum';

export class TransactionDto {
  @IsUUID()
  @IsOptional()
  id: string;

  @IsNumber()
  value: number;

  @IsString()
  description: string;

  @IsNotEmpty()
  @IsEnum(TransactionType, { message: 'Type must be either income or expense' })
  type: TransactionType;
}
