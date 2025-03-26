import express from "express";
import dbconnect from "./config.js";
import routes from "./routes/routes.js";

const app = express();

// Remove all CORS restrictions (for development only)
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});

app.use(express.json());
app.use("/arduino", routes);

// Add simple request logger
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl}`);
  next();
});

dbconnect();

app.listen(3001, () => {
  console.log(`
  Server running in OPEN CORS MODE
  Accessible from any origin
  API Base URL: http://localhost:3001/arduino
  `);
});