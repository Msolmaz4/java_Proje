

let x=3
let  y=4
 let z = Math.sqrt(x*x + y*y)
 console.log(z)


const gy = document.querySelector("#gizle")
const button = document.getElementById('button')
console.log(button,"button")
console.log(gy)

button.addEventListener("click",()=>{

    //burda birinin icindeki belli bir seyi almk icin getAttribute ve data set kullaniriy


console.log(gy.getAttribute("id"))
console.log(gy.dataset.mami)

    //console.log('butotn atikladin')

 if(gy.style.display === ''){
    gy.style.display = "none"
    button.innerText = "goster"
    //buttona goster cevirmek gerekiyor

 }else{
    // console.log("sayfadda giyli")
    gy.style.display= ""
    button.innerText = "gizle"
 }
})
