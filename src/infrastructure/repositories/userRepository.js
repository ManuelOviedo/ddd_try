import Models from "../../domain/models/index.js";

class UserRepository {
    async save(user) {
        let response = false;
        if (user) {
            await Models.User.query().insert(user);
            response = true;
        }
        return response;
    }

    async findById(id) {
        return await Models.User.query().findById(id).whereNull('deleted_at');
    }

    async findAll() {
        return Models.User.query().orderBy('username').whereNull('deleted_at');
    }

    async update(id, user) {
        let response = false;
        if (id) {
            delete user.id;
            await Models.User.query().findById(id).update(user);
            response = true;
        }
        return response;
    }

    async delete(id) {
        let response = false;
        if (id) {
            await Models.User.query().findById(id).update({
                deleted_at: (new Date()).toISOString().slice(0, 19).replace('T', ' ')
            });
            response = true;
        }
        return response;
    }
}

export default new UserRepository();