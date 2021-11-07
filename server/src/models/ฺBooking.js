module.exports = (sequelize, DataTypes) => {
    const Booking = sequelize.define('Booking', {
        name: DataTypes.STRING,
        lastname:DataTypes.STRING,
        email: DataTypes.STRING,
        tel: DataTypes.STRING,
        course: DataTypes.STRING,
    })
    return Booking
}