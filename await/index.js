async function sum(a,b){
    if(typeof a !== 'number' || typeof b !== 'number'){
        return Promise.reject(`Arguments must be numbers`)
    }
    return a + b
}

async function execute(){
    try {
        const result = await sum(15,"a")
        console.log(result)
    } catch (error) {
        console.log(error)
    }
}

execute()