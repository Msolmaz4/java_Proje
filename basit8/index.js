const in1 = document.getElementById('input1')
const in2 = document.querySelector('#input2')
const btn1 = document.querySelector('#btn1')

btn1.addEventListener('click',()=>{
   //console.log(in1.value,in2.value)
   //denemeadd .
   
     let sayac = 0 
    const table = document.createElement("table")
    for(let i = 0;i<in1.value;i++)
    {
        const tr = document.createElement('tr')
        table.appendChild(tr)
        for(let y = 0;y<in2.value;y++){
            const td = document.createElement('td')
            td.innerHTML=sayac++
            tr.appendChild(td)
        }
    }
    document.getElementById('ekran').innerHTML =''
  document.getElementById('ekran').appendChild(table)
})

