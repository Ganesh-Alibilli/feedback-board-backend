const express = require('express');
const { getAllFeedbacks, createFeedback,voteFeedback } = require('../controllers/feedbackController');
const authMiddleware = require('../middleware/auth');
const router = express.Router();

router.get('/', getAllFeedbacks);
router.post('/', authMiddleware, createFeedback);
router.post('/:id/vote', authMiddleware, voteFeedback);


module.exports = router;
