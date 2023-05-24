import fs from 'fs';
import readline from 'readline';

const prompt = readline.createInterface({ 
    input: process.stdin,
    output: process.stdout
})

const data = new Date()
const mes = data.getMonth() + 1
const dia = data.getDate()

function relaSemConexao () {
     prompt.question('Qual seu ATT ? ', resposta => {

        const relato = [` 
CLIENTE INFORMA ESTAR SEM CONEXÃO.
PROBLEMA TEVE INICIO: ${dia + '/' + mes}
FEITO OS PROCEDIMENTOS BASICOS SEM NORMALIZAÇÃO.
APRESENTA LED LOS.
POSSUI CONEXÃO CABEADA TAMBEM ACESSO.
VERIFICADO OS CABOS.
STATUS: OFFLINE
MENSAGEM AO SE CONECTAR NA REDE WI-FI: INTERNET PODE ESTAR INDISPONIVEL.
DISPONIBILIDADE PARA VISITA: LIGAR ANTES.
CIENTE DO PRAZO.
ATT: ${resposta.toUpperCase()}`] 




        fs.writeFile('relato.txt', relato[0], (err) => {
            if (err) console.log(err);
            console.log('salvo')
            prompt.close()
        })
     })
}

 prompt.question(` Gerador de Relatos v1.0
 1 - Sem Conexão.
 2 - Lentidão
 3 - Oscilação 
 Selecione uma opção: `, resposta => {
    switch (resposta) {
        case '1':
            relaSemConexao()
            break;
        default: 
            console.log('default')
    }
})


