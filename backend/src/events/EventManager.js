class EventManager {

    constructor() {
        this.observers = {};
    }

    subscribe(event, observer) {

        if (!this.observers[event]) {
            this.observers[event] = [];
        }

        this.observers[event].push(observer);
    }

    notify(event, data) {

        if (!this.observers[event]) {
            return;
        }

        this.observers[event].forEach(observer => {
            observer.update(data);
        });
    }
}

module.exports = new EventManager();