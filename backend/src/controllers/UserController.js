const UserFactory = require('../factories/UserFactory');
const userRepository = require('../repositories/UserRepository');

class UserController {

    async create(req, res) {

        try {

            const { name, email, password } = req.body;

            const user = UserFactory.create(
                name,
                email,
                password
            );

            const createdUser =
                await userRepository.create(user);

            return res.status(201).json(createdUser);

        } catch (error) {

            console.error(error);

            return res.status(500).json({
                message: 'Erro ao cadastrar usuário'
            });

        }

    }

}

module.exports = new UserController();