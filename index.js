import express from "express";
import healthCheck from "./health-check.js";
import integratedAiRouter from "./integrated-ai.js";

const app = express();

app.get("/health", healthCheck);
app.use("/integrated-ai", integratedAiRouter);

export default app;