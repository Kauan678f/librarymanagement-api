import db from "../database/connection";

// interfaces
import IResponseList from "../interfaces/response/IResponseList";
import IBook from "../interfaces/book/IBook";
import IResponseErro from "../interfaces/response/IResponseErro";
//

class Book {
    async searchAll() : Promise<IResponseList<IBook> | IResponseErro> {
        try {
            let response: IBook[];
            response = await db.select(
                'book.idBook',
                'book.title',
                'book.genre',
                'book.year',
                'book.description',
                'author.firstName as authorFirstName',
                'author.lastName as authorLastName',
                'author.gender as authorGender',
                db.raw("DATE_FORMAT(author.birthDate, '%Y-%m-%d') AS authorBirthDate")
              ).from("book")
              .innerJoin("author", 'book.idAuthor', 'author.idAuthor')
              .where({genre: "Fantasy"})
              console.log(response)
            if(response.length <= 0){
                return {
                    ok: false,
                    messageError: 'Não existe nenhum livro cadastrado no sistema!'
                }
            }else {
                return {
                    ok: true,
                    data: response
                }
            }
        }catch(error: any){
            return {
                ok: false,
                code: error.code,
                messageError: "Erro no servidor, verifique sua internet, ou tente mais trade"
            }
        }
        

    } 
}

export default new Book();