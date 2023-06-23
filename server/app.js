import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import blogRouter from "./routes/blog-routes.js";
import router from "./routes/user-routes.js";
import cors from "cors";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/user", router);
app.use("/api/blog", blogRouter);

const PORT = process.env.PORT || 8000;
const B=process.env.DATABASE_URL;
mongoose
  .connect('mongodb+srv://salma:salma@mernapp.geu28zf.mongodb.net/')
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Connected to Database and listening on PORT ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Failed to connect to Database:", err);
  });
