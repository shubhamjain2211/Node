class ObserverPatternDemo {
    constructor() {
        this.observers = [];
        this.state = {
            x: null
        }
    }
    subscribe(observer) {
        this.observers.push(observer);
        observer(this.state);
    }
    publish() {
        this.observers.forEach(observer => observer(this.state));
    }
    changeState(x) {
        this.state.x = x;
        this.publish();
    }
}
const Observable1 = new ObservablePatterDemo();
console.log("initial state");
Observable1.subscribe(state => {
    console.log("observer 1", state);
});
Observable1.subscribe(state => {
    console.log("observer 2", state);
});
Observable1.subscribe(state => {
    console.log("observer 3", state);
});
console.log('\n');
console.log("state change");
Observable1.changeState(20);