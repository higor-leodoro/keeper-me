import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class UsersTableUpdate1734141850727 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.changeColumn(
      'users',
      'lastName',
      new TableColumn({
        name: 'last_name',
        type: 'varchar',
        length: '255',
        isNullable: false,
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.changeColumn(
      'users',
      'last_name',
      new TableColumn({
        name: 'lastName',
        type: 'varchar',
        length: '255',
        isNullable: false,
      }),
    );
  }
}
