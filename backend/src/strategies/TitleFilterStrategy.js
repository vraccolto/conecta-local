const pool =
    require('../config/database');

class TitleFilterStrategy {

    async execute(title) {

        const query = `
            SELECT *
            FROM ads
            WHERE title ILIKE $1
            ORDER BY id
        `;

        const result =
            await pool.query(
                query,
                [`%${title}%`]
            );

        console.log(
            `[STRATEGY] Filtro por título: ${title}`
        );

        return result.rows;
    }

}

module.exports = new TitleFilterStrategy();