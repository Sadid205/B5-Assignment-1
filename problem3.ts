

// function concatenateArrays<T>(...arrays: T[][]):T[]{
//     const result = arrays.reduce((acc,curr)=>{
//         acc.push(...curr)
//         return acc
//     },[])
//     return result
// }

// This is slightly better and more readable
function concatenateArrays<T>(...arrays:T[][]):T[]{
    const result:T[] = []

    arrays.forEach((array:T[])=>{
        result.push(...array)
    })
    return result

}

const output1 = concatenateArrays<string>(["a", "b"], ["c"])
const output2 = concatenateArrays<number>([1, 2], [3, 4], [5]); 
console.log(output1)
console.log(output2)