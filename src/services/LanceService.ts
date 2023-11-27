import { Prisma, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class LanceService {
    constructor(){

    }

    /*async listLance(id?: string){
        try{
            if(id){
                const lance = await prisma.lance.findUnique({
                    where: {
                        id
                    }
                });
                return lance;
            }else{
                const lances = await prisma.lance.findMany();
                return lances;
            }
        }catch(error){
            console.log(error);
            return null;
        }
    }*/
    async listLance(){
        try{
            const lances = await prisma.lance.findMany();
            return lances;
        }catch(error){
            console.log(error);
            return null;
        }
    }

    async createLance(lance: Prisma.LanceCreateInput){
        try{
            const newlance = await prisma.lance.create({
                data: lance
            });
            return newlance;
        }catch(error){
            console.log(error);
            return null;
        }
    }

    async updateLance(idlance: string, lance: Prisma.LanceUpdateInput){
        try{
            const updatedLance = await prisma.lance.update({
                where: {
                    idlance
                },
                data: lance
            });

            return updatedLance;
        }catch(error){
            console.log(error);
            return null;
        }
    }

    async deleteLance(idlance: string){
        try{
            const deletedLance = await prisma.lance.delete({
                where: {
                    idlance
                }
            });

            return deletedLance;
        }catch(error){
            console.log(error);
            return null;
        }
    }
}

export default new LanceService();