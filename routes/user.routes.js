const express = require('express');
const router = express.Router();

const loggedIn = (req, res, next) => {
    if(!req.isAuthenticated()) {
        return res.redirect('user/no-permission');
    } else {
        next();
    }
};

router.get('/logged', loggedIn, (req, res) => {
  res.render('logged', {
  });
});

router.get('/no-permission', (req, res) => {
  res.render('noPermission');
});

router.get('/profile', loggedIn, (req, res) => {
    res.render('profile');
});

router.get('/profile/settings', loggedIn, (req, res) => {
    res.render('profileSettings');
});

router.get("/logout", (req, res) => {
    res.render("logout");
});


module.exports = router;