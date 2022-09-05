import mongoose from "mongoose";

const connectionMongoDb = () => {
  const connectionString = process.env.MONGO_CONNECTION_STRING;
  mongoose
    .connect(connectionString, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    })
    .then((res) =>
      console.log(`MongoDB Connected: ${res.connection.host}`.blue.bold)
    )
    .catch((error) => {
      console.error(`Error: ${error.message}`.red.underline.bold);
      process.exit(1);
    });
};

export default connectionMongoDb;
