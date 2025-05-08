
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