import fs from 'fs';
import readline from 'readline';

const prompt = readline.createInterface({ 
    input: process.stdin,
    output: process.stdout
})

const data = new Date()
const mes = data.getMonth() + 1
const dia = data.getDate()

const pergunta1 = () => {
     return new Promise((resolve, reject) => {
        prompt.question('Os equipamento foram reiniciados ? ', (res) => {
            if (res == 'sim' || res == 'Sim') {
                resolve()
            } else {
                console.log('Reinicie o equipamento junto ao cliente');
                prompt.close()
                reject();
            }
        })
    })
}

const pergunta2 = () => {
    return new Promise((resolve, reject) => {
       prompt.question('Apresenta led los ? ', (res) => {
           if (res == 'sim' || res == 'Sim') {
                fs.appendFileSync('./teste.txt','\nAPRESENTA LED LOS', (err) => {
                    console.log(err);
                })
            resolve()
           } else {
            fs.appendFileSync('./teste.txt','\nNÃO APRESENTA LED LOS', (err) => {
                console.log(err);
            })
            resolve()
           }
       })
   })
}

const pergunta3 = () => {
    return new Promise((resolve, reject) => {
       prompt.question('Possui conexão cabeada ? ', (res) => {
           if (res == 'sim' || res == 'Sim') {
                fs.appendFileSync('./teste.txt','\nPOSSUI CONEXÃO CABEADA', (err) => {
                    console.log(err);
                })
            resolve()
           } else {
                fs.appendFileSync('./teste.txt','\nNÃO POSSUI CONEXÃO CABEADA', (err) => {
                    console.log('err');
                })
            resolve()
           } 
       })
   })
}

const pergunta4 = () => {
    return new Promise((resolve, reject) => {
       prompt.question('Todos os cabos foram verificados ? ', (res) => {
           if (res == 'sim' || res == 'Sim') {
                fs.appendFileSync('./teste.txt','\nVERIFICADO OS CABOS', (err) => {
                    console.log(err);
                })
            resolve()
           } if (res == 'Não' || res == 'não') {
                console.log('Por favor verifique o cabeamento dos equipamentos')
            resolve()
           } else {
            reject('err');
           }
       })
   })
}

const pergunta5 = () => {
    return new Promise((resolve, reject) => {
       prompt.question('Qual mensagem aparece ao se conectar na rede wi-fi ? ', (res) => {
        fs.appendFileSync('./teste.txt', `\nMENSAGEM AO SE CONECTAR NA REDE WI-FI: ${res}`)
        resolve()
       })
   })
}

const pergunta6 = () => {
    return new Promise((resolve, reject) => {
       prompt.question('Qual Melhor dia/horario para Visita tecnica ? ', (res) => {
        fs.appendFileSync('./teste.txt', `\nDISPONIBILIDADE PARA VISITA: ${res}`)
        resolve()
       })
   })
}
const pergunta7 = () => {
    return new Promise((resolve, reject) => {
       prompt.question('Qual status atual da rede ?  ', (res) => {
        fs.appendFileSync('./teste.txt', `\nSTATUS: ${res}\n`)
        resolve()
       })
   })
}

const pergunta8 = () => {
    return new Promise((resolve, reject) => {
       prompt.question('Digite o completo do seu relato: ', (res) => {
        fs.appendFileSync('./teste.txt', `${res}\n`)
        resolve()
       })
   })
}

const pergunta9 = () => {
    return new Promise((resolve, reject) => {
       prompt.question('ATT ? ', (res) => {
        fs.appendFileSync('./teste.txt', `ATT: ${res}`)
        resolve()
       })
   })
}

const relatoFinal = async () => {
    fs.appendFileSync('./teste.txt', 
    `CLIENTE INFORMA ESTAR SEM CONEXÃO
PROBLEMA TEVE INICIO: ${dia + '/' + mes}`)
    await pergunta1()
    await pergunta2()
    await pergunta3()
    await pergunta4()
    await pergunta5()
    await pergunta6()
    await pergunta7()
    await pergunta8()
    await pergunta9()
    for (let i=0; i <3; i++){
        console.log('GERANDO RELATO.....')
    }
    prompt.close()
}

 prompt.question(` Gerador de Relatos v1.0
 1 - Sem Conexão.
 2 - Lentidão
 3 - Oscilação 
 Selecione uma opção: `, resposta => {
    switch (resposta) {
        case '1':
            relatoFinal()
            break;
        default: 
            console.log('default')
    }
})