const express = require('express');
const bcrypt = require('bcrypt');
const passport = require('passport');
const db = require('../models');
const { isLoggedIn } = require('./middleware');

const router = express.Router();

router.get('/', (req, res) => { // /user/ 사용자정보가져오기 loadUser
  const user = Object.assign({}, req.user.toJSON());
  delete user.password;
  return res.json(user);
});

router.post('/signup', async (req, res, next) => { // 회원가입
  try {
    console.log(req.body.userId);
    const exUser = await db.User.findOne({
      where: {
        userId: req.body.userId,
      },
    });
    if(exUser) {
      return res.status(403).send('이미 사용중인 아이디입니다.');
    }
    const hashedPassword = await bcrypt.hash(req.body.password, 12);
    const newUser = await db.User.create({
      nick: req.body.nick,
      userId: req.body.userId,
      password: hashedPassword
    });
    console.log(newUser);
    
    return res.status(200).json(newUser);
  } catch (e) {
      return next(e);
  };
});

router.post('/login', (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) {
      console.error(err);
      return next(err);
    }
    if (info) {
      return res.status(401).send(info.reason);
    }
    return req.login(user, async (loginErr) => {
      try {
        if (loginErr) {
          return next(loginErr);
        }
        const fullUser = await db.User.findOne({
          where: {id : user.id },
          attributes:  ['id', 'nick', 'userId'],
        });
        return res.json(fullUser);
      } catch (e) {
        next(e);
      }
    });
  })(req, res, next);
});


router.post('/logout', (req, res) => {
  req.logout();
  req.session.destroy();
  res.send('logout 성공')
})

module.exports = router;