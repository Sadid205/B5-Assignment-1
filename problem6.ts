
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

