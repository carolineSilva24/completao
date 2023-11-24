import { Prisma } from "@prisma/client";
import { Request, Response } from "express";
import LeilaoService from "../services/LeilaoService";

class LeilaoController{

    constructor(){}

    async createLeilao(req: Request, res: Response){
        const dados: Prisma.LeilaoCreateInput = req.body;
        
        if(dados.datalimite !== "" && dados.lista_de_lances !== "" && dados.preco !== 0 && dados.produto !== ""){
            const newleilao = await LeilaoService.createLeilao(dados)
            res.status(200).json({
                status: 'ok',
                newleilao: newleilao
            });
        }else{
            res.status(400).json({
                status: 'error',
                message: 'Favor inserir os dados no corpo da requisição'
            })
        }

        res.send('Create leilao');
    }

    async listLeilao(req: Request, res: Response){
        const leiloes = LeilaoService.listLeilao();

        res.render('leiloes', {leiloes: leiloes})
        /*res.status(200).json({
            status: 'ok',
            leiloes: leiloes
        })*/

        res.send('List leilao');
    }

    async updateLeilao(req: Request, res: Response){
        res.send('Update leilao');
    }

    async fecharLeilao(req: Request, res: Response){
        res.send('Delete leilao');
    }
}

export default new LeilaoController;
