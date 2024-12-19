const { v4: uuidv4 } = require('uuid');

module.exports = (sequelize, DataTypes) => {
  const Patient = sequelize.define('Patient', {
    id: {
      type: DataTypes.STRING,
      defaultValue: uuidv4,
      primaryKey: true
    },
    nom: { type: DataTypes.STRING(50), allowNull: false },
    prenom: { type: DataTypes.STRING(50), allowNull: false },
    date_naissance: { type: DataTypes.DATE, allowNull: false },
    sexe: { type: DataTypes.CHAR(1), allowNull: false },
    adresse: { type: DataTypes.STRING(255), allowNull: false },
    telephone: { type: DataTypes.STRING(15), allowNull: false },
    email: { type: DataTypes.STRING(100), allowNull: false },
    mot_de_passe: { type: DataTypes.STRING(255), allowNull: false }
  }, {
    timestamps: true
});

  Patient.associate = models => {
    Patient.hasMany(models.Consultation, {
      foreignKey: 'patient_id',
      as: 'consultations'
    });
    Patient.hasMany(models.HistoriqueFichiersMedicaux, {
      foreignKey: 'patient_id',
      as: 'historiqueFichiers'
    });
    Patient.hasMany(models.RendezVous, {
      foreignKey: 'patient_id',
      as: 'rendezVous'
    });
  };

  return Patient;
};
