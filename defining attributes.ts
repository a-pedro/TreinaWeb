//PascalCase

class Conta {
 titular: string = "";
 saldo: number = 0;
 }
  let contaDoClaison: Conta = new Conta();
  contaDoClaison.titular = "Claison";
  contaDoClaison.saldo = 1000;
  let contaDoPedro: Conta = new Conta();
  contaDoPedro.titular = "Pedro";
  contaDoPedro.saldo = 7000.000;
  console.log(contaDoPedro);
  console.log(contaDoClaison);
