import chamadoController from '../src/controller/chamadoController.js'


export default function adicionarRotas(servidor){
   servidor.use(chamadoController)
}