console.log("hedf ben miyim riya")
const rakam = document.querySelectorAll(".btnRakam")
//console.log(rakam)
const goster = document.getElementById("gosterge")
console.log(goster)
const opr = document.querySelectorAll('.btnOpt')
//console.log(opr)







rakam.forEach(function(el){
    //console.log(el) burada her rakami donduryorum  burasi onclick olunca bir foksiyn yaarim
    el.onclick=function(e){
    //  console.log(this.textContent) burada el fok this bir usteki foks gider ve buradaki degeri gosterir
    if(goster.innerText == "0"){
      goster.innerText=""
    }

      goster.innerText += this.textContent//+ zayiyorum ustine ekler
      console.log(goster.value)
    }
})


opr.forEach(function(rt){
  rt.onclick=function(e){

    if(this.innerText == "CE"){
      goster.innerText = " 0"
      location.reload()
    }
    else if(this.innerText == "+"){
      goster.innerText += this.textContent//+ zayiyorum ustine ekler 
    }
    else if(this.innerText == "-"){
      goster.innerText += this.textContent
    }
    else if(this.innerText == "*"){
      goster.innerText += this.textContent
    }
    else if(this.innerText == "/"){
      goster.innerText += this.textContent
    }
    else if(this.innerText == "."){
      goster.innerText += this.textContent
    }
    else if(this.innerText == "="){
      goster.innerText = eval(goster.innerText)
    }

  }
})