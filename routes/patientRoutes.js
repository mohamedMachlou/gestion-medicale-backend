const express = require('express');
const router = express.Router();
const db = require('../models'); // Assurez-vous que ce chemin est correct

// Create New Patient
router.post('/createpatient', (req, res, next) => {
    db.Patient.create({
        nom: req.body.nom,
        prenom: req.body.prenom,
        date_naissance: req.body.date_naissance,
        sexe: req.body.sexe,
        adresse: req.body.adresse,
        telephone: req.body.telephone,
        email: req.body.email,
        mot_de_passe: req.body.mot_de_passe 
    })
    .then((response) => res.status(200).send(response))
    .catch((err) => res.status(400).send(err));
});

// Get All Patients
router.get('/patients', (req, res, next) => {
    db.Patient.findAll({})
    .then((response) => res.status(200).send(response))
    .catch((err) => res.status(400).send(err));
});

// Get Patient By ID
router.get('/patient/:id', (req, res, next) => {
    db.Patient.findOne({ where: { id: req.params.id } })
    .then((response) => res.status(200).send(response))
    .catch((err) => res.status(400).send(err));
});

// Update Patient By ID
router.patch('/patient/:id', (req, res, next) => {
    db.Patient.update({
        nom: req.body.nom,
        prenom: req.body.prenom,
        date_naissance: req.body.date_naissance,
        sexe: req.body.sexe,
        adresse: req.body.adresse,
        telephone: req.body.telephone,
        email: req.body.email,
        mot_de_passe: req.body.mot_de_passe 
    }, { where: { id: req.params.id } })
    .then((response) => res.status(200).send(response))
    .catch((err) => res.status(400).send(err));
});

// Delete Patient By ID
router.delete('/patient/:id', (req, res, next) => {
    db.Patient.destroy({ where: { id: req.params.id } })
    .then((response) => res.status(200).send(response))
    .catch((err) => res.status(400).send(err));
});

module.exports = router;
