

function formatString(input:string,toUpper?:boolean){
    if (toUpper===true || toUpper===undefined){
        return input.toUpperCase()
    } else {
        return input.toLowerCase()
    }
}

const outputFormatString1 =  formatString("Hello")
const outputFormatString2 =  formatString("Hello",true)
const outputFormatString3 =  formatString("Hello",false)
console.log(outputFormatString1)
console.log(outputFormatString2)
console.log(outputFormatString3)





function filterByRating(items:{title:string;rating:number}[]):{title:string;rating:number}[]{
    return items.filter((item:{title:string;rating:number})=>item.rating>=4)
}
const books = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 5.0 },
    { title: "Book D", rating: 4.0 },
  ];


const outputFilterByRating = filterByRating(books)
console.log(outputFilterByRating)




function concatenateArrays<T>(...arrays:T[][]):T[]{
    const result:T[] = []

    arrays.forEach((array:T[])=>{
        result.push(...array)
    })
    return result

}

const outputConcatenateArrays1 = concatenateArrays<string>(["a", "b"], ["c"])
const outputConcatenateArrays2 = concatenateArrays<number>([1, 2], [3, 4], [5]); 
console.log(outputConcatenateArrays1)
console.log(outputConcatenateArrays2)





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
const outputCar1 = myCar.getInfo();   
const outputCar2 = myCar.getModel(); 
console.log(outputCar1)
console.log(outputCar2)




function processValue(value:string | number):number{
    return typeof value==="string" ? value.length : 2*value
}

const outputProcessValue1 = processValue("hello"); 
const outputProcessValue2 = processValue(10);     
console.log(outputProcessValue1)
console.log(outputProcessValue2)




interface Product {
    name:string;
    price:number
}

function getMostExpensiveProduct(products:Product[]):Product | null{
    if (products.length>0){
        const result = products.reduce((acc:Product,curr:Product)=>{
            if (acc.price<curr.price){
                acc=curr
            }
            return acc
        })
        return result

    }else {
        return null
    }
}

const products = [
    { name: "Pen", price: 10 },
    { name: "Notebook", price: 25 },
    { name: "Bag", price: 50 }
  ];

const output = getMostExpensiveProduct(products);
console.log(output)




enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}

function getDayType(day:Day):string{
    if (day===Day.Saturday || day===Day.Sunday){
        return "Weekend"
    }else {
        return "Weekday"
    }
}

const outputGetDayType1 = getDayType(Day.Monday);  
const outputGetDayType2 = getDayType(Day.Sunday); 
console.log(outputGetDayType1)
console.log(outputGetDayType2)




async function squareAsync(n:number):Promise<number>{
    return  new Promise ((resolve,reject)=>{
        if (n >0 ){
            setTimeout(()=>{
                resolve(n*n)
            },1000)
        }else{
            reject("Negetive number not allowed")
        }
    })
}

 
squareAsync(4).then(console.log);   
squareAsync(-3).catch(console.error); 