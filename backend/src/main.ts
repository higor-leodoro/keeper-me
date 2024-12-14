import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'Content-Type, Accept',
  });
  app.useGlobalPipes(new ValidationPipe());

  const config = new DocumentBuilder()
    .setTitle('Keeper.me api')
    .setDescription(
      '**API Documentation for Transaction Management System**\n\n' +
        'This API allows users to manage their transactions efficiently. ' +
        'It provides endpoints for creating, retrieving, updating, and deleting transactions. ' +
        'Additionally, users can filter transactions by date range, calculate balances, ' +
        'and view detailed financial records. Authentication is required to access all endpoints.\n\n' +
        'Key Features:\n' +
        '- **User Management**: Create and authenticate users.\n' +
        '- **Transaction Management**: Add income/expenses, update, or delete records.\n' +
        '- **Balance Calculation**: Calculate total income and expenses over a specified period.\n' +
        '- **Date Filtering**: Retrieve transactions for specific dates or ranges.\n\n' +
        'This API is designed to integrate seamlessly with financial management applications.',
    )

    .setVersion('1.0')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3001);
}
bootstrap();
