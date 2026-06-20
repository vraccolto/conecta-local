const pool = require('../config/database');

class UserRepository {

    async create(user) {

        const query = `
            INSERT INTO users
            (name, email, password)
            VALUES
            ($1, $2, $3)
            RETURNING *
        `;


        const values = [
            user.name,
            user.email,
            user.password
        ];

        const result =
            await pool.query(query, values);

        return result.rows[0];
    }

    async findAll() {

        const query = `
        SELECT *
        FROM users
        ORDER BY id
    `;

        const result =
            await pool.query(query);

        return result.rows;
    }

}

module.exports = new UserRepository();