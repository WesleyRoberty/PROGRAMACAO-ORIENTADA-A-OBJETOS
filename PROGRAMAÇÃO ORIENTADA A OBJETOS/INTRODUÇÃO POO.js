/*let car = {

make: "BMW",
model: "320i",
year: 2025,
color: "White",
mileage: 0,

drive: function(distance) {

this.mileage+=distance;

},

viewInformation: function() {

 console.log(`The make of my car is: ${this.make}, I drive a ${this.model}\n Year ${this.year}, with color ${this.color}, I stay at moment an ${this.mileage} mi.`);
    
},

paintCar: function(newColor) {
this.color = newColor
},

alterDistance: function(newDistance){
this.mileage = newDistance

}

};

car.drive(240);
car.viewInformation();

car.paintCar('Blue');
car.alterDistance(120);
car.viewInformation();

UTILIZAR O SOM PARA ATRIBUIR HERANÇA

class Veiculo {

constructor(marca,modelo){
this.marca = marca;
this.modelo = modelo;

}

info(){ 

return `veiculo: ${this.marca} ${this.modelo}`

}

velocidadeMaxima(){

return 150;

}
}
class Carro extends Veiculo{

constructor(marca,modelo,portas){
super(marca,modelo);
this.portas = portas;
}

info(){

return `${super.info()}| Portas: ${this.portas}`

}

velocidadeMaxima(){

return `velocidade máxima: ${super.velocidadeMaxima()}km/h`

}
}
class Cambio extends Veiculo{

constructor(marca,modelo,portas,cambio){
super(marca,modelo,portas);
this.cambio = cambio;


} 

info(){

    return `${super.info()}|Portas: ${portas} | Cambio: ${this.cambio}`
    
    }
    
    velocidadeMaxima(){
    
    return `velocidade máxima: ${super.velocidadeMaxima()}km/h`
    
    }

}




const meuCarro = new Carro("Toyota", "corolla",4,"Automático")
console.log(meuCarro.info())


*/





























//HERANÇA- EXTENDS EX CARRO EXTENDS VEICULOS
//POLIMORFISMO- MÉTODOS EM DIFERENTES CLASSES PODEM TER O MESMO NOME MAS COM SITUAÇÕES DIFERENTES
//ABSTRAÇÃO- 
//ENCAPSULAMENTO- 