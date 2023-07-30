

const buttons = document.querySelector('.button1')
//const dosya1 = document.querySelector('.dosya1')
//bunu butondan cekebiliriy
const dosya1 = document.querySelector(buttons.dataset.target)
//console.log(dosya1,'dosya1')

//console.log(buttons)




buttons.addEventListener("click",()=>{


    if(dosya1.style.display === ""){
        dosya1.style.display = 'none'
        buttons.innerText = "goster"
    }
    else{
        dosya1.style.display=''
        buttons.innerText = "gizle"
    }
})