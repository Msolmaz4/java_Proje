const in1 = document.querySelector('.input1')
const in2 = document.querySelector(".input2")
const hesap=document.querySelector('.hesapla')
const sonuc = document.querySelector('.sonuc')


hesap.addEventListener("click",()=>{
    let deg=  Number(in1.value) +Number(in2.value)
    console.log(deg)
    sonuc.innerHTML =   `<p> sonuc :${deg} </p>`
})

