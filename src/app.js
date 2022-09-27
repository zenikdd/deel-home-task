const express = require('express');
const bodyParser = require('body-parser');
const {getProfile} = require('./middleware/getProfile')
const contractRouter = require("./routes/contractRouter");
const jobRouter = require('./routes/jobRouter')
const balanceRouter = require('./routes/balanceRouter')
const adminRouter = require('./routes/adminRouter')
const appHandler = require('./middleware/appHandler')
const cors = require('cors');

const app = express();

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});

app.use(cors({
    origin: '*'
}));

app.use(bodyParser.json());
app.use(getProfile)
app.use(contractRouter)
app.use(jobRouter)
app.use(balanceRouter)
app.use(adminRouter)

app.use(appHandler.notFound);
app.use(appHandler.handleError);

module.exports = app;
