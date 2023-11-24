import { PrismaClient } from '@prisma/client'
import UsuarioService from './services/UsuarioService'
import LeilaoService from './services/LeilaoService'
import LanceService from './services/LanceService'

const prisma = new PrismaClient()

async function main() {

  await prisma.usuario.create({
    data: {
        nome: 'otavio fulano',
        email: 'fulano@gmail.com'
    }
  })

  await prisma.usuario.create({
    data:{
       nome: 'Caroline Andrade',
       email: 'carolineAndrade@gmail.com'
    }
  })

 /* await prisma.lance.create({
    data:{
      compradorid: 'otavio fulano',
      leilaoid: '1',
      valor: 3000
    }
  })

  await prisma.leilao.create({
    data:{
      produto: 'computador',
      preco: 3000,
      datalimite: '31 December 2023 23:59:59 GMT',
      donoid: 'otavio fulano',
      lista_de_lances: '2'
    }
  })*/
  
    /*console.log(await UsuarioService.listUsuario())
    console.log(await UsuarioService.createUsuario())
    console.log(await UsuarioService.updateUsuario())
    console.log(await UsuarioService.deleteUsuario('15aafa44-0ce8-413f-8b8e-7dee49849f59'))

    console.log(await LeilaoService.listLeilao())
    console.log(await LeilaoService.createLeilao())
    console.log(await LeilaoService.updateLeilao())
    console.log(await LeilaoService.fecharLeilao(''))

    console.log(await LanceService.listLance())
    console.log(await LanceService.createLance())
    console.log(await LanceService.updateLance())
    console.log(await LanceService.deleteLance(''))*/
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
