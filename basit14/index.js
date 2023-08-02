
console.log('adamsin')
const ad = document.querySelector("#ad")
const soy = document.querySelector("#soy")
const yas = document.querySelector("#yas")
const btn = document.querySelector("#btn")
const table = document.querySelector("#table")



// btn.addEventListener("click", () => {
//     const gf = [ad.value, soy.value, yas.value]
//     console.log(gf)

//     const tr = document.createElement("tr")
//      const td  =document.createElement("td")
//      for(let i = 0 ; i<3 ;i++){
//         td.textContent= gf[i]
//         console.log(td.textContent)
//         tr.appendChild(td)
//         table.appendChild(tr)
//      }

   

// })

btn.addEventListener("click",
function(){
    let tAd = document.createElement('td')
    let tSoy = document.createElement('td')
    let tYas = document.createElement('td')

    tAd.textContent = ad.value
    tSoy.textContent = soy.value
    tYas.textContent = yas.value
    const tr = document.createElement("tr")
    tr.appendChild(tAd)
    tr.appendChild(tSoy)
    tr.appendChild(tYas)
    table.appendChild(tr)
    ad.value= ''
    soy.value =''
    yas.value =''
}
) 