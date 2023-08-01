//PascalCase

class Conta {

 titular: string = "";
 saldo: number = 0;
 
 depositar(valor: number): void{
   if(valor > 0){
    this.saldo = this.saldo + valor;
   }
 }
 sacar(valor: number): void{
    if(valor > 0 && valor <= this.saldo){
        this.saldo = this.saldo - valor;
    }
 }
 }
  
  let contaDoPedro: Conta = new Conta();
  contaDoPedro.titular = "Pedro";

  contaDoPedro.sacar(-100);
  console.log(contaDoPedro.saldo);

  contaDoPedro.depositar(-100);
  console.log(contaDoPedro.saldo);

  contaDoPedro.sacar(100);
  console.log(contaDoPedro.saldo);
  