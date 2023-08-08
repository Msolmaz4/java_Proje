console.log('derlemem')

const input = document.querySelector('.input')
// console.log(input)
//girilrn degeri anlik gormek icin basir bir yol
// const deger = ()=>{
// console.log(input.value)
// }
// input.oninput = deger
const boxs = document.querySelectorAll('.box')
console.log(boxs)
boxs.forEach(function(box1){
    const name = box1.querySelector('h2').textContent.toLocaleLowerCase()
    console.log(name)
})