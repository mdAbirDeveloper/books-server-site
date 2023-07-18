import mongoose from "mongoose";

export type IBook = {
  title: string;
  author: string;
  genre: string;
  publicationDate: string;
};
