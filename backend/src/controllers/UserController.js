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

    async findAll(req, res) {

        try {

            const users =
                await userRepository.findAll();

            return res.status(200).json(users);

        } catch (error) {

            console.error(error);

            return res.status(500).json({
                message: 'Erro ao listar usuários'
            });

        }

    }

    async login(req, res) {

        try {

            const {
                email,
                password
            } = req.body;

            const user =
                await userRepository
                    .findByEmail(email);

            if (!user) {

                return res.status(401).json({
                    message:
                        'Usuário não encontrado'
                });

            }

            if (
                user.password !== password
            ) {

                return res.status(401).json({
                    message:
                        'Senha inválida'
                });

            }

            return res.status(200).json({

                message:
                    'Login realizado',

                user: {

                    id: user.id,

                    name: user.name,

                    email: user.email

                }

            });

        } catch (error) {

            console.error(error);

            return res.status(500).json({
                message:
                    'Erro ao realizar login'
            });

        }

    }

}

module.exports = new UserController();