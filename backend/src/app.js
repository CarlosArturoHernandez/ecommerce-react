import express from "express";
import authRoutes from "../src/routes/authentication.routes.js";
import useragent from "express-useragent";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config({ path: "C:/Users/Carlos/my-projects/ecommerce-react/.env" });
const reactPort = process.env.REACT_LOCAL_PORT;

const app = express();

app.use(express.json());
app.use(useragent.express());

app.use(
  cors({
    origin: `http://localhost:${reactPort}`,
    credentials: true,
  })
);
app.use(express.static("public"));
app.use(useragent.express());
app.use(express.urlencoded({ extended: true }));

app.use("/api", authRoutes);

export default app;
