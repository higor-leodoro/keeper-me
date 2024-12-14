import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';
import { DataSourceOptions, DataSource } from 'typeorm';
import { join } from 'path';
import { UserEntity } from '../user/user.entity';

config();
const configService = new ConfigService();

const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: configService.get<string>('DB_HOST'),
  port: +configService.get<number>('DB_PORT'),
  username: configService.get<string>('DB_USERNAME'),
  password: configService.get<string>('DB_PASSWORD'),
  database: configService.get<string>('DB_NAME'),
  entities: [UserEntity],
  migrations: [join(__dirname, 'migrations/*.ts')],
  synchronize: true,
};

export default new DataSource(dataSourceOptions);
