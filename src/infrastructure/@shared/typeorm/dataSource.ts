import { DataSource } from 'typeorm';

export const connectionSource = new DataSource({
  migrationsTableName: 'migrations',
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'root',
  database: 'backend_challenge_node',
  logging: false,
  synchronize: false,
  name: 'default',
  entities: [__dirname + '/**/*.model{.ts,.js}'],
  migrations: [__dirname + '/migrations/*{.ts,.js}'],
});
