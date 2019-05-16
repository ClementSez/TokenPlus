const express = require('express');

const router = express.Router();


router.get('/', (req,res) => {
    //res.send('Bienvenue sur la création du douanier !')
    res.render('douanier')
});

module.exports = router;