console.log("cember daraliyor")

const der = document.querySelector('.der')
console.log(der)
const btn = document.querySelector('.btn')
const tkc = prompt("bir sayi giriniz")

if(tkc%2 == 0){
  const p = document.createElement('p')
  p.innerText = "sayi cift !!!!!"
  der.appendChild(p)

}
else{
    const p = document.createElement('p')
    p.setAttribute("class","el")
    p.innerText="tek sayi !!!!"
    der.appendChild(p)
}
// btn.addEventListener('click',()=>{
//     window.location.href= "https://www.youtube.com"
// })
btn.onclick=function(){
    window.location.href= "https://www.youtube.com"
}