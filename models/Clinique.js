const { v4: uuidv4 } = require('uuid');

module.exports = (sequelize, DataTypes) => {
  const Clinique = sequelize.define('Clinique', {
    id: {
      type: DataTypes.STRING,
      defaultValue: uuidv4,
      primaryKey: true
    },
    nom: { type: DataTypes.STRING(100), allowNull: false },
    adresse: { type: DataTypes.STRING(255), allowNull: false },
    telephone: { type: DataTypes.STRING(15), allowNull: false }
  }, {
    timestamps: true
});

  Clinique.associate = models => {
    Clinique.hasMany(models.Medecin, {
      foreignKey: 'clinique_id',
      as: 'medecins'
    });
  };

  return Clinique;
};
