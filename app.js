import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import authRoute from "./routes/auth.js";
import "./database/database.js";

const app = express();
dotenv.config();

// Constants
const PORT = process.env.PORT || 5005;
const IP_ADDRES = process.env.IP_ADDRES;

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// Routes
app.use("/api/auth", authRoute);

app.listen(PORT, IP_ADDRES, (err) => {
  if (err) {
    return console.log(err);
  }
  console.log(`OK - Server, PORT ${PORT}`);
});
