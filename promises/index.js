function execute(){
    // Do something

    return new Promise((resolve,reject)=>{
        console.log(`A promise esta sendo executada`)

        setTimeout(()=>{
            console.log(`Resolvendo a promise`)
        },2000)
        resolve(true)
    })
}

const p = execute()
console.log(p)

