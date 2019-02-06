const express = require('express');
const router = express.Router();
const Post = require('../models/post');

/*
router.get('/', async function(req, res, next) {
    const nextId = req.query.offset || null;
    const itemsPerPage = req.query.limit || 3;
    let query = {};
    if (nextId) {
        query._id = { '$gt': nextId };
    }
    const posts = await Post.find(query).limit(itemsPerPage);
    res.send({ posts});
});
*/


const multer = require('multer');
const postPhotoUpload = multer({
    storage: multer.memoryStorage(),
    limits: {
        fileSize: 2 * 1024 * 1024,
    },
    fileFilter: function (req, file, cb) {
        const fname = file.originalname;
        const valid = [
            '.jpg',
            '.png',
            '.jpeg'
        ].find(ext => fname.endsWith(ext));
        cb(null, valid);
    }
}).single('postpic');


router.get('/', async function(req, res, next) {
    try {
        const totalRecords = await Post.estimatedDocumentCount();

        const itemsPerPage = Number(req.query.limit) || 25;
        const page = Number(req.query.page) || 1;

        const totalPages = totalRecords / itemsPerPage;
        const offset = itemsPerPage * (page - 1);

        const posts = await Post.find({}).sort({_id: -1 }).limit(itemsPerPage).skip(offset);
        res.render('posts/index', { posts, paginate: {
            totalPages,
            url: (pageNumber) => `/posts?page=${pageNumber}`
        }});
    } catch (err) {
        console.log('error');
        return next(err);
    }
});

router.get('/new', function(req, res, next) {
    const post = new Post();
    res.render('posts/form', { post });
});

router.get('/img/:id', async function(req, res, next) {
    const post = await Post.findById(req.params.id);
    res.end(post.image);
});

router.post('/', postPhotoUpload, async function(req, res, next) {
    const post = new Post(Object.assign({}, req.body, { image: req.file ? req.file.buffer : undefined }));
    try {
        await post.save();
    } catch(err) {
        return res.render('posts/form', { post });
    }
    res.redirect('/posts');
});

module.exports = router;