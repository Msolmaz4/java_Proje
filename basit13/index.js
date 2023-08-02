
console.log("cember daraliyor")
const btn = document.getElementById('btn')

btn.addEventListener("click",()=>{
   

    let ren1 = Math.floor(Math.random()*255)
    let ren2 = Math.floor(Math.random()*255)
    let ren3 = Math.floor(Math.random()*255)
    let renk = `rgb(${ren1},${ren2},${ren3})`
     document.body.style.backgroundColor = renk
     //bilgisayairn hafuyanda tutmka ivcn 
     localStorage.setItem('renk',renk)
})
if(localStorage.getItem('renk')){
    //alert('var')
    document.body.style.backgroundColor =localStorage.getItem('renk')

}