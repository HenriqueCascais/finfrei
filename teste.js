import prompt from "prompt-sync";
let ler = prompt();


console.log('seu saldo');
let saldo = Number(ler());

console.log('Quantos você deseja sacar');
    let sacado = Number(ler());

let x = true

    while(sacado <= 0){
        console.log('Quantos você deseja sacar');
        sacado = Number(ler());

    
    if(sacado == 'c' || saldo == 'c'){
        x = false
    }
}
        
let tls = sacado - saldo

console.log('Seu saldo atual é de: ' + tls);
