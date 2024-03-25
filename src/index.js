// Importar as dependências necessárias
const Express = require('express');
const path = require('path');

// Criar uma instância do Express
const app = Express();

// Definir a rota para acessar o conteúdo do index.html
app.get('/', (req, res) => {
    // Configurar o caminho absoluto para o arquivo index.html

    res.sendFile("C:/Users/aliss/OneDrive/Documentos/GitHub/API-REST-NODE.JS-TYPESCRIPT-PRISMA-REACTMYSQL-DOCKER/src/View/site/index.html")


    // const indexPath = path.join(__dirname, '/src/View/site/index.html');
    
    // Servir o arquivo HTML estático
    // res.sendFile(indexPath);
});

// Exportar a instância do Express configurada
module.exports = app;
