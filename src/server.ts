import Express, { Router } from 'express';
import { router } from './router';

//npm run dev - RODAR SERVIDOR
//prisma migrate dev - update no banco de dados

//códigos
//200+ == Sucesso
//400+ == Erro do programador
//500+ == Bug na API que estamos consumindo

//GET - SELECT
//POST - INSERT
//

const app = Express();
app.use(Express.json());
app.use(router);

app.listen(3333, () => console.log("Server started"));