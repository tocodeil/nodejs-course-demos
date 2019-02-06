class Items {
    constructor() {
        this.items = [
            {id: 1, name: 'paper towel', description: 'you clean things with it'},
        ];
        this.nextId = 2;
    }

    index(s="") {
        return this.items.filter(item => (
            item.name.indexOf(s) >= 0 || item.description.indexOf(s) >= 0
        ))
    }

    find(id) {
        return this.items.find(item => item.id === Number(id));
    }

    delete(id) {
        const idx = this.items.findIndex(item => item.id === Number(id));
        if (typeof idx !== 'undefined') {
            this.items.splice(idx, 1);
        }
    }

    update(id, name, description) {
        const item = this.find(id);
        item.name = name;
        item.description = description;
        return item;
    }

    create(name, description) {
        this.items.push({ id: this.nextId++, name, description });
        return this.nextId - 1;
    }
}

module.exports = new Items();