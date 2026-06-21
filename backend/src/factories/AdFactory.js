const Ad = require('../models/Ad');

class AdFactory {

    static create(title, description, category, userId) {

        return new Ad(
            title,
            description,
            category,
            userId
        );

    }

}

module.exports = AdFactory;