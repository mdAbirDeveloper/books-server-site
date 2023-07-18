import {
  NextFuntion,
  RequestHandler,
  Request,
  Response,
  Promise,
} from "express";

const catchAsync =
  (fn: RequestHandler) =>
  async (req: Request, res: Response, next: NextFuntion): Promise<void> => {
    try {
      await fn(req, res, next);
    } catch (error) {
      next(error);
    }
  };

export default catchAsync;
