import mongoose from "mongoose";

mongoose
  .connect("mongodb://localhost:27017", {
    dbName: "Backend_Form_Data",
  })
  .then(() => {
    console.log("Database Connected!");
  })
  .catch((err) => {
    console.log("Unable to Connect to MongoDB");
  });
