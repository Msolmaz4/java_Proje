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
//boxdaki degerili kontrol ettim 
boxs.forEach(function(box1){
    const name = box1.querySelector('h2').textContent.toLocaleLowerCase().trim()
    console.log(name)
})
//inputtaki degeri buluyorum
input.addEventListener('input',()=>{
    const search = input.value.trim()
    //console.log(search)
    filter(search)
})

const filter =(search)=>{

    const no = document.querySelector('.no')
    //console.log(no)
    let num = 0
    boxs.forEach(function(box){
        const name = box.querySelector('h2').textContent.toLocaleLowerCase().trim()

        if(name.includes(search.toLocaleLowerCase())){
            no.style.display='none'
            box.style.display='flex'
            num++

        }
        else{
            box.style.display='none'
        }
    })
    if(num === 0 ){
        no.style.display='block'
    }

}