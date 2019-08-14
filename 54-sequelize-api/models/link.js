'use strict';
module.exports = (sequelize, DataTypes) => {
  const Link = sequelize.define('Link', {
    url: DataTypes.STRING,
    UserId: DataTypes.INTEGER
  }, {});
  Link.associate = function(models) {
     Link.belongsTo(models.User);
     Link.belongsToMany(models.User, { through: models.LinkUser, as: 'likedBy' });
  };
  return Link;
};