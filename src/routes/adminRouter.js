const { Router } = require('express')
const controller = require('../controller/adminController')

const adminRouter = Router()

adminRouter.get('/admin/best-profession', controller.findHighPayingJob)
adminRouter.get('/admin/best-clients', controller.findAllHighPayingClients)

module.exports = adminRouter
