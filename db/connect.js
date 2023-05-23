const mongoose = require("mongoose");

const connectDB = (url, DBName) => {
  return mongoose.connect(url, { dbName: DBName });
};

mongoose.connection.on("connected", () => {
  console.log(
    "Connected to DB:",
    mongoose.connection.host,
    mongoose.connection.name
  );
});

// mongoose.connnection.on("error", (err) => {
//   console.error(err);
// });

mongoose.connection.on("disconnected", () => {
  console.log("DB disconnected..");
});

process.on("SIGINT", async () => {
  await mongoose.connection.close();
  process.exit(0);
});

module.exports = connectDB;
