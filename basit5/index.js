const renk =document.querySelector('#renk')
const gh = document.querySelector('#hj')
console.log(renk,gh)



// renk.addEventListener("click",()=>{
//  gh.style.background = 'red'
// })

renk,addEventListener('click',()=>{
    const renk1 = Math.round(Math.random()*255)
    const renk2 = Math.round(Math.random()*255)
    const renk3 = Math.round(Math.random()*255)
    gh.style.background='rgb('+renk1+','+renk2+','+renk3+')'
})