import { Request, Response } from "express";
import { prisma } from "../database/prisma";


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