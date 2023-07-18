import httpStatus from "http-status";
import catchAsync from "../shared/catchAsync";
import sendResponse from "../shared/sendResponse";
import { IBook } from "./books.interface";
import { BooksService } from "./books.service";
import { Request, Response } from "express";

const getAllBooks = catchAsync(async (req: Request, res: Response) => {
  const result = await BooksService.getAllBooks();
  sendResponse<IBook[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "book data is loaded",
    data: result.data,
  });
});

const createBook = catchAsync(async (req: Request, res: Response) => {
  const result = await BooksService.createBook(req.body);
  sendResponse<IBook>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "book added successfylly",
    data: result,
  });
});

export const BooksController = {
  getAllBooks,
  createBook,
};
