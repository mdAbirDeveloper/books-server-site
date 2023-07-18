import { Schema } from "mongoose";
import { IBook } from "./books.interface";

const mongoose = require("mongoose");

// Create a Book schema
const BookSchema = new Schema<IBook>({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
  publicationDate: {
    type: String,
    required: true,
  },
});

// Create a Book model
export const BookModel = mongoose.model("Book", BookSchema);
