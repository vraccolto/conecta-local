const Ad = require('../models/Ad');

class AdFactory {

    static create(title, description, category, userId) {

        console.log(
            '[FACTORY] Criando objeto Ad'
        );

        return new Ad(
            title,
            description,
            category,
            userId
        );

    }

}

module.exports = AdFactory;