import { IsNumber, IsString } from 'class-validator';

export class TransactionResponseDto {
  @IsString()
  id: string;
  @IsString()
  description: string;
  @IsNumber()
  value: number;
  @IsString()
  type: string;
  @IsString()
  date: string;
}
