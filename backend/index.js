import express from "express";
import mongoose from "mongoose";
import { PORT, mongoDBURL } from "./config.js";
import router from "./routes/bookRoutes.js";
import cors from "cors";
const app = express();

// Adding json middleware
app.use(express.json());

app.use(cors());

// Defining the / rout
app.get("/", (request, response) => {
  console.log(request);
  return response.status(234).send("WELCOME to MERNSTACK Development");
});

app.use("/books", router);

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("Connected to MongoDB Database");
    app.listen(PORT, () => {
      console.log(`Backend of our App is running at port: ${PORT}!!!!!! `);
    });
  })
  .catch((error) => {
    console.log(error);
  });
