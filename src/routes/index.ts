import TaskRoutes from "../task/routes";
import express from "express";
const app = express();

app.use("/api", TaskRoutes);
export  default app;


