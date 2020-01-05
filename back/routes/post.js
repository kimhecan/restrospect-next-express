const express = require('express');
const db = require('../models');
const { isLoggedIn } = require('./middleware')

const router = express.Router();

router.post('/', isLoggedIn, async (req, res, next) => {
  try {
    const newPost = await db.Post.create({
      content: req.body.data,
      UserId: req.user.id
    })
    
    const fullPost = await db.Post.findOne({
      where: { id: newPost.id },
      include: [{
        model: db.User,
        attributes: ['id', 'nick']
      }]
    });
    res.json(fullPost);
  } catch (e) {
    console.error(e);
    next(e)
  }
});

router.get('/', isLoggedIn, async (req, res, next) => {
  try {
    const posts = await db.Post.findAll({
      where: {
        UserId: req.user.dataValues.id
      }
    });
    res.json(posts);
  } catch (e) {
    console.error(e);
    return next(e);
  }
})


module.exports = router;