import express, { Express } from "express";
import cors from "cors"
import bodyParser from "body-parser";
import router from "./routes/routes"; 

const app: Express = express();

app.use(cors());

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// Parse application/json
app.use(bodyParser.json());

// Adicionar rotas
app.use("/", router);

// Iniciar o servidor
const PORT = 8686;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});