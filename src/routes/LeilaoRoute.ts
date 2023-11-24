import { Router } from "express";
import LeilaoController from "../controllers/LeilaoController";
import UsuarioRouter from "./UsuarioRoute";

const LeilaoRouter = Router();

LeilaoRouter.get('/leiloes', LeilaoController.listLeilao);
/*LeilaoRouter.get('/leiloes', LeilaoController.listLeilao)

LeilaoRouter.post('/leilao', LeilaoController.createLeilao);

LeilaoRouter.put('/leilao', LeilaoController.updateLeilao);

LeilaoRouter.delete('/leilao', LeilaoController.fecharLeilao);
*/
export default LeilaoRouter;