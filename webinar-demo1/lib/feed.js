const fs = require('fs').promises;

class Feed {
    constructor() {
        this.fname = 'posts.json';
        this._posts = [{ header: 'hello world', content: 'yo' }]
        fs.readFile(this.fname).then((data) => {
            console.log('1');
            this._posts = JSON.parse(data);
        }).catch(function(err) {
            console.log(err);

        });
    }

    async addPost(header, content) {
        this._posts.push({ header, content });
        await fs.writeFile(this.fname, JSON.stringify(this._posts));
    }

    posts() {
        return this._posts;
    }
}

module.exports = new Feed();