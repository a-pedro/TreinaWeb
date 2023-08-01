//PascalCase

class Conta {

 titular: string = "";
 saldo: number = 0;
 
 depositar(valor: number): void{
    this.saldo = this.saldo + valor;
 }
 sacar(valor: number): void{
    this.saldo = this.saldo - valor;
 }
 }
  
  let contaDoPedro: Conta = new Conta();
  contaDoPedro.titular = "Pedro";
  contaDoPedro.saldo = 7000000;
  console.log(contaDoPedro);
  contaDoPedro.depositar(2000);
  console.log(contaDoPedro.saldo);
  contaDoPedro.sacar(100);
  console.log(contaDoPedro.saldo);
