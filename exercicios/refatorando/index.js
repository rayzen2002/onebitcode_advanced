async function imc(peso,altura){

// return new Promise((resolve , reject) =>{
//     if(typeof peso !== 'number' || typeof altura !== 'number'){
//         reject(`A altura e o peso devem ser numeros`)
//     }
//      resolve(peso/(altura*altura))
// })
    if(typeof peso !== 'number' || typeof altura !== 'number'){
        return Promise.reject(`A altura e o peso devem ser numeros`)
    }
    return (peso/(altura*altura))

}

async function showImc(peso,altura){
    //     imc(peso,altura).then((result)=>{
    //         console.log(`O resultado do IMC foi ${result}`)

    //         if(result < 18.5)console.log(`Situacao: Magreza`)
    //         else if (result < 25)console.log(`Situacao: Normal`)
    //         else if (result < 30)console.log(`Situacao: Sobrepeso`)
    //         else if (result < 40)console.log(`Situacao: Obesidade`)
    //         else console.log(`Situacao: Obesidade grave`)
    //     }).catch((err)=>{
    //         console.log(err)
    //     })
    //     console.log(`Calculando IMC para Peso: ${peso}kg e altura ${altura}m`)
            
    try {
        const result = await imc(peso,altura)
        console.log(`O resultado do IMC foi ${result}`)
        if(result < 18.5)console.log(`Situacao: Magreza`)
        else if (result < 25)console.log(`Situacao: Normal`)
        else if (result < 30)console.log(`Situacao: Sobrepeso`)
        else if (result < 40)console.log(`Situacao: Obesidade`)
        else console.log(`Situacao: Obesidade grave`)
    } catch (error) {
        console.log(error)
    }
}

showImc(80,1.70)
showImc(90,"alto")
showImc(100,1.50)
showImc(110,1.90)
showImc(150,1.70)