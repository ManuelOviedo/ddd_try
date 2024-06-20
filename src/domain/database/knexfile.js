import { config } from "../config/db.config.js";
/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
export default {
    development: {
        ... config,
        migrations: {
            tableName: 'knex_migrations'
        },
        seeds: {
            directory: './seeders'
        }
    },
    staging: {
        ... config,
        migrations: {
            tableName: 'knex_migrations'
        },
        seeds: {
            directory: './seeders'
        }
    },
    production: {
        ... config,
        migrations: {
            tableName: 'knex_migrations'
        },
        seeds: {
            directory: './seeders'
        }
    }
};
