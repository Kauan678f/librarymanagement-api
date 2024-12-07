import express, { Router } from "express";
import HomeController from "../controllers/HomeController"; 
import BookController from "../controllers/BookController";

const router: Router = express.Router();  

router.get('/', HomeController.index);

// Book
router.get('/book', BookController.searchAll)

export default router;