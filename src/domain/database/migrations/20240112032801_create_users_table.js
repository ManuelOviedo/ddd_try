/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = function(knex) {
    return knex.schema.createTable('users', function (table) {
        table.increments('id').primary();
        table.string('username');
        table.string('email', 128);
        table.timestamps(true, false, false);
        table.timestamp('deleted_at');
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const down = function(knex) {
    return knex.schema.dropTable("users");
};