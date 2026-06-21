const eventManager =
    require('./EventManager');

const adCreatedObserver =
    require('../observers/AdCreatedObserver');

console.log('Registrando observer adCreated');

eventManager.subscribe(
    'adCreated',
    adCreatedObserver
);