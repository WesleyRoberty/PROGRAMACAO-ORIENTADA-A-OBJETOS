/*let caminhao = {
    marca: "Volkswagen",
    modelo: "Constellation",
    ano: 2024,
    cor: "prata",
    cabine:[

      {tipo: 'simples', capacidade: 2, teto: "fechado"},
      {tipo: 'dupla', capacidade: 5, teto: "aberto"}, 
    ],
    
    ligar: function(){
    console.log("O caminhão está ligado. ");
    },

    desligar: function(){
    console.log("O caminhão está desligado. ")
        }
    };

    console.log(caminhao.cabine[0].tipo);
    console.log(caminhao["ano"], caminhao["marca"]);
    
    caminhao.desligar();

USANDO THIS PARA PUXAR DE DENTRO DA FUNÇÃO

    function carroUngido(marca,modelo,ano,cor){
       
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.cor = cor;
        this.ligar = function(){

        console.log("O carro está ligado."); 

        }; 
    }

    let meuCarro = new carroUngido("volkswagen","gol",2016,"preto");
    console.log(meuCarro.marca,"\n",meuCarro.modelo,"\n",meuCarro.ano,"\n",meuCarro.cor);
    meuCarro.ligar();

   MANIPULAÇÃO DE OBJETOS 

   let pessoa ={

nome: "Ana",
idade: 30,

   };

   pessoa.cidade = "Resende";
   pessoa.idade = 31;
   //delete pessoa.cidade;

   console.log(pessoa.cidade,"\n",pessoa.idade,"\n",pessoa.cidade);

   
   //console.log(pessoa.idade);

   
   //console.log(pessoa.cidade);

OBJETOS COM  PARES CHAVE-VALOR

let pessoas = {

nome: "João",   
idade: 20 ,
cidade: "São Paulo"

}

console.log(pessoas.nome);
console.log(pessoas["idade"]);

TATAMENTOS DE ERROS EM PROGRAMAÇÃO

function dividir(a,b){

try{if(b===0){
    throw new Error("Divisão não permitida. ");

}
return a/b;
}
catch(erro){
console.log("erro: "+ erro.message);

}
finally{ console.log("Operação Finalizada");
}
}

console.log(dividir(10,2));
console.log(dividir(10,0));


CRIANDO OBJETOS EM JAVASCRIPT COM LITERAIS DE OBJETOS
 

//DEFINIÇÃO DE CLASSE 
class Pessoa { //CLASSE É UMA ESTRUTURA, E DEFINE ATRIBUTOS E MÉTODOS QUE O OBJETO PODE TER 
    constructor(nome,idade,filhos){ 
        this.nome = nome;
        this.idade = idade;
        this.filhos = filhos
    }
    //METODO = AÇÃO QUE O OBJETO IRAR FAZER
    //INSTANCIAÇÃO = CRIAR OBJETO 
    apresentar(){
    
    console.log(`Olá! Meu nome é ${this.nome}, eu tenho ${this.idade} anos e ${this.filhos} filho(s).\n`)
    
    }
    }
    
    class Endereco {
    
        constructor(rua,cep,cidade){
        this.rua = rua;
        this.cep = cep;
        this.cidade = cidade;
        }
    morar(){
    console.log(`Meu endereço é: Rua ${this.rua}, com o CEP: ${this.cep}, situado na cidade ${this.cidade}.\n`)
    }
    }
    
    
    const pessoa1 = new Pessoa("Wesley",26,"não possuo"); //TRANSFORMAMOS A PESSOA EM OBJETO
    const pessoa2 = new Pessoa("Bob",30,"tenho 2");
    const pessoa3 = new Pessoa("Carla",26,"tenho 3");
    const endereco1 = new Endereco(8,27525770,"Resende");
    const endereco2 = new Endereco(40,27500440,"Itatiaia");
    const endereco3 = new Endereco("Padre José Sandrup ",27580100,"Resende");

    //const endereco1 = new Endereco(1,2,3)s5
    
    pessoa1.apresentar();
    endereco1.morar();
    pessoa2.apresentar();
    endereco2.morar();
    pessoa3.apresentar();
    endereco3.morar();


CRIAR UM OBJETO CAR COM PROPRIEDADES E MÉTODOS

let carro ={

marca: "Volkswagen",
modelo: "Virtus",
ano: 2025,
cor: "Preto",

displayInfo: function(){

console.log(`A marca do meu carro é ${this.marca}, tenho o modelo ${this.modelo} do ano ${this.ano} na cor ${this.cor}.`);

},
//MÉTODO PARA ALTERAR A COR DO CARRO
pintarCarro: function(novaCor){
this.cor = novaCor;

}
//ASCESSANDO AS PROPRIEDADES
};
console.log(carro.marca);
console.log(carro.modelo);
console.log(carro.ano);
console.log(carro.cor);
carro.displayInfo();

CRIANDO BANCO DE ENDEREÇO*/
    
class Endereco {

constructor(nomeCompleto,rua,numeroDaCasa,cep,cidade,estado,pais){

    this.nomeCompleto = nomeCompleto;
    this.rua =rua;
    this.numeroDaCasa = numeroDaCasa;
    this.cep = cep;
    this.cidade = cidade;
    this.estado = estado;
    this.pais = pais;
}
alocar(){

console.log(`Meu nome é ${this.nomeCompleto}, moro na rua ${this.rua}, minha casa tem número: ${this.numeroDaCasa}\n CEP: ${this.cep}, cidade-estado: ${this.cidade}-${this.estado}\n Pais: ${this.pais}`);

}
}

const endereco1 = new Endereco("Wesley",8,136,27525770,"Resende","Rio de Janeiro","Brasil");
const endereco2 = new Endereco("Maicon",26,144,27570000,"Resende","Rio de Janeiro","Brasil");
const endereco3 = new Endereco("Alessandra","Almirante barroso",256,27500780,"Resende","Rio de Janeiro","Brasil");
const endereco4 = new Endereco("Sabrina","Ocho",1081,15555975,"La plata","Buienos Aires","Argentina");
const endereco5 = new Endereco("Elon","Manoel Siqueira Lopes",385,28975210,"Campinas","São Paulo","Brasil");

endereco1.alocar();
endereco2.alocar();  
endereco3.alocar();
endereco4.alocar();
endereco5.alocar();