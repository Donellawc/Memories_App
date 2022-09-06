const express = ('express');
const {signin, signup } = ('../controllers/posts');

const router = express.Router();

router.post('/signin', signin);
router.post('/signup', signup);

export default router;
