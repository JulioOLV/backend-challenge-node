import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateOrderTable1707966540168 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE tb_order (
        id VARCHAR(255) NOT NULL,
        customer_id VARCHAR(255) NOT NULL,
        product_id VARCHAR(255) NOT NULL,
        unit_price DECIMAL(10, 2) NOT NULL,
        quantity INT NOT NULL,
        total DECIMAL(10, 2) NOT NULL,
        date DATE NOT NULL,
        created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
        PRIMARY KEY (id),
        KEY customer_id (customer_id),
        KEY product_id (product_id),
        CONSTRAINT tb_order_customer_id FOREIGN KEY (customer_id) REFERENCES tb_customer (id) ON UPDATE CASCADE,
        CONSTRAINT tb_order_product_id FOREIGN KEY (product_id) REFERENCES tb_product (id) ON UPDATE CASCADE
      );`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `
        DROP TABLE tb_order;
      `,
    );
  }
}

