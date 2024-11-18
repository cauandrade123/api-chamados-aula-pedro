import * as db from '../repository/chamadorepository.js'
import {Router} from "express";

const endpoints = Router();

endpoints.post('/inserirChamado', async (req, resp) => {

    let chamado = req.body


    try {

        let resposta = await db.inserirChamado(chamado)

        resp.send({resposta: resposta})
        
    } catch (error) {
        resp.status(400).send({error: error})
    }

})


endpoints.delete('/remover/chamado/:id', async (req,resp) =>{

    try {
        let removerChamado = req.params.id


        let resposta = await db.removerChamado(removerChamado)

        resp.status(200).send(resposta)
    } catch (error) {
        resp.status(400).send(error)
    }


})

endpoints.put('/editarChamado', async (req, resp) => {

    let chamado = req.body


    try {

        let resposta = await db.editarChamado(chamado)

        resp.send({resposta: resposta})
        
    } catch (error) {
        resp.status(400).send({error: error})
    }

})


endpoints.get('/consultar/chamado', async (req,resp) =>{
    try {
      let resposta  = await db.ConsultarChamados()

      resp.status(200).send(
        resposta
      )


    } catch (error) {
        resp.status(500).send({error: error})
    }
})
export default endpoints;