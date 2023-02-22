import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";
import { Configuration, OpenAIApi } from "openai";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", async (req, res) => {
  res.status(200).send({
    message: "This is ChatGPT AI app clone.",
  });
});

app.listen(4000, (req, res) => {
  console.log("App running perfectly on port 4000");
});
