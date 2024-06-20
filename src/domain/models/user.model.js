import { Model } from 'objection';
import knex from '../config/db.config.js';

Model.knex(knex);

export default class User extends Model {
    static get tableName() {
        return 'users';
    }

    static get idColumn() {
        return 'id';
    }

    static get hidden() {
        return ['password'];
    }

    static get availableRelationships() {
        return {};
    }

    static get relationMappings() {
        return {};
    }
};
