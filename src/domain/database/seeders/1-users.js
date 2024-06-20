/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const seed = async (knex) => {
    const date = new Date();
    const formattedDate = date.toISOString().slice(0, 19).replace('T', ' ');
    await knex('users').del()
    await knex('users').insert([
        {
            id: 1,
            username: 'User',
            email: 'admin@admin.com',
            created_at: formattedDate
        },
        {
            id: 2,
            username: 'User2',
            email: 'admin2@admin.com',
            created_at: formattedDate
        },
        {
            id: 3,
            username: 'User3',
            email: 'admin3@admin.com',
            created_at: formattedDate
        },
        {
            id: 4,
            username: 'User4',
            email: 'admin4@admin.com',
            created_at: formattedDate
        }
    ]);
};
