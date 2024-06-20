import knex from "knex";
import dotenv from 'dotenv';

/* Migrations
dotenv.config({ path: '.env', debug: true });*/
/* Node running */
dotenv.config({ path: './src/domain/database/.env', debug: true });

const dbName = process.env.DATABASE_NAME ?? '';
const user = process.env.DATABASE_USER ?? '';
const password = process.env.DATABASE_PASSWORD ?? '';
const host = process.env.DATABASE_HOST ?? '';
const port = process.env.DATABASE_PORT ?? '';

export const config = {
    client: 'mysql2',
    connection: {
        host,
        port,
        user,
        password,
        database: dbName
    }
};

export default knex(config);
