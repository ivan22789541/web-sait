const sequelize = require('../db')
const { DataTypes } = require('sequelize')

const User = sequelize.define('user', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    email: { type: DataTypes.STRING, unique: true, },
    password: { type: DataTypes.STRING, },
    role: { type: DataTypes.STRING, defaultValue: "USER" },
})

const Basket = sequelize.define('basket', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
})

const BasketMenu = sequelize.define('basket_menu', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
})

const Menu = sequelize.define('menu', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, unique: true, allowNull: false },
    price: { type: DataTypes.INTEGER, allowNull: false },
    over: { type: DataTypes.INTEGER, defaultValue: 1 },
    img: { type: DataTypes.STRING, allowNull: false },
})

const Type = sequelize.define('type', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.INTEGER, unique: true, allowNull: false },
})

const MenuInfo = sequelize.define('menu_info', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.STRING, allowNull: false },
})

User.hasOne(Basket)
Basket.belongsTo(User)

Basket.hasMany(BasketMenu)
BasketMenu.belongsTo(Basket)

Type.hasMany(Menu)
Menu.belongsTo(Type)

Menu.hasMany(BasketMenu)
BasketMenu.belongsTo(Menu)

Menu.hasMany(MenuInfo)
MenuInfo.belongsTo(Menu)

module.exports = {
    User, 
    Basket, 
    BasketMenu, 
    Menu, 
    Type, 
    MenuInfo
}