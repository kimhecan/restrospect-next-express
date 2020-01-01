module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    nick: {
      type: DataTypes.STRING(20),
      allowNull: false,
      unique: true
    },
    userId: {
      type: DataTypes.STRING(20),
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
  }, {
    charset: 'utf8',
    collate: 'utf8_general_ci',
  });
  return User;
}