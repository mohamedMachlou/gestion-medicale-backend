const { v4: uuidv4 } = require('uuid');

module.exports = (sequelize, DataTypes) => {
  const FichierMedical = sequelize.define('FichierMedical', {
    id: {
      type: DataTypes.STRING,
      defaultValue: uuidv4,
      primaryKey: true
    },
    nom: { type: DataTypes.STRING(255), allowNull: false },
    type: { type: DataTypes.STRING(50), allowNull: false },
    chemin_acces: { type: DataTypes.STRING(255), allowNull: false },
    date_creation: { type: DataTypes.DATE, allowNull: false }
  }, {
    timestamps: true
});

  FichierMedical.associate = models => {
    FichierMedical.hasMany(models.HistoriqueFichiersMedicaux, {
      foreignKey: 'fichier_id',
      as: 'historiqueFichiers'
    });
  };

  return FichierMedical;
};
