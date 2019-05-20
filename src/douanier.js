const express = require('express');
const router = express.Router();
const servicedouane = require('../models/service');



router.get('/', (req, res) => {
    //res.send('Bienvenue sur la création du douanier !')
    res.render('douanier')
});

router.post('/', (req, res) => {
    
    //console.log(req.body);
    const service = new servicedouane ({
        libelle: req.body.libelle,
        code_acs: req.body.code_acs
    });

    service.save()
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        res.json({message: err});
    })
});

module.exports = router;