const in1 = document.querySelector('#in')
const btn =document.querySelector('#btn')


btn.addEventListener("click",()=>{
    var son = 1
    let val = Number(in1.value)
    for(let i = 1 ;i<=val;i++){
        //burda i degerini son yukkiyorum
        console.log(i)
        son*=i
        console.log(son)
    }
    alert(son)
})