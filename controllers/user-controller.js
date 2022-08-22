const { User, Thought } = require('../models');

const thoughtController = {
  // get all thoughts
  getAllUser(req, res) {
    User.find({})
      .populate('friends')
      .populate('thoughts')
      .select('-__v')
      .sort({ _id: -1 })
      .then(dbUserData => res.json(dbUserData))
      .catch(err => {
        console.log(err);
        res.sendStatus(400);
      });
  },

  // get one thought by id
  getUserById({ params }, res) {
    User.findOne({ _id: params.id })
    .populate('friends')
    .populate('thoughts')
    .select('-__v')
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
    console.log(err);
    res.sendStatus(400);
    });
  },

  // createUser
  createUser({ body }, res) {
    User.create(body)
      .then(dbUserData => res.json(dbUserData))
      .catch(err => res.json(err));
  },

  // update thought by id
  updateUser({ params, body }, res) {
    User.findOneAndUpdate({ _id: params.id }, body, { new: true, runValidators: true })
      .then(dbUserData => {
        if (!dbUserData) {
          res.status(404).json({ message: 'No User found with this id!' });
          return;
        }
        res.json(dbUserData);
      })
      .catch(err => res.json(err));
  },

  addFriend({ params }, res) {
      User.findOneAndUpdate(
          { _id: params.userId },
          { $push: { friends: params.friendId } },
          { new: true }
          ).then(dbUserData => {
              if (!dbUserData) {
                  res.status(404).json({message: 'No User found with this id!'})
                  return;
              }
              res.json(dbUserData)
          })
  },

  removeFriend({ params }, res) {
    User.findOneAndUpdate(
        { _id: params.userId },
        { $pull: { friends: params.friendId } },
        { new: true }
        ).then(dbUserData => {
            if (!dbUserData) {
                res.status(404).json({message: 'No User found with this id!'})
                return;
            }
            res.json(dbUserData)
        })
    },

  // delete thought
  deleteUser({ params }, res) {
    User.findOneAndDelete({ _id: params.id })
      .then(dbUserData => {
          if (!dbUserData) {
            res.status(404).json({message: 'No User found with this id!'})
            return;
          }

          Thought.deleteMany({
            id: dbUserData.thoughts
        }).then(dbThoughtData => {
            res.json(dbUserData)
        })

      })
      .catch(err => res.json(err));
  }
};

module.exports = thoughtController;





















