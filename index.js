const mongoose = require("mongoose");
const app = require("./app");
const { app: appConfig, db, logger } = require("./config");

let server;
mongoose.connect("mongodb://" + db.host + ":" + db.port + "/" + db.database, db.mongooseOptions).then(() => {
  logger.info('Connected to MongoDB');
  server = app.listen(appConfig.port, () => {
    logger.info(`Listening to port ${appConfig.port}`);
  });
}).catch((err) => {
  logger.error(err);
  process.exit(1);
});

const exitHandler = () => {
  if (server) {
    server.close(() => {
      logger.info('Server closed');
      process.exit(1);
    });
  } else {
    process.exit(1);
  }
};

const unexpectedErrorHandler = (error) => {
  logger.error(error);
  exitHandler();
};

process.on('uncaughtException', unexpectedErrorHandler);
process.on('unhandledRejection', unexpectedErrorHandler);

process.on('SIGTERM', () => {
  logger.info('SIGTERM received');
  if (server) {
    server.close();
  }
});