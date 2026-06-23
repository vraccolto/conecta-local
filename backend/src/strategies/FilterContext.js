class FilterContext {

    constructor(strategy) {
        console.log(
            `[CONTEXT] Estratégia selecionada: ${strategy.constructor.name}`
        );
        this.strategy = strategy;
    }

    async execute(value) {

        return await this.strategy
            .execute(value);

    }

}

module.exports = FilterContext;