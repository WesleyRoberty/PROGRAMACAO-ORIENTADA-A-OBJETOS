/*
Crie uma classe ContaBancaria com os atributos titular e saldo (inicialmente 0). 
Adicione métodos depositar(valor) e sacar(valor). 
Proteja o atributo saldo para que não seja acessado diretamente.
*/

class ContaBancaria{
    constructor(agencia, numero, titular, tipo, saldo){
        this.agencia = agencia;
        this.numero = numero;
        this.titular = titular;
        this._saldo = saldo; 
        this.tipo = tipo;
    }
    getFirstSaldo(){
        console.log(`Olá, ${this.titular}! Seu saldo é de ${this._saldo}`)
    }
    depositar(valor){ 
        if(valor <= 0){
            console.log("Valor de depósito incorreto.")
            return;
        }
        this._saldo += valor;
        console.log(`Depósito efetuado com sucesso! Valor: ${valor.toFixed(2)}`)
    }
    sacar(valor){
        if(valor <= 0){
            console.log("Valor de saque incorreto.")
            return;
        }
        if(valor >  this._saldo){
            console.log("Saldo insuficiente.")
            return;
        }else{
            console.log(`Saque efetuado com sucesso! Valor R$${valor.toFixed(1)}`)
        }
        this._saldo -= valor;
            console.log(`valor Atual: R$${this._saldo}`)
                return;
    }
    getSaldo(){ 
        return this._saldo,
        console.log(`Saldo Atual: ${this._saldo}`)
    }
}

class ContaCorrente extends ContaBancaria{
    constructor(agencia, numero, titular, saldo, limite, cartaoDebito, cartaoCredito){
        super(agencia, numero, titular, 'conta-corrente', saldo);
        this.limite = limite;
        this.cartaoDebito = cartaoDebito;
        this.cartaoCredito = cartaoCredito;
    }
    showInfo(){
        return (`Agência: ${this.agencia}, 
            Número: ${this.numero}, 
            Titutlo: ${this.titular}, 
            Tipo: ${this.tipo}, 
            Saldo: ${this._saldo}`);
    }
}

class ContaPoupanca extends ContaBancaria{
    constructor(agencia, numero,titular, saldo, valorguardado, cartaoDebito){
        super(agencia, numero, titular, 'conta-poupança', saldo,  cartaoDebito);
        this.valorguardado = valorguardado;
        this.cartaoDebito =  cartaoDebito;

    }
}

class ContaUniversitaria extends ContaBancaria{
    constructor(agencia, numero, titular, saldo){
        super(agencia, numero,titular, 'conta-universitária', saldo);
    }
    sacar(valor){
        if(valor > 500){
         console.log("Valor maior que 500 reais!");   
    } else{
        super.sacar(valor)
        console.log(`Saque efetuado com sucesso! Valor R$${valor.toFixed(1)}`);
    }
}
}

let count = new ContaBancaria(7694, 129276, "Wesley", "conta-corrente", 2000);

count.getFirstSaldo(); 
count.sacar(1000);
count.depositar(400);
count.getSaldo();