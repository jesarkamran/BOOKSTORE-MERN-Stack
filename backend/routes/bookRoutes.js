import express from "express";
import { Book } from "../model/BookModel.js";

const router = express.Router();
// CRUD Operation Routes
router.post("/", async (request, response) => {
  try {
    if (
      !request.body.title ||
      !request.body.author ||
      !request.body.publishYear
    ) {
      console.log(request.body.title, request.author, request.publishYear);
      return response
        .status(400)
        .send({ message: "Please fill all the fields" });
    }
    const newBook = {
      title: request.body.title,
      author: request.body.author,
      publishYear: request.body.publishYear,
    };

    const book = await Book.create(newBook);
    console.log(book);
    return response.status(201).send(book);
  } catch (error) {
    console.log(error);
    response.status(500).send({ message: error.message });
  }
});

router.get("/", async (request, response) => {
  try {
    const books = await Book.find({});
    response.status(200).json({ count: books.length, data: books });
  } catch (error) {
    console.log(error);
    response.status(500).send({ message: error.message });
  }
});

router.get("/:id", async (request, response) => {
  try {
    const id = request.params.id;
    const book = await Book.findById(id);
    response.status(200).json(book);
  } catch (error) {
    console.log(error);
    response.status(500).send({ message: error.message });
  }
});

router.put("/:id", async (request, response) => {
  try {
    if (
      !request.body.title ||
      !request.body.author ||
      !request.body.publishYear
    ) {
      console.log(request.body.title, request.author, request.publishYear);
      return response
        .status(400)
        .send({ message: "Please fill all the fields" });
    }
    const id = request.params.id;
    const newBook = {
      title: request.body.title,
      author: request.body.author,
      publishYear: request.body.publishYear,
    };

    const result = await Book.findByIdAndUpdate(id, newBook);
    if (!result) {
      return response.status(400).send({ message: "Book not Found" });
    }
    return response.status(201).send({ message: "Book Updated successfully" });
  } catch (error) {
    console.log(error);
    response.status(500).send({ message: error.message });
  }
});

router.delete("/:id", async (request, response) => {
  try {
    const id = request.params.id;
    const result = await Book.findByIdAndDelete(id);
    if (!result) {
      return response.status(400).send({ message: "Book not Found" });
    }
    return response.status(201).send({ message: "Book Deleted successfully" });
  } catch (error) {
    console.log(error);
    response.status(500).send({ message: error.message });
  }
});

export default router;
