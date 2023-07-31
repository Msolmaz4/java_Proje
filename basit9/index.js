const deger = document.querySelector('#deger')
console.log(deger)



//floor
//ceil
//round
//max =min olursa bir foksiyon

const vari = (min,max)=>{
    let fg =  Math.floor( Math.random()*(max-min))+(min)
    


    const p = document.createElement('p')
    p.setAttribute('class','nokta')
    p.innerHTML= `deger ${fg}`
    deger.appendChild(p)
}


vari(20,100)
