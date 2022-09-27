const jobRepository = require('../repository/jobRepository')
const profileRepository = require('../repository/profileRepository')
const createError = require('http-errors')

const jobController = {
    async findAllUnpaid(req, res) {
        const jobs = await jobRepository.findAllUnpaidJobs(req.profile.id)
        res.    json(jobs || [])
    },

    async paymantForJob(req, res) {
        const jobId = req.params.jobId
        const profileId = req.profile.id
        if (isNaN(jobId)) throw createError(400, 'jobId is not a valid number')

        const clientHasBalance = await profileRepository.balanceForPaying(profileId, jobId)
        if (clientHasBalance) {
            await jobRepository.pay(jobId)
            await profileRepository.payJob(profileId, jobId)
            res.status(200)
        } else {
            throw createError(400, 'not enough balance for paying job')
        }

    }
}

module.exports = jobController
