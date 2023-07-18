import express from "express";
import { BooksRoutes } from "../books/books.routes";

const router = express.Router();

const moduleRoutes = [
  {
    path: "/book",
    route: BooksRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));
export default router;
