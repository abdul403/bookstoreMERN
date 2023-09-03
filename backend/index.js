import express from "express";
import { PORT, mongodbURL } from "./config.js";
import mongoose from "mongoose";
import bookRouter from "./routes/bookRoute.js";
import cors from "cors";

const app = express();

app.get("/", (request, response) => {
  console.log(request);
  return response.status(234).end("Welocme to mern stack course");
});

app.use(cors());

// app.use(
//   cors({
//     origin: "http://localhost:3000",
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     allowedHeaders: "Content-Type",
//   })
// );

app.use(express.json());

app.use("/books", bookRouter);

mongoose
  .connect(mongodbURL)
  .then(() => {
    console.log("App is Connected to database");
    app.listen(PORT, () => {
      console.log(`App is listening on PORT: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
