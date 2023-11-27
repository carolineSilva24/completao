import { PrismaClient } from '@prisma/client'
import UsuarioService from './services/UsuarioService'
import LeilaoService from './services/LeilaoService'
import LanceService from './services/LanceService'

const prisma = new PrismaClient()

async function main() {
 //Insira as queries neste formato:
    // const usuario1 = await prisma.usuario.create({
    //     data: {
    //         nome: "Marley",
    //         email: "marnemarne@marne.com.uvv"
    //     }
    // })
    // const leilao1 = await prisma.leilao.create({
    //     data: {
    //         idleilao: "1",
    //         idProduto: "1",
    //         lanceid: "1",
    //         preco: 12.2,
    //         donoid: "Marley"
    //     }
    // })

    // const lance1 = await prisma.lance.create({
    //     data: {
    //         idlance: "1",
    //         compradorid: "Marley",
    //         leilaoid: "1",
    //         valor: 12.2
    //     }
    // })
 
 /*    const usuario2 = await prisma.usuario.create({
           data: {
               nome: 'otavio fulano',
               email: 'fulano@gmail.com'
    }
       })

       const usuario3 = await prisma.usuario.create({
           data:{
               nome: 'Caroline Andrade',
               email: 'carolineAndrade@gmail.com'
    }
  })*/
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
