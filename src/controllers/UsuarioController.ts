import { Prisma } from "@prisma/client";
import { Request, Response } from "express";
import UsuarioService from "../services/UsuarioService";

class UsuarioController{

    constructor(){}

    async createUsuario(req: Request, res: Response){
        const dados: Prisma.UsuarioCreateInput = req.body;
        
        if(dados.email !== "" && dados.nome !== ""){
            const newusuario = await UsuarioService.createUsuario(dados)
            res.status(200).json({
                status: 'ok',
                newuser: newusuario
            });
        }else{
            res.status(400).json({
                status: 'error',
                message: 'Favor inserir os dados no corpo da requisição'
            })
        }
        res.send('Create usuario');

    }

    async listUsuarios(req: Request, res: Response){
        const users = UsuarioService.listUsuario();

        res.render('users', { users: users })

        /*res.status(200).json({
            status: 'ok',
            users: users
        })*/

        res.send('List usuario');
    }

    async updateUsuarios(req: Request, res: Response){
        res.send('Update usuario');
    }

    async deleteUsuarios(req: Request, res: Response){
        res.send('Delete usuario');
    }
}

export default new UsuarioController;