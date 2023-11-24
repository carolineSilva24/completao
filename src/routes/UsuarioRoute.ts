import UsuarioController from "../controllers/UsuarioController";
import { Router } from "express";

const UsuarioRouter = Router();

UsuarioRouter.get('/users', UsuarioController.listUsuarios);

/*UsuarioRouter.get('/users', UsuarioController.listUsuarios)

UsuarioRouter.post('/user', UsuarioController.createUsuario);

UsuarioRouter.put('/user', UsuarioController.updateUsuarios);

UsuarioRouter.delete('/user', UsuarioController.deleteUsuarios);
*/
export default UsuarioRouter;