const fs = require('fs');
const path = require('path');

class AdCreatedObserver {

    update(ad) {

        console.log('Observer executado');
        console.log('Ad criado:', ad);

        const message =
            `[${new Date().toISOString()}] ` +
            `Anúncio criado: ${ad.title}\n`;

        fs.appendFileSync(
            path.join(
                __dirname,
                '../../ad-log.txt'
            ),
            message
        );

    }

}

module.exports = new AdCreatedObserver();