import db from "../database/connection";

class Book {
    async searchAll() : Promise<any> {
        try {
            let response = await db.select(
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
            if(response.length <= 0){
                return {
                    status: false,
                    messageError: 'Não existe nenhum livro cadastrado no sistema!'
                }
            }else {
                return {
                    status: true,
                    data: response
                }
            }
        }catch(error: any){
            return {
                status: false,
                code: error.code,
                messageError: "Erro no servidor, verifique sua internet, ou tente mais trade"
            }
        }
        

    } 
}

export default new Book();