const numbers = [1,2,"as",5,13,55,64]

function square(z){
    return new Promise((resolve,reject)=>{
        if(typeof z !== 'number'){
            reject(`Must be a number`)
        }else resolve(z*z)
    })
}

Promise.all(numbers.map(number =>square(number))).then(squares => {
    console.log(squares)
}).catch((err)=>{
    console.log(err)
})