//PascalCase

class Conta {

 titular: string = "";
 saldo: number = 0;
 
 constructor(titular: string){
    this.titular = titular;
    this.saldo = 0;
 }
 
 depositar(valor: number): void{
 if (valor > 0){
    this.saldo = this.saldo + valor;
 }
 }
 sacar(valor: number): void{
    if (valor > 0 && valor <= this.saldo){
    this.saldo = this.saldo - valor;
    }
 }   
 }
 let contaDoJoao: Conta = new Conta("Joao");
 console.log(contaDoJoao);
 