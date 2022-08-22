const router = require('express').Router();
const { updateThought,
  removeThought,
  removeReaction,
  addReaction, 
  addThought,
  getAllThought,
  getThoughtById} = require('../controllers/thought-controller');

// /api/thoughts/<userId>
router.route('/').get(getAllThought).post(addThought);

// /api/comments/<userId>/<commentId>
router
  .route('/:thoughtId')
  .get(getThoughtById)
  .put(updateThought)
  .delete(removeThought);

// /api/comments/<userId>/<commentId>/<replyId>
router.route('/:thoughtId/reactions/').post(addReaction)
router.route('/:thoughtId/reactions/:reactionId').delete(removeReaction);

module.exports = router;
