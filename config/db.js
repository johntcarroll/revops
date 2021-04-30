module.exports = {
  host: process.env.DBHOST || "127.0.0.1",
  port: process.env.DBPORT || "27017",
  database: process.env.DBNAME || "revops",
  mongooseOptions: {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
};
