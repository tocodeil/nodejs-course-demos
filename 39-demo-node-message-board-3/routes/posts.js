const router = require('express').Router();
const Post = require('../models/post');

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


// GET /posts/new
router.get('/new', function(req, res, next) {
    const post = new Post();
    res.render('posts/new', { post: post });
});

// GET /posts
router.get('/', async function(req, res, nest) {

    const totalRecords = await Post.estimatedDocumentCount();

    const itemsPerPage = Number(req.query.limit) || 20;
    const page = Number(req.query.page) || 1;

    const totalPages = totalRecords / itemsPerPage;
    const offset = itemsPerPage * (page - 1);

    const posts = await Post.find({}).sort({ _id: -1 }).skip(offset).limit(itemsPerPage);
    res.render('posts/index', {
        posts,
        pagination: {
            totalPages,
            url: (page) => `/posts?page=${page}`,
        }
    });
});

router.get('/:id/img', async function(req, res, next) {
    const post = await Post.findById(req.params.id);
    res.end(post.image);
});

// POST /posts
router.post('/', postPhotoUpload, async function(req, res, next) {
    // Now I have the file processed by multer
    let params = req.body;
    if (req.file) {
        params.image = req.file.buffer;
    }
    const post = new Post(params);
    try {
        await post.save();
        res.redirect('/posts');
    } catch {
        console.log(post.errors);
        res.render('posts/new', { post: post });
    }
});

module.exports = router;