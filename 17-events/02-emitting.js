const EventEmitter = require('events');

class Timer extends EventEmitter {
    constructor() {
        super();
        this.count = 0;
    }

    notifyEvery(ms) {
        this.clock = setInterval(() => {
            this.emit('timeout', this.count++);
        }, ms);
    }

    stop() {
        clearInterval(this.clock);
    }
}

const t = new Timer();
t.notifyEvery(1000);

t.on('timeout', (ticks) => {
    console.log(`tick: ${ticks}`);
});

t.on('timeout', (ticks) => {
    if (ticks % 5 === 0) {
        t.emit('error');
        console.log('Boom!');
    }
});

t.on('timeout', (ticks) => {
    if (ticks > 10) {
        t.stop();
    }
});