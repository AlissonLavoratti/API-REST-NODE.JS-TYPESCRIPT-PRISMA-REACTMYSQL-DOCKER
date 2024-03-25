import { Request, Response, request } from "express";
import { prisma } from "../database/prisma";
import fs from 'fs';



export const createAccess = async (req: Request, res: Response) => {
    const { name } = req.body;//significa que ele vai receber as informações do corpo do html

    const access = await prisma.access.create({
        data: { name },//dados similares aos que estao na Model, se for diferente a IDE sabe e nos avisa
    });

    return res.json(access);
};

export const getAllAccesses = async (req: Request, res: Response) => {

    const accesses = await prisma.access.findMany()

    return res.json(accesses);
};

export const getAllAccesseslogin = async (req: Request, res: Response) => {//funcao assincrona, executa todas as linhas de código ao mesmo tempo
    // const { name, password} = req.body;//significa que ele vai receber as informações do corpo do html
    //console.log(name, password)
    res.send("Tela de login1")
    //console.log("Tela de login")
    // const accesses = await prisma.access.findMany()

    // return res.json(accesses);
};

export const site = async (req: Request, res: Response) => {//funcao assincrona, executa todas as linhas de código ao mesmo tempo
    // const { name, password} = req.body;//significa que ele vai receber as informações do corpo do html
    //console.log(name, password)
    //res.send()
    //console.log("Tela de login")
    // const accesses = await prisma.access.findMany()

    // return res.json(accesses);
    try {
        // Lendo o conteúdo do arquivo index.js
        const indexFileContent = fs.readFileSync('src/View/site/index.html', 'utf-8');

        // Enviando o conteúdo do arquivo como resposta
        res.send(indexFileContent);
    } catch (error) {
        // Se houver algum erro ao ler o arquivo
        console.error('Erro ao ler o arquivo index.js:', error);
        res.status(500).send('Erro ao carregar o arquivo index.js');
    }   
};