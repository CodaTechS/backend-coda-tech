import dotenv from "dotenv";
import express from "express";

import allRoutes from "../src/routes/index-routes";

import { httpLoggerMiddleware } from "./middlewares/http-logger";

// Constants

const app = express();

/***************
 * Middlewares *
 ***************/

app.use(express.urlencoded({ extended: true }));

// Dotenv config
dotenv.config({
  path: `environment/.env.${process.env.NODE_ENV}`,
});

// JSON body parser middleware
app.use(express.json());

// HTTP logger middleware
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
app.use(httpLoggerMiddleware);

/**********
 * Routes *
 **********/

// Apply all routes
allRoutes.forEach((router) => {
  app.use(router);
});

/***************
 * Server init *
 ***************/
const serverPort = process.env.PORT || 3000;

app.listen(serverPort, () => {
  console.log(`Server running on port ${serverPort}`);
  console.log(`Environment: ${process.env.NODE_ENV}`);
});
