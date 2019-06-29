module.exports = (sequelize, type) => {
  return sequelize.define('dog', {
    ID: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    BREED: type.STRING,
    GENDER: type.STRING,
    IMAGE: type.STRING,
    CURRENT_TIMESTAMP: type.DATE,
    VIDEO: type.STRING,
    BOOKED_TIMESTAMP: type.DATE,
    // SHELTER:type.INTEGER
  });
};