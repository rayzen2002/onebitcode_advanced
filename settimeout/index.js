console.log(`Hello there`)

const timeoutId = setTimeout(()=>{
    console.log(`Hello again`)
}, 3000)

clearTimeout(timeoutId)

let seconds = 0
const intervalId = setInterval(()=>{
    seconds += 3
    console.log(`You suck!`)
    if(seconds > 10){
        clearInterval(intervalId)
        console.log(`Its over, but you still suck!`)
    }
},3000)