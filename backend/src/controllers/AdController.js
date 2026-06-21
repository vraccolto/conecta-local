const AdFactory = require('../factories/AdFactory');
const adRepository = require('../repositories/AdRepository');
const eventManager = require('../events/EventManager');
const adCreatedObserver = require('../observers/AdCreatedObserver');

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

            console.log('Evento adCreated disparado');

            eventManager.notify(
                'adCreated',
                createdAd
            );

            console.log('Notify executado');

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

    async update(req, res) {

        try {

            const { id } = req.params;

            const {
                title,
                description,
                category
            } = req.body;

            const ad = {
                title,
                description,
                category
            };

            const updatedAd =
                await adRepository.update(id, ad);

            return res.status(200).json(updatedAd);

        } catch (error) {

            console.error(error);

            return res.status(500).json({
                message: 'Erro ao atualizar anúncio'
            });

        }

    }

    async delete(req, res) {

        try {

            const { id } = req.params;

            const deletedAd =
                await adRepository.delete(id);

            return res.status(200).json(deletedAd);

        } catch (error) {

            console.error(error);

            return res.status(500).json({
                message: 'Erro ao remover anúncio'
            });

        }

    }

}

module.exports = new AdController();