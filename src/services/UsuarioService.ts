import { Prisma, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class UsuarioService {
    constructor(){}

    /* async listUsuario(id?: string){
        try{
            if(id){
                const user = await prisma.usuario.findUnique({
                    where: {
                        id
                    }
                });
                return user;
            }else{
                const users = await prisma.usuario.findMany();
                return users;
            }
        }catch(error){
            console.log(error);
            return null;
        }
    }*/

    async listUsuario(){
        try{
            const users = await prisma.usuario.findMany();
            return users;
        }catch(error){
            console.log(error);
            return null;
        }
    }

    async createUsuario(user: Prisma.UsuarioCreateInput){
        try{
            const newuser = await prisma.usuario.create({
                data: user
            });
            return newuser;
        }catch(error){
            console.log(error);
            return null;
        }
    }

    async updateUsuario(nome: string, user: Prisma.UsuarioUpdateInput){
        try{
            const updatedUser = await prisma.usuario.update({
                where: {
                    nome
                },
                data: user
            });

            return updatedUser;
        }catch(error){
            console.log(error);
            return null;
        }
    }

    async deleteUsuario(nome: string){
        try{
            const deletedUser = await prisma.usuario.delete({
                where: {
                    nome
                }
            });

            return deletedUser;
        }catch(error){
            console.log(error);
            return null;
        }
    }
}

export default new UsuarioService();