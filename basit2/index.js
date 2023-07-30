

const buttons = document.querySelectorAll('.btn')
console.log(buttons,"btn")
//const dosya1 = document.querySelector('.dosya1')
//bunu butondan cekebiliriy

//console.log(dosya1,'dosya1')

//console.log(buttons)

//foreach  kullandim her button icin kontrol edecm
//burada data=targeyt id dikkat et 
//consiol log goruyoruy hangi button gelecekse on agore ayarlama yaptik 



buttons.forEach(button =>{
    const dosya1 = document.querySelector(button.dataset.target)
    button.addEventListener("click",()=>{


        if(dosya1.style.display === ""){
            dosya1.style.display = 'none'
            button.innerText = "goster"
        }
        else{
            dosya1.style.display=''
            button.innerText = "gizle"
        }
    })

})


