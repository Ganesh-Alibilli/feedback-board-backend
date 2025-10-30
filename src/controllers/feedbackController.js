const Feedback = require('../models/Feedback');

// Get all feedbacks
const getAllFeedbacks = async (req, res) => {
  try {
    const status = req.query.status;
    const query = status && status !== 'All' ? { status } : {};
    const feedbacks = await Feedback.find(query).sort({ createdAt: -1 });
    res.json(feedbacks);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};


// Create new feedback
const createFeedback = async (req, res) => {
  try {
    const { title, description } = req.body;
    const newFeedback = new Feedback({
      title,
      description,
      createdBy: req.user.id,  // User ID from auth middleware (JWT)
    });
    await newFeedback.save();
    res.status(201).json(newFeedback);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

const voteFeedback = async (req, res) => {
  try {
    const feedbackId = req.params.id;
    const userId = req.user.id;

    const feedback = await Feedback.findById(feedbackId);
    if (!feedback) {
      return res.status(404).json({ message: 'Feedback not found' });
    }

    if (feedback.voters.includes(userId)) {
      return res.status(400).json({ message: 'User has already voted for this feedback' });
    }

    feedback.votes += 1;
    feedback.voters.push(userId);

    await feedback.save();

    res.json({ message: 'Vote recorded', votes: feedback.votes });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};


module.exports = {
  getAllFeedbacks,
  createFeedback,
  voteFeedback,
  
};
