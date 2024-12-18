const { v4: uuidv4 } = require('uuid');

module.exports = (sequelize, DataTypes) => {
  const RendezVous = sequelize.define('RendezVous', {
    id: {
      type: DataTypes.STRING,
      defaultValue: uuidv4,
      primaryKey: true
    },
    date: { type: DataTypes.DATE, allowNull: false },
    heure: { type: DataTypes.TIME, allowNull: false },
    patient_id: { type: DataTypes.STRING, allowNull: false },
    medecin_id: { type: DataTypes.STRING, allowNull: false }
  });

  RendezVous.associate = models => {
    RendezVous.belongsTo(models.Patient, {
      foreignKey: 'patient_id',
      as: 'patient'
    });
    RendezVous.belongsTo(models.Medecin, {
      foreignKey: 'medecin_id',
      as: 'medecin'
    });
  };

  return RendezVous;
};
