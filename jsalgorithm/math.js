const x = ["michael", 'joseph', 'dickson', 'cynthia']
let a = x.push("precious")
let y = []

console.log(x)
for(a of x){
    y.push(a)
}
console.log(y)