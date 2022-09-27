const jobRepository = require('../repository/jobRepository')
const profileRepository = require('../repository/profileRepository')


const adminController = {
    async findHighPayingJob(req, res) {
        const result = await jobRepository.findHighPayingJob(req.query.start, req.query.end)
        res.json(result || [])
    },
    async findAllHighPayingClients(req, res) {
        const result = await profileRepository.findAllHighPayingClients(req.query.start, req.query.end, req.query.limit)
        res.json(result || [])
    }
}

module.exports = adminController
