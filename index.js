// 1.verilmish ededin 3-un quvveti olub, olmadigini tapan alqoritm yazin.
let eded=parseInt(prompt("eded daxil edin"))
let say=0
for (let i = 3; i <=eded; i*=3) {
    if(i==eded){
        say++
    }
}
if (say==1) {
    console.log("3-un quvvetidir")
} else {
    console.log("3-un quvveti deyil") 
}



// 2.verilmish ededin Polidrom olub olmadigini yoxlayin.
// Polidrom ededlere numune:11 121 888 9119.


// let eded=prompt("eded daxil edin")
// let length=eded.length
// let say=0
// for (let i = 0; i < length/2; i++) {
//     if(eded[i]!==eded[length-i-1]){   
//         say++
//     }
// }
// if(say==0){
//     console.log("polindorumdur")
// }
// else{
//     console.log("polidrom deyil")
// }




