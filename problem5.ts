

function processValue(value:string | number):number{
    return typeof value==="string" ? value.length : 2*value
}

const output1 = processValue("hello"); 
const output2 = processValue(10);     
console.log(output1)
console.log(output2)