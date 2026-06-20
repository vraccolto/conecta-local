const User = require('../models/User');

class UserFactory {
    static create(name, email, password) {
        return new User(
            name,
            email,
            password
        );
    }
}

module.exports = UserFactory;