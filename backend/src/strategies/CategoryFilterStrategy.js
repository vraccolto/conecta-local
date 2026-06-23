const pool =
    require('../config/database');

class CategoryFilterStrategy {

    async execute(category) {

        const query = `
            SELECT *
            FROM ads
            WHERE category = $1
            ORDER BY id
        `;

        const result =
            await pool.query(
                query,
                [category]
            );

        console.log(
            `[STRATEGY] Filtro por categoria: ${category}`
        );

        return result.rows;
    }

}

module.exports = new CategoryFilterStrategy();