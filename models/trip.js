// Creating our trips model
module.exports = function(sequelize, DataTypes) {
  var Trip = sequelize.define("Trip", {
    // The email cannot be null, and must be a proper email before creation
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    trip_name: {
        type: DataTypes.STRING,
        allowNull: false,
    }
  });
  return Trip;
};
