import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateProductTable1707966513287 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `
        CREATE TABLE tb_product (
          id VARCHAR(255) NOT NULL,
          name VARCHAR(255),
          active BOOLEAN NOT NULL,
          created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
          updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
          PRIMARY KEY (id)
        );
      `,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE tb_product;`); // reverts things made in "up" method
  }
}

