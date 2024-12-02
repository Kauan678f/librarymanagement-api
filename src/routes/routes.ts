import express, { Router } from "express";
import HomeController from "../controllers/HomeController"; 

const router: Router = express.Router();  

router.get('/', HomeController.index);

export default router;