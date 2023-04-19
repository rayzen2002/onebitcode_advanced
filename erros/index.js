function sum (a , b){
    const firstNumber = Number(a)
    const secondNumber = Number(b)

    if(isNaN(firstNumber) ?? isNaN(secondNumber)){
        throw new Error(`arguments must be numbers`)
    }
    return firstNumber + secondNumber
   
}


try{
    console.log(sum(2,5))
    console.log(sum(true,14))
   // console.log(sum(undefined,6))
    console.log(sum(18,"0"))
    console.log(sum(22,null))
    //console.log(sum(11,"zero"))
} catch(e){
    console.log(e.message)
}finally{
    console.log(`Calculations finished`)
}