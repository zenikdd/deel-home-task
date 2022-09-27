const {sequelize} = require('../model/model')

const {Profile} = sequelize.models

const getProfile = async (req, res, next) => {
    console.log(req.get('profile_id'))
    const profile = await Profile.findOne({where: {id: req.get('profile_id') || 0}})
    if(!profile) return res.status(401).end()
    req.profile = profile
    next()
}
module.exports = {getProfile}
