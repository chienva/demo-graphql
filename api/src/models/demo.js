export default (sequelize, DataTypes) => {
    return sequelize.define('demos', {
        caption: {
            type: DataTypes.STRING
        },
        content: {
            type: DataTypes.TEXT
        }
    })
}