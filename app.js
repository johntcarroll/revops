const app = require("express")();
const apiRoutes = require("./routes/api")

app.use('/api', apiRoutes);

module.exports = app;