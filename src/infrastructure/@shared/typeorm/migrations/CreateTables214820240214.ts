import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTables214820240214 implements MigrationInterface {
  async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `
        CREATE TABLE events (
          id VARCHAR(255) NOT NULL,
          name VARCHAR(255),
          date DATE NOT NULL,
          created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
          updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
          PRIMARY KEY (id),
        )

        CREATE TABLE product (
          id VARCHAR(255) NOT NULL,
          name VARCHAR(255),
          active BOOLEAN NOT NULL,
          created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
          updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
          PRIMARY KEY (id),
        )

        CREATE TABLE address (
          id VARCHAR(255) NOT NULL,
          street VARCHAR(255) NOT NULL,
          number VARCHAR(255) NOT NULL,
          complement VARCHAR(255),
          city VARCHAR(120) NOT NULL,
          state VARCHAR(2) NOT NULL,
          zip_code VARCHAR(8) NOT NULL,
          country VARCHAR(120) NOT NULL,
          created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
          updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
          PRIMARY KEY (id),
        )

        CREATE TABLE customer (
          id VARCHAR(255) NOT NULL,
          address_id VARCHAR(255) NOT NULL,
          first_name VARCHAR(100),
          last_name VARCHAR(100),
          document VARCHAR(11) NOT NULL,
          birthdate DATE NOT NULL,
          active BOOLEAN NOT NULL,
          created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
          updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
          PRIMARY KEY (id),
          KEY address_id (address_id),
          CONSTRAINT customer FOREIGN KEY (address_id) REFERENCES address (id) ON DELETE SET NULL ON UPDATE CASCADE,
        )

        CREATE TABLE order (
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
          CONSTRAINT order FOREIGN KEY (customer_id) REFERENCES customer (id) ON DELETE SET NULL ON UPDATE CASCADE,
          CONSTRAINT order FOREIGN KEY (product_id) REFERENCES product (id) ON DELETE SET NULL ON UPDATE CASCADE,
        )
      `,
    );
  }

  async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `
        DROP TABLE order;
        DROP TABLE customer;
        DROP TABLE address;
        DROP TABLE product;
        DROP TABLE events;
      `,
    ); // reverts things made in "up" method
  }
}
