const { v4: uuidv4 } = require('uuid');

module.exports = (sequelize, DataTypes) => {
  const Medecin = sequelize.define('Medecin', {
    id: {
      type: DataTypes.STRING,
      defaultValue: uuidv4,
      primaryKey: true
    },
    nom: { type: DataTypes.STRING(50), allowNull: false },
    prenom: { type: DataTypes.STRING(50), allowNull: false },
    specialite: { type: DataTypes.STRING(100), allowNull: false },
    adresse: { type: DataTypes.STRING(255), allowNull: false },
    telephone: { type: DataTypes.STRING(15), allowNull: false },
    email: { type: DataTypes.STRING(100), allowNull: false },
    mot_de_passe: { type: DataTypes.STRING(255), allowNull: false },
    clinique_id: { type: DataTypes.STRING, allowNull: false }
  }, {
    timestamps: true
});

  Medecin.associate = models => {
    Medecin.hasMany(models.Consultation, {
      foreignKey: 'medecin_id',
      as: 'consultations'
    });
    Medecin.belongsTo(models.Clinique, {
      foreignKey: 'clinique_id',
      as: 'clinique'
    });
    Medecin.hasMany(models.RendezVous, {
      foreignKey: 'medecin_id',
      as: 'rendezVous'
    });
  };

  return Medecin;
};
