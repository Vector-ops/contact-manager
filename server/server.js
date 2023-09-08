const express = require("express");
const app = express();
require("dotenv").config();

const contactRoute = require("./routes/contact.route");
const userRoute = require("./routes/user.route");
const connectDB = require("./db/connect");
const errorHandler = require("./middleware/errorHandler");

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/api/contacts", contactRoute);
app.use("/api/user", userRoute);
app.use(errorHandler);

const startServer = async () => {
  try {
    await connectDB(process.env.MONGO_URI, process.env.MONGO_DB);
    app.listen(PORT, () => {
      console.log(`Server live on port ${PORT}...`);
    });
  } catch (error) {
    console.error(error);
  }
};

startServer();
