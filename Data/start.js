// class lucia {
//     constructor( fisrtname, lastname ){
//         this.fisrtname= fisrtname
//         this.lastname = lastname
//     }
//     yourname(){
//         console.log(welcome `${this.fisrtname}` `${this.lastname}` )
//     }
// }
// const newcharacter = new lucia ("dickson", "eneh");
// newcharacter.yourname();


const model =  (n)=>{
    const xx = [];
    const x = n.split(" ");
    console.log(x);
    for (let s of x){
        xx.push(s.length);
    }
    console.log("this is", xx)
    console.log(Math.min(...xx))
};
model("this is")































const mod = (tex)=>{
    let dd = tex.split(" ")
    let ddd = []
    for(y of dd){
      ddd.push(y.length)
    }
console.log(dd.length)
console.log(Math.max(...ddd))
} 
mod ("the march was great")























const models =(n)=>{
    const e = n.replace(/[aeiou]/gi, "")
    console.log(e)
};
models("banana can touch anybody")



const letter = "abcdefghijklmnopqrstuvwxyz";
const me = letter.split("");
const position=(text)=>{
    text.split("");
    let char1="";
    let r =[];
    let now = me;
    for(let x =0; x< text.length; x++){
        char1 = text.charAt(x).toLowerCase() 
        if(now.indexOf(char1)>=0){
            r.push(now.indexOf(char1))
        }
    }
    return r
}
console.log(position("bank"))



