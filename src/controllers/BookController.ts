import { Request, Response } from "express";
import Book from "../models/Book";

class BookController {
    async searchAll(request: Request, response: Response): Promise<void> {
        try {
            let data = await Book.searchAll()
            if(data.status == false){
                response.json(data)
            }else{
                response.json(data)
            }
        }catch(error: any){
            response.json(error)
        }
    }
}

export default new BookController();