console.log('vur gec')
const in1 = document.querySelector("#inp")
const btn = document.querySelector("#btn")
const grt = document.querySelector("#grt")

btn.addEventListener("click",()=>{

    const ul = document.createElement('ul')
    const li = document.createElement('li')
    li.innerText = in1.value
    ul.appendChild(li)
    grt.appendChild(ul)
    in1.value =''
    in1.focus()

})