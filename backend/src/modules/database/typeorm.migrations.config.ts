import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';
import { DataSourceOptions, DataSource } from 'typeorm';
import { join } from 'path';
import { UserEntity } from '../user/user.entity';
import { TransactionEntity } from '../transaction/transaction.entity';

config();
const configService = new ConfigService();

const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  url: configService.get<string>('DATABASE_URL'),
  entities: [UserEntity, TransactionEntity],
  migrations: [join(__dirname, 'migrations/*.ts')],
  synchronize: false,
};

export default new DataSource(dataSourceOptions);
