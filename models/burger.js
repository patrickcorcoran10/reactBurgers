module.exports = function(sequelize, DataTypes) {
    reactburger = sequelize.define('reactburgers', {
        name: DataTypes.STRING,
        eaten: DataTypes.BOOLEAN
    });
    return reactburger;
}