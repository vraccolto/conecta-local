const pool = require('../config/database');

class AdRepository {

    async create(ad) {

        const query = `
            INSERT INTO ads
            (title, description, category, user_id)
            VALUES
            ($1, $2, $3, $4)
            RETURNING *
        `;

        const values = [
            ad.title,
            ad.description,
            ad.category,
            ad.userId
        ];

        const result =
            await pool.query(query, values);

        return result.rows[0];
    }

    async findAll() {

        const result = await pool.query(`
            SELECT *
            FROM ads
            ORDER BY id
        `);

        return result.rows;
    }

    async update(id, ad) {

        const query = `
        UPDATE ads
        SET
            title = $1,
            description = $2,
            category = $3
        WHERE id = $4
        RETURNING *
    `;

        const values = [
            ad.title,
            ad.description,
            ad.category,
            id
        ];

        const result =
            await pool.query(query, values);

        return result.rows[0];
    }

    async delete(id) {

        const query = `
        DELETE
        FROM ads
        WHERE id = $1
        RETURNING *
    `;

        const result =
            await pool.query(query, [id]);

        return result.rows[0];
    }

}

module.exports = new AdRepository();