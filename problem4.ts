

class Vehicle {
    private make:string;
    private year:number;

    constructor(make:string,year:number){
        this.make = make;
        this.year = year
    }

    getInfo () {
        return `Make: ${this.make}, Year: ${this.year}`
    }

}


class Car extends Vehicle {
    private model:string;
    constructor(make:string,year:number,model:string){
        super(make,year)
        this.model = model
    }
    getModel():string{
        return `Model: ${this.model}`
    }
}

const myCar = new Car("Toyota", 2020, "Corolla");
const output1 = myCar.getInfo();   
const output2 = myCar.getModel(); 
console.log(output1)
console.log(output2)