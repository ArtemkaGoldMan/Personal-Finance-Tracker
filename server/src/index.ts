import express, { Express } from "express";
import mongoose from "mongoose";

const app: Express = express();
const port = process.env.PORT || 3001;

app.use(express.json());

const mongoURI: string =
  "mongodb+srv://artemych16:guRkqMlH8ziDTfWt@personalfinancetracker.vlo3s.mongodb.net/";

mongoose
  .connect(mongoURI)
  .then(() => console.log("Connected to MONGODB!"))
  .catch((err) => console.error("Failed to connect to MONGODB", err));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
