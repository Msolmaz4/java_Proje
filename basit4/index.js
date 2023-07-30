const in1 = document.querySelector('.input1')
const in2 = document.querySelector(".input2")

const sonuc = document.querySelector('.sonuc')
//anlik takip

const hesapla = ()=>{
    let deger = Number(in1.value)+Number(in2.value)
    sonuc.innerHTML = `<p>sonuc:${deger}</p>`
}
in1.oninput = hesapla
in2.oninput = hesapla

