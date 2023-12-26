const uuid = require('uuid')
const path = require('path');
const { Menu, MenuInfo } = require('../models/models')
const ApiError = require('../error/ApiError')

class MenuController {
    async create(req, res, next) {
        try {
            let { name, price, typeId, info } = req.body
            const { img } = req.files
            let fileName = uuid.v4() + ".jpg"
            img.mv(path.resolve(__dirname, '..', 'static', fileName))
            const menu = await Menu.create({ name, price, typeId, img: fileName });

            if (info) {
                info = JSON.parse(info)
                info.forEach(i =>
                    MenuInfo.create({
                        title: i.title,
                        description: i.description,
                        menuId: menu.id
                    })
                )
            }

            return res.json(menu)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res) {
        let {typeId, limit, page} = req.query
        page = page || 1
        limit = limit || 9
        let offset = page * limit - limit
        let menus;
        if (!typeId) {
            menus = await Menu.findAndCountAll({limit, offset})
        }
        if(typeId) {
            menus = await Menu.findAndCountAll({where:{typeId}, limit, offset})
        }
        return res.json(menus)
    }

    async getOne(req, res) {
        const {id} = req.params
        const menu = await Menu.findOne(
            {
                where: {id},
                include: [{model: MenuInfo, as: 'info'}]
            }
        )
        return res.json(menu)
    }
}

module.exports = new MenuController()