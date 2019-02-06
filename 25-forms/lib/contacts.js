class ContactItems {
    constructor() {
        this.contacts = [
            { id: 1, name: 'ynon', email: 'ynon@tocode.co.il' },
        ];
        this.nextId = 2;
    }

    addContact(name, email) {
        const newContact = { id: this.nextId++, name: name, email: email }
        this.contacts.push(newContact);
        return newContact.id;
    }

    deleteContact(id) {
        const idx = this.contacts.findIndex(item => item.id === Number(id));
        this.contacts.splice(idx, 1);
    }

    listContacts() {
        return this.contacts;
    }

    udpateContact(id, details) {
        const contact = this.findContactById(id);        
        if (details.email) {
            contact.email = details.email;
        }

        if (details.name) {
            contact.name = details.name;
        }
    }

    findContactById(id) {
        return this.contacts.find(item => item.id === Number(id));
    }
}


module.exports = new ContactItems();