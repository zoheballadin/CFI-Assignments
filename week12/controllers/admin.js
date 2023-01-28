import express from "express";
import { isAuthenticated, isAdmin } from "../middlewares/auth/token.js";
import fs from "fs/promises";

import {bookValidations, errorMiddleware} from "../middlewares/validations/index.js"
import {randomStringGenerator} from "../utils/index.js"

let bookValidate = [bookValidations(),errorMiddleware]
const router = express.Router();

router.post("/books/add", bookValidate , isAuthenticated, isAdmin, async (req, res) => {
  let books = await fs.readFile("books.json");
  books = JSON.parse(books);
  let { ISBN } = req.body;

  let findBook = books.find((item) => item.ISBN === ISBN);
  if (findBook) {
    return res.status(409).json({ error: "Book already exists" });
  }

  let book = req.body;
  book.book_id = randomStringGenerator(12)
  books.push(book);
  await fs.writeFile("books.json", JSON.stringify(books));
  return res.status(200).json({ message: "Book Added Successfully" });
});

router.put("/books/:book_id",bookValidate, isAuthenticated, isAdmin, async (req, res) => {
  let id = req.params.book_id;

  let books = await fs.readFile("books.json");
  books = JSON.parse(books);
  let book = books.find((item) => item.book_id == id);
  let index = books.indexOf(book)
  if (!book) {
    return res.status(400).json({ error: "Book not found" });
  }
  book = req.body;
  
  book.book_id = id;
  books[index] = book;
  
  await fs.writeFile("books.json", JSON.stringify(books));
  return res.status(200).json({ success: "Book Edited Successfully" });
});

router.delete("/books/:book_id", isAuthenticated, isAdmin, async (req, res) => {
  let id = req.params.book_id;
  let books = await fs.readFile("books.json");
  books = JSON.parse(books);
  let book = books.find(item => item.book_id == id)
  console.log(id)
  if(!book){
    return res.status(400).json({error: "Book does not exist"})
  }

  books.splice(books.indexOf(book), 1);
  await fs.writeFile("books.json", JSON.stringify(books))
  return res.status(200).json({error: "Book deleted successfully"})
});

router.get("/books/:book_id", isAuthenticated, isAdmin, async(req,res)=>{
    let id = req.params.book_id;
    let books = await fs.readFile("books.json")
    books = JSON.parse(books);
    let book = books.find(item => item.book_id == id);
    if(!book){
        return res.status(400).json({error: "Book does not exist"})
    }
    return res.status(200).json(book)
})

router.get("/books", isAuthenticated, isAdmin, async(req,res)=>{
    let books = await fs.readFile("books.json")
    books = JSON.parse(books)
    if(!books){
        return res.status(400).json({error: "There are no books in the database"})
    }
    return res.status(200).json(books)
})

export default router;
