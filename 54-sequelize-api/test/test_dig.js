var expect = require("chai").expect;
const db = require('../models');
const Dig = require('../lib/dig');

describe("Dig test", function(){
    
    beforeEach(async function() {
        await db.LinkUser.destroy({ truncate: true });
        await db.Link.destroy({ truncate: true });
        await db.User.destroy({ truncate: true });
    });

    it("should dig a new URL",  async function(){
        const d = new Dig();
        await d.dig('https://www.tocode.co.il', 'ynon');
        const res = await d.list();

        expect(res).to.eql([
            { url: 'https://www.tocode.co.il', user: 'ynon', likes: 1 }
        ]);
    });

    it("should dig an existing URL",  async function(){
        const d = new Dig();
        await d.dig('https://www.tocode.co.il', 'ynon1');
        await d.dig('https://www.tocode.co.il', 'ynon2');

        const res = await d.list();

        expect(res).to.eql([
            { url: 'https://www.tocode.co.il', user: 'ynon1', likes: 2 }
        ]);
    });
    
    it("should allow multiple URLs",  async function(){
        const d = new Dig();
        await d.dig('https://www.tocode.co.il', 'ynon1');
        await d.dig('https://www.tocode.co.il', 'ynon2');
        await d.dig('https://www.google.com', 'demo');

        const res = await d.list();

        expect(res).to.eql([
            { url: 'https://www.tocode.co.il', user: 'ynon1', likes: 2 },
            { url: 'https://www.google.com', user: 'demo', likes: 1 }
        ]);
    });      

});

