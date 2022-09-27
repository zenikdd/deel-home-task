const profileRepository = require('../repository/profileRepository')
const jobRepository = require('../repository/jobRepository')
const createError = require('http-errors')


const lessOrEqual25Percent = async (amount, clientId) => {
    const totalAmount = await jobRepository.findSumOfJobPricesByProfile(clientId)
    return 25.0 >= (amount/totalAmount)*100;
}

const balanceController = {
    async deposit(req, res) {
        const clientId = req.params.userId

        if(isNaN(req.body.amount)){
            throw createError(400, 'Amount must be a positive value')
        }

        if (await lessOrEqual25Percent(req.body.amount, clientId)) {
            await profileRepository.deposit(clientId, req.body.amount)
            res.status(200)
        } else {
            throw createError(400, 'can\'t deposit more than 25% your total of jobs to pay')
        }
    }
}

module.exports = balanceController
