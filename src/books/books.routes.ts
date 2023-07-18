import express from "express";
import { BooksController } from "./books.controller";

const router = express.Router();

router.get("/", BooksController.getAllBooks);
router.post("/createBook", BooksController.createBook);

export const BooksRoutes = router;
