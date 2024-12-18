const { v4: uuidv4 } = require('uuid');

module.exports = (sequelize, DataTypes) => {
  const Consultation = sequelize.define('Consultation', {
    id: {
      type: DataTypes.STRING,
      defaultValue: uuidv4,
      primaryKey: true
    },
    date: { type: DataTypes.DATE, allowNull: false },
    motif: { type: DataTypes.TEXT, allowNull: false },
    diagnostic: { type: DataTypes.TEXT, allowNull: false },
    traitement: { type: DataTypes.TEXT, allowNull: false },
    patient_id: { type: DataTypes.STRING, allowNull: false },
    medecin_id: { type: DataTypes.STRING, allowNull: false }
  });

  Consultation.associate = models => {
    Consultation.belongsTo(models.Patient, {
      foreignKey: 'patient_id',
      as: 'patient'
    });
    Consultation.belongsTo(models.Medecin, {
      foreignKey: 'medecin_id',
      as: 'medecin'
    });
  };

  return Consultation;
};
