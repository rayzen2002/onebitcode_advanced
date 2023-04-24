async function sum(a,b){
    if(typeof a !== 'number' || typeof b !== 'number'){
        return Promise.reject(`Must be a number`)
    }
    return a + b
}

async function sub(a,b){
    if(typeof a !== 'number' || typeof b !== 'number'){
        Promise.reject(`Must be a number`)
    }
    return a - b
}

Promise.all([sum(15,"a"),sub(15,5)])
.then((results)=>{
console.log(results)
})
.catch((err)=>{
    console.log(err)
})

