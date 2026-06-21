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

}

module.exports = new AdRepository();