// fuctioneaza pentru ca x este "hoisted"
x = 10
// eroare pentru ca y nu este "hoisted"
//y = 20

console.log(x)

//eroare pentru ca za nu este "hoisted"
test()

//eroare deoarece clasa hello nu e "hoisted"

let w = new Hello()

//declaratia variabilei este ridicata la ninceput
//(hoisted)
var x
let y
const z = 3

function test() {
    console.log("test")
}

class Hello {
    message
}