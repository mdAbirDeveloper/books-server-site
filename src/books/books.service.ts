import { IBook } from "./books.interface";
import { BookModel } from "./books.model";

const getAllBooks = async () => {
  const result = await BookModel.find({});

  return {
    data: result,
  };
};

const createBook = async (payload: IBook): Promise<IBook> => {
  const result = await BookModel.create(payload);
  return result;
};

export const BooksService = {
  getAllBooks,
  createBook,
};
