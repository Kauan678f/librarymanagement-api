import { Request, Response } from "express";

class HomeController {

    async index(request: Request, response: Response): Promise<void> {
        response.send("APP EXPRESS! - Guia do programador");
    }

}

export default new HomeController();