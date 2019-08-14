const db = require('../models');

class Dig {
    dig(url, userName) {
        return db.sequelize.transaction(async t => {
            const [user, cu] = await db.User.findOrCreate({
                where: { name: userName },
                transaction: t,
            });
            const [link, cl] = await db.Link.findOrCreate({
                where: { url },
                defaults: { url, UserId: user.id },
                transaction: t,
            });
            await user.addLike(link, { transaction: t });
        })
    }

    async list() {
        const data = await db.Link.findAll({
            include: [
                {
                    model: db.User,
                    as: 'likedBy',
                    attributes: []
                },
                {
                    model: db.User,
                    attributes: ['name'],
                },
            ],
            attributes: [
                [db.sequelize.fn('COUNT', db.sequelize.col('likedBy.id')), 'likes'],
                [db.sequelize.col('url'), 'url'],
            ],
            group: ['Link.id'],
            order: [db.sequelize.literal('likes DESC')]
        });

        const res = data.map(link => ({
            url: link.url,
            user: link.User.name,
            likes: link.dataValues.likes,
        }));
        return res
    }

}

module.exports = Dig;