console.log('deneme')

const in1 = document.querySelector('#satir')
const in2 = document.querySelector('#sutun')
const btn1 = document.querySelector('#btn1')
const tab = document.querySelector('#table')
console.log(in1,in2,btn1)

btn1.addEventListener('click',()=>{
    let df = in1.value
    let fd = in2.value
    const tr =document.createElement("tr")
    const td = document.createElement("td")
    //derleme yapildi


    for(let f = 1;f<=fd ;f++){
        const rt =document.createElement("p")
        rt.innerText=`satir${f}`
        td.appendChild(rt)
        tr.appendChild(td)
    }

    for(let i = 1;i<=df ;i++)
    {console.log(i)
        const op = document.createElement('p')
         op.innerText = `sutun${i}`
         tr.appendChild(op)
         tab.appendChild(tr)
        
    }
   
  
})