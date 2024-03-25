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
//DELETE

const app = Express();
const PORT = 3333;
app.use(Express.json());
app.use(router);

app.listen(3333, () => console.log("Server started 3333"));// Cliente
//app.listen(3333, () => console.log("Server started 3333"));// Servidor
////////////////////////////////////////////////////////////////////
app.get('/', (req, res) => {
    res.send('Hello World!cdcsdcsdc');
});
  
 // app.listen(8080, () => {
   // console.log('Server is running on port 8080');
 // });