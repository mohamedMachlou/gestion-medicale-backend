const { v4: uuidv4 } = require('uuid');

module.exports = (sequelize, DataTypes) => {
  const HistoriqueFichiersMedicaux = sequelize.define('HistoriqueFichiersMedicaux', {
    id: {
      type: DataTypes.STRING,
      defaultValue: uuidv4,
      primaryKey: true
    },
    patient_id: { type: DataTypes.STRING, allowNull: false },
    fichier_id: { type: DataTypes.STRING, allowNull: false },
    date_ajout: { type: DataTypes.DATE, allowNull: false }
  });

  HistoriqueFichiersMedicaux.associate = models => {
    HistoriqueFichiersMedicaux.belongsTo(models.Patient, {
      foreignKey: 'patient_id',
      as: 'patient'
    });
    HistoriqueFichiersMedicaux.belongsTo(models.FichierMedical, {
      foreignKey: 'fichier_id',
      as: 'fichier'
    });
  };

  return HistoriqueFichiersMedicaux;
};
