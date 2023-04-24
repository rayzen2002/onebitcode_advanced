function execute(){
    return new Promise((resolve, reject) => {
        console.log(`A promise esta sendo executada`)
        setTimeout(() => {
            if(1){
                reject(`A promise foi rejeitada`)
            }else{
            console.log(`Resolvendo a promise`)
            resolve(`Resultado`)
            }
        }, 1000)
    })
}

const p = execute()
p.then((result)=>{
    console.log(result)
}).catch((err)=>{
    console.log(err)
})