const express = require('express');
const db = require('../models');
const { isLoggedIn } = require('./middleware')

const router = express.Router();

router.post('/', isLoggedIn, async (req, res, next) => {
  try {
    const newPost = await db.Post.create({ // 추가
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

router.get('/', isLoggedIn, async (req, res, next) => { //조회
  try {
    let where = {};
    if (parseInt(req.query.lastId, 10)) {
      where = {
        UserId: req.user.dataValues.id,
        id: {
          [db.Sequelize.Op.lt]: parseInt(req.query.lastId, 10)
        }
      }
    } else {
      where = {
        UserId: req.user.dataValues.id,
      }
    }
    const posts = await db.Post.findAll({
      where,
      order: [['createdAt', 'DESC']], 
      limit: parseInt(req.query.limit, 10),
    });
    if(posts) {
      res.json(posts);
    } else {
      res.send('게시글없음')
    }
  } catch (e) {
    console.error(e);
    return next(e);
  }
})

router.delete('/:id', isLoggedIn, async (req, res, next) => {
  try {
    const post = await db.Post.findOne({ where: { id: req.params.id }});
    if(!post) {
      return req.status(404).send('포스트가 존재하지 않습니다.');
    }
    await db.Post.destroy({ where: { id: req.params.id }});
    res.send(req.params.id);
  } catch (e) {
    console.error(e);
    next(e);
  }
})


module.exports = router;