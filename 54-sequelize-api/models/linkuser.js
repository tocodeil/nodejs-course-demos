'use strict';
module.exports = (sequelize, DataTypes) => {
  const LinkUser = sequelize.define('LinkUser', {
    UserId: DataTypes.INTEGER,
    LinkId: DataTypes.INTEGER
  }, {});
  LinkUser.associate = function(models) {
    // associations can be defined here
  };
  return LinkUser;
};