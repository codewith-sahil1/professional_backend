import mongoose from "mongoose";
import { DB_NAME } from "./constants";
/*

// this is the first approach of connecting the database here it is in the index.js but we are taking a better and more professional approach >> where we are writing all the lines of code of connecting the database with another file and folder and only we will export to here....

import express from "express";

const app = express();

(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`, {
   
    });
    console.log("Connected to MongoDB");

    app.listen(process.env.PORT, () => {
      console.log(`App is listening on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.log("Error: ", error);
    throw error;
  }
})();

app.on("error", (error) => {
  console.log("ERROR", error);
  throw error;
});

*/



