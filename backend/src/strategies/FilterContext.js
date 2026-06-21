class FilterContext {

    constructor(strategy) {
        this.strategy = strategy;
    }

    async execute(value) {

        return await this.strategy
            .execute(value);

    }

}

module.exports = FilterContext;