const router = require('express').Router();
const { updateThought,
  removeThought,
  removeReaction,
  addReaction,
  addThought,
  getAllThought,
  getThoughtById} = require('../controllers/thought-controller');

router.route('/').get(getAllThought).post(addThought);

router
  .route('/:thoughtId')
  .get(getThoughtById)
  .put(updateThought)
  .delete(removeThought);

router.route('/:thoughtId/reactions/').post(addReaction)
router.route('/:thoughtId/reactions/:reactionId').delete(removeReaction);

module.exports = router;
