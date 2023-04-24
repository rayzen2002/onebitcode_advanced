function waitFor(seconds){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve()
        },seconds * 1000)
    })
}

 const numbers = [4,5,9,13,77]

// const squares = numbers.map(async (z)=>{
//     await waitFor(2)
//     return z * z
// })

// Promise.all(squares).then((results)=> console.log(results))


async function execute(){
    const squares = await Promise.all(numbers.map(async (z)=>{
        await waitFor(2)
        return z * z
        })) 
        console.log(squares)
}

execute()
