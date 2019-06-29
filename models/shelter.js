module.exports = (sequelize, type) => {
  return sequelize.define('shelter', {
      ID: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      NAME: type.STRING,
      PHONE: type.INTEGER,
      ZIPCODE: type.INTEGER,
      CURRENT_TIMESTAMP: type.DATE,
      GUID: type.UUID   
  
  });
};
