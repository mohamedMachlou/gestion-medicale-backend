const { v4: uuidv4 } = require('uuid');

module.exports = (sequelize, DataTypes) => {
  const Cabinet = sequelize.define('Cabinet', {
    id: {
      type: DataTypes.STRING,
      defaultValue: uuidv4,
      primaryKey: true
    },
    nom: { type: DataTypes.STRING(100), allowNull: false },
    adresse: { type: DataTypes.STRING(255), allowNull: false },
    specialite: { type: DataTypes.STRING(100), allowNull: false }
  }, {
    timestamps: true
});

  Cabinet.associate = models => {
    Cabinet.hasMany(models.Medecin, {
      foreignKey: 'cabinet_id',
      as: 'medecins'
    });
  };

  return Cabinet;
};
