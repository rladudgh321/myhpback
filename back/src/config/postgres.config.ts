import { registerAs } from '@nestjs/config';

export default registerAs('postgres', () => ({
  host: process.env.POSTGRES_HOST || '127.0.0.1',
  port: parseInt(process.env.POSTGRES_PORT) || 5432,
  username: process.env.POSTGRES_USERNAME || 'myhp',
  password: process.env.POSTGRES_PASSPORT || '0gh0gh//**',
  database: process.env.POSTGRES_DATABASE || 'myhp',
}));
