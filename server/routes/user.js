const express = require('express');
const {signin, signup } = require('../controllers/posts');

const router = express.Router();

router.post('/signin', signin);
router.post('/signup', signup);

export default router;
