/*EXERCICIO 1

class carro{

constructor(marca,modelo,ano){

this.marca =marca;
this.modelo = modelo;
this.ano = ano;   

}

exibirDetalhes(){

return `carro: ${this.marca}, ${this.modelo} e ${this.ano}`
}
}

const meuCarro = new carro("Toyota","Corolla",2024)
console.log(meuCarro.exibirDetalhes())

EXERCICIO 2

class Retangulo {
    constructor(altura, largura) {
      this.altura = altura;
      this.largura = largura;
    }
    
    //get area() {
      //return this.calculaArea();
    //}
  
    calculaArea() {
      return this.altura * this.largura;
    }
  }
  
  const retangulo1 = new Retangulo(6, 10);
  
  console.log(retangulo1.area);

EXERCICIO 3

class Veiculo{
constructor(marca,modelo){
this.marca =marca;
this.modelo = modelo;

}

exibirDetalhes(){ 

    return `Veiculo: ${this.marca} ${this.modelo}`
}
}

class moto extends Veiculo{

constructor(marca,modelo,cilindradas){
super(marca,modelo);
this.cilindradas = cilindradas;

}

exibirDetalhes(){

return `${super.exibirDetalhes()}| Cilindradas: ${this.cilindradas}`

}
}

const minhaMoto = new moto("Yamaha", "XMAX",250)
console.log(minhaMoto.exibirDetalhes())

EXERCICIO 4
class contaBancaria {
    constructor(titular, saldoInicial){
        this.titular = titular;
        this._saldo = saldoInicial;
    }

verSaldo(){
    console.log(`saldo atual de ${this.titular}: R$ ${this._saldo.toFixed(2)}`);
}

depositar(valor){
    if(valor <=0){
        console.log(`valor do deposito  deve ser positivo`);
        return;
    }
    this._saldo =+ valor;
    console.log(`Deposito de R$ ${valor.toFixed(2)} realizando com sucesso`)
}
sacar(valor) {
    if(valor <=0){
        console.log(`o valor do saque deve ser positivo!`);
        return;
    }
    if(valor > this._saldo){
        console.log(`saldo insuficiente para saque`);
        return;
    }
    this._saldo -= valor;
    console.log(`saldo atualizado ${valor.toFixed(2)}`);
}
}

let minhaConta = new contaBancaria("Wesley", 0);

minhaConta.verSaldo();
minhaConta.depositar(1000);
minhaConta.verSaldo();
minhaConta.sacar(500);
minhaConta.verSaldo();

EXERCICIO 5 

class animal{

emitirSom(){

return "Som do animal";    
}
}

class cachorro extends animal{

emitirSom(){

return "Latido";

}
}

class gato extends animal{

emitirSom(){

return "Miau miau";
        
}    
}

const MeuCachorro = new cachorro()
const MeuGato = new gato()
console.log(MeuCachorro.emitirSom())
console.log(MeuGato.emitirSom())

EXERCICIO 6

class endereco{

constructor(rua,numero){
    this.rua = rua;
    this.numero = numero;
}
morar(){

return`Endereço: Rua ${this.rua},número ${this.numero}.` 

}
}

class pessoa extends endereco{

constructor(nome,rua,numero){
super(rua,numero)
this.nome = nome;
}

morar(){

return `Nome: ${this.nome}|${super.morar()}` 
    
}
}

const pessoa1 = new pessoa("Wesley",8,136)
console.log(pessoa1.morar())

EXERCICIO 7


class Retangulo {
    constructor(altura, largura) {
      this.altura = altura;
      this.largura = largura;
    }
    
    get area() {
      return this.calculaArea();
    }
  
    calculaArea() {
      return this.altura * this.largura;
    }
  }
  
  const retangulo1 = new Retangulo(6, 10);
  
  console.log(retangulo1.area);*/
