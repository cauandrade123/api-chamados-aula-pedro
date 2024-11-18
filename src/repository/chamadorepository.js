import con from "./connection.js";

export async function inserirChamado (chamado){

    /*
    campos do parametro body: 
    titulo
    informacao
    impacto
    dt_data
    nome
    */

    let SQl = `
    insert into tb_chamado(titulo, informacao, impacto, dt_data, nome)
    values(?,?,?,?,?)
    `

    let info =  await con.query(SQl, [chamado.titulo, chamado.informacao, chamado.impacto, chamado.dt_data, chamado.nome])

    let resp = info[0]
    return resp.insertId
}


export async function removerChamado (id) {
    let SQL = `
    delete from tb_chamado where id = ?
    `

    let info = await con.query(SQL, [id])

    let resp = info [0]
    return resp.affectedRows
}

export async function editarChamado (chamado) {
    let SQL = `
    update tb_chamado 
    set titulo = ?,  informacao = ?, impacto = ?, dt_data = ?, nome = ?
    where id = ?
    `

    let info = await con.query(SQL, [chamado.titulo, chamado.informacao, chamado.impacto, chamado.dt_data, chamado.nome, chamado.id])
    let resp = info [0]

    return resp.affectedRows
}


export async function ConsultarChamados(){
  let sql = `
  select*from tb_chamado

  `

  let info = await con.query(sql)

let resposta = info[0]
  return resposta;
}