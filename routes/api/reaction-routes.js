const router = require('express').Router();
const {
  addReaction,
  removeReaction,
  addReply,
  removeReply
} = require('../../controllers/reaction-controller');

// /api/reactions/<thoughtId>
router
.route('/:thoughtId')
.post(addReaction);

// /api/reactions/<thoughtId>/<reactionId>
router
  .route('/:thoughtId/:reactionId')
  .delete(removeReaction);

module.exports = router;
