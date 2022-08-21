const router = require('express').Router();
const {
  addComment,
  removeComment,
  addReply,
  removeReply
} = require('../../controllers/comment-controller');

// /api/comments/<thoughtId>
router.route('/:thoughtId').post(addComment);

// /api/comments/<thoughtId>/<commentId>
router
  .route('/:thoughtId/:commentId')
  .put(addReply)
  .delete(removeComment);

// /api/comments/<thoughtId>/<commentId>/<replyId>
router.route('/:thoughtId/:commentId/:replyId').delete(removeReply);

module.exports = router;
