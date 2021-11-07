module.exports = (sequelize, DataTypes) => {
    const Chinese = sequelize.define('Chinese', {
        name: DataTypes.STRING,
        hours:DataTypes.STRING,
        price: DataTypes.STRING,
        date: DataTypes.STRING,
    })
    return Chinese
}