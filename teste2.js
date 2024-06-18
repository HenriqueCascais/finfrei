import prompt from "prompt-sync";
let ler = prompt();

import { depositar, sacar, exibirsaldo } from "./financeiro.js";


console.log('informe o saldo');
let saldo = Number(ler());

console.log(`Aqui estão algumas de nossas opções de menu: \n
1- Depósito
2- Saque
3- Exibir Saldo \n
Escolha de 1 a 3:`);
let meno = Number(ler());

let x = true
    if(meno == 1){
        let d = depositar(saldo)
        x = false
    }
    else if(meno == 2){
        let s = sacar(saldo)
        x = false
    }
    else if(meno == 3){
        let e = exibirsaldo(saldo)
        x = false
    }
    else{
        if(meno = 'sair'){
            x = false
        }
    }
