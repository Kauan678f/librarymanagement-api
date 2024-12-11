import { Request, Response } from "express";

// models
import Book from "../models/Book";
//

// interfaces
import IResponseErro from "../interfaces/response/IResponseErro";
import IBook from "../interfaces/book/IBook";
import IResponseList from "../interfaces/response/IResponseList";
//

class BookController {
    async searchAll(request: Request, response: Response): Promise<void> {
        try {
            let data: IResponseList<IBook> | IResponseErro = await Book.searchAll()
            if(data.ok == false){
                let jsonResponseErro: IResponseErro = {
                    ok: false,
                    messageError: data.messageError,
                }
                response.status(406);
                response.json(jsonResponseErro);
                return;
            }else{
                let jsonResponse: IResponseList<IBook> = {
                    ok: true,
                    data: data.data
                }
                response.status(200);
                response.json(jsonResponse);
                return;
            }
        }catch(error: any){
            let jsonResponseErro: IResponseErro = {
                ok: false,
                code: error.code,
                messageError: "Erro no servidor, verifique sua internet, ou tente mais trade"
            }
            response.status(406);
            response.json(jsonResponseErro);
            return;
        }
    }
}

export default new BookController();