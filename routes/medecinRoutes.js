const express = require('express');
const router = express.Router();
const db = require('../models'); // Assurez-vous que ce chemin est correct

// Create New medecin
router.post('/createmedecin', (req, res, next) => {
    db.medecin.create({
        code: req.body.code,
        nom: req.body.nom,
        prenom: req.body.prenom,
        specialite: req.body.specialite,
        adresse: req.body.adresse,
        telephone: req.body.telephone,
        email: req.body.email,
        mot_de_passe: req.body.mot_de_passe 
    })
    .then((response) => res.status(200).send(response))
    .catch((err) => res.status(400).send(err));
});

// Get All Medecins
router.get('/medecins', (req, res, next) => {
    db.medecin.findAll({})
    .then((response) => res.status(200).send(response))
    .catch((err) => res.status(400).send(err));
});

// Get Medecin By ID
router.get('/medecin/:id', (req, res, next) => {
    db.medecin.findOne({ where: { id: req.params.id } })
    .then((response) => res.status(200).send(response))
    .catch((err) => res.status(400).send(err));
});

// Update Medecin By ID
router.patch('/medecin/:id', (req, res, next) => {
    db.medecin.update({
        code: req.body.code,
        nom: req.body.nom,
        prenom: req.body.prenom,
        specialite: req.body.specialite,
        adresse: req.body.adresse,
        telephone: req.body.telephone,
        email: req.body.email,
        mot_de_passe: req.body.mot_de_passe 
    }, { where: { id: req.params.id } })
    .then((response) => res.status(200).send(response))
    .catch((err) => res.status(400).send(err));
});

// Delete Medecin By ID
router.delete('/medecin/:id', (req, res, next) => {
    db.medecin.destroy({ where: { id: req.params.id } })
    .then((response) => res.status(200).send(response))
    .catch((err) => res.status(400).send(err));
});

module.exports = router;
