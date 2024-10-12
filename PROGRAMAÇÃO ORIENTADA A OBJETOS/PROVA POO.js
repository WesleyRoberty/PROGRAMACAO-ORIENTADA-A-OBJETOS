/*QUESTÃO 12- Implemente uma classe chamada Animal com um método fazerSom(). Em seguida, crie uma classe Cachorro que herde 
da classe Animal e sobrescreva o método fazerSom() para retornar o som "Au Au". Demonstre o uso das classes criando uma 
instância de Cachorro e chamando o método fazerSom(). 

class Animal{

fazerSom(){
    
return "Som do animal: ";

}
}
    
class Cachorro extends Animal{
    
fazerSom(){
    
return "Au Au";
           
}    
}
    
const MeuCachorro = new Cachorro();
console.log(MeuCachorro.fazerSom());

QUESTÃO 13- Crie uma classe Produto com um construtor que aceite dois ou três parâmetros (nome, preco, categoria). 
Se categoria não for informado, defina como "Indefinido".
 
class Produto{

constructor(nome,preco,categoria){   
this.nome = nome;
this.preco = preco;
this.categoria = categoria;    
}

Vender(){

return  `Nome: ${this.nome}\n Preço: ${this.preco}\n Categoria: ${this.categoria}` 
    
}
if(_categoria = isNan){
return "Indefinido."   
}
}

const parametros1 = new Produto("Arroz","R$ 30,00","grãos");
const parametros2 = new Produto("Biscoito recheado","R$ 2,00");
const parametros3 = new Produto("Goiaba","R$ 8,00","Frutas");
console.log(`Parâmetro1:\n ${parametros1.Vender()}`);
console.log(`Parâmetro2:\n ${parametros2.Vender()}`);
console.log(`Parâmetro3:\n ${parametros3.Vender()}`);

QUESTÃO 4- Identifique as classes e implemente um programa para a seguinte especificação: 
“O supermercado vende diferentes tipos de produtos. Cada produto tem um preço e uma quantidade em estoque.
 Um pedido de um cliente é composto de itens, onde cada item especifica o produto que o cliente deseja e a 
 respectiva quantidade. Esse pedido pode ser pago em dinheiro, cheque ou cartão.” 

class Supermercado{

constructor(produto,preco,quantidade,formaDePagamento){
this.produto = produto;
this.preco = preco;
this.quantidade = quantidade;
this.formaDePagamento = formaDePagamento;

}

fazerPedidos(){

return `Pedido \n Produto: ${this.produto}\n Preco: R$ ${this.preco}\n Quantidade: ${this.quantidade}\n Forma de pagamento: ${this.formaDePagamento}`
    
}
}

const compra1 = new Supermercado("Iogurte",4.15,3,"Dinheiro");
console.log(compra1.fazerPedidos());

QUESTÃO 5- Faça um programa de agenda telefônica, com as classes Agenda e Contato.

class Agenda{

    constructor(numero){
        this.numero = numero;
    }
    anotar(){
    
    return` ${this.numero}` 
    
    }
    }
    
    class Contato extends Agenda{
    
    constructor(numero,nome){
    super(numero)
    this.nome = nome;
    }
    
    anotar(){
    
    return `${this.nome}| ${super.anotar()}` 
        
    }
    }
    
    const pessoa1 = new Contato("(24)998472649","Wesley ");
    const pessoa2 = new Contato("(24)992211070","Henrique ");
    const pessoa3 = new Contato("(24)992115590","Cláudia ");
    console.log(`Agenda Telefônica:\n ${pessoa1.anotar()}\n ${pessoa2.anotar()}\n ${pessoa3.anotar()}`);

QUESTÃO 6- Faça uma programa para representar a árvore genealógica de uma família. Para tal, crie uma classe Pessoa
que permita indicar, além de nome e idade, o pai e a mãe. Tenha em mente que pai e mãe também são do tipo Pessoa.

class Pessoa{

constructor(nome,idade){
this.nome = nome;
this.idade = idade;

}

definirFamilia(){

return `${this.nome},${this.idade}`    

}
}

class Pai extends Pessoa{

constructor(nome,idade,nomePai,idadePai){
super(nome,idade);
this.nomePai = nomePai;
this.idadePai = idadePai;

}
definirFamilia(){

    return `Nome:${this.nomePai},idade: ${this.idadePai} e ${this.nome},${this.idade}`    
    
    }
    }

    class Mae extends Pessoa{

        constructor(nome,idade,nomePai,idadePai,nomeMae,idadeMae){
            super(nome,idade,nomePai,idadePai);
            this.nomeMae = nomeMae;
            this.idadeMae = idadeMae;
            
            }
            definirFamilia(){
            
                return `Nome:${this.nomeMae},idade:${this.idadeMae}\n Nome do pai:${this.nomePai},idade:${this.idadePai}\n Nome da mãe:${this.nome},${this.idade} `    
                
                }
                }


const pessoa1 = new Mae("Cláudia",46,"Henrique",50,"Wesley",26)
console.log(pessoa1.definirFamilia());



class Endereco{

    constructor(rua,numero){
        this.rua = rua;
        this.numero = numero;
    }
    exibirInformações(){
    
    return`Endereço: Rua ${this.rua},${this.numero}.` 
    
    }
    }
    
    class Pessoa extends Endereco{
    
    constructor(nome,rua,numero){
    super(rua,numero)
    this.nome = nome;
    }
    
    exibirInformações(){
    
    return `Nome: ${this.nome}|${super.exibirInformações()}` 
        
    }
    }
    
    const pessoa1 = new Pessoa("Wesley","Francisco da Conceição",136);
    console.log(pessoa1.exibirInformações());

    
    
    class Emprestimo{

constructor(Emprestimo,Livro,Pessoa){
this.Emprestimo = Emprestimo;
this.Livro =Livro;
this.Pessoa =Pessoa;

}

exibirInformações(){
    
    return `${this.Emprestimo}|${this.Livro}|${this.Pessoa}` 

    }
}

const pessoa1 = new Emprestimo("1 Empréstimo","Pequeno Principe","Maria");
    console.log(pessoa1.exibirInformações());


    */