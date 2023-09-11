let but = document.querySelector('.but')
let kutu = document.querySelector('.kutu')


but.addEventListener('click',()=>{
    console.log('tik')
})
document.addEventListener('click',(e)=>{
    if(e.composedPath().includes(kutu)){
        console.log('icerdesin')
    }
    else{
        console.log('disardasin')
    }
})