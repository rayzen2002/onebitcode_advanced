async function sum(a,b){
    return a + b
}

async function sub(a,b){
    return a - b
}
const a = sum(15,5)
const b = sub(15,5)

Promise.all([a,b]).then((results)=>{
    console.log(results)
})

async function square(z){
    return z * z
}
numbers = [2,4,6,75,33]
Promise.all(numbers.map((q)=>square(q))).then((result)=> console.log(result))