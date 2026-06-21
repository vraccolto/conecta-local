const AdFactory = require('../factories/AdFactory');
const adRepository = require('../repositories/AdRepository');

class AdController {

    async create(req, res) {

        try {

            const {
                title,
                description,
                category,
                userId
            } = req.body;

            const ad = AdFactory.create(
                title,
                description,
                category,
                userId
            );

            const createdAd =
                await adRepository.create(ad);

            return res.status(201).json(createdAd);

        } catch (error) {

            console.error(error);

            return res.status(500).json({
                message: 'Erro ao criar anúncio'
            });

        }

    }

    async findAll(req, res) {

        try {

            const ads =
                await adRepository.findAll();

            return res.status(200).json(ads);

        } catch (error) {

            console.error(error);

            return res.status(500).json({
                message: 'Erro ao listar anúncios'
            });

        }

    }

}

module.exports = new AdController();