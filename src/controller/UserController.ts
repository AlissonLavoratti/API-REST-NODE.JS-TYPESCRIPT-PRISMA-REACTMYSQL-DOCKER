import { Request, Response } from "express";
import { prisma } from "../database/prisma";
import { hash } from "bcryptjs";


export const createUser = async (req: Request, res: Response) => {
    const { name, email, password, accessName } = req.body;//significa que ele vai receber as informações do corpo do html

    // Verifica se o email é unico no banco de dados 
    const isUerEmail = await prisma.user.findUnique({
        where: { email }
    })

    if (isUerEmail) {
        return res.status(400).json({ message: "Já existe um usuário cadastrado com este email" })
    }

    // Criptografar banco de dados
    const hashPassword = await hash(password, 8)

    const user = await prisma.user.create({
        data: {
            name,
            email,
            password: hashPassword,
            Access: {
                connect: {
                    name: accessName
                }
            }
        },//dados similares aos que estao na Model, se for diferente a IDE sabe e nos avisa
    });

    return res.json(user);
};

export const deleteManyUser = async (req: Request, res: Response) => {

    // Verifica se o email é unico no banco de dados 
    await prisma.user.deleteMany()

    return res.json({ message: "Usuário deletado" });
};