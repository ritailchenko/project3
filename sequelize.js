const Sequelize = require('sequelize');
const DogModel = require('./models/dog');
const ShelterModel = require('./models/shelter');

const sequelize = new Sequelize('Dogs', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
  pool: {
    max: 100,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

const Dog = DogModel(sequelize, Sequelize);
const Shelter = ShelterModel(sequelize, Sequelize);

Dog.belongsTo(Shelter);

// Dog.sequelize.define('dog', {/* attributes */})
// Shelter.sequelize.define('shelter', {/* attributes */});

dbSync = () => {
  sequelize.sync({ force: false })
    .then(() => {
      console.log(`Database & tables created!`)
    });
}    // .query('SET FOREIGN_KEY_CHECKS = 0', {raw: true})
    // .then(function(results) {
    //     DB.sequelize.sync({force: false});
    // });

dbSync();

module.exports = {
  Dog,
  Shelter,
  dbSync
};
