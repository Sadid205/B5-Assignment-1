


function formatString(input:string,toUpper?:boolean){
    if (toUpper===true || toUpper===undefined){
        return input.toUpperCase()
    } else {
        return input.toLowerCase()
    }
}


const output1 =  formatString("Hello")
const output2 =  formatString("Hello",true)
const output3 =  formatString("Hello",false)
console.log(output1)
console.log(output2)
console.log(output3)