const router = require('express').Router();
const commentRoutes = require('./reaction-routes');
const thoughtRoutes = require('./thought-routes');

router.use('/reactions', commentRoutes);
router.use('/thoughts', thoughtRoutes);

module.exports = router;
