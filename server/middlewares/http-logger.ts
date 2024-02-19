import { NextFunction } from "express";

import logger from "../../logger";

export const httpLoggerMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction,
): void => {
  if (process.env.SHOW_LOGGER === "true") {
    logger.info(`Request: ${req.method} ${req.url}`);
  }

  next();
};
