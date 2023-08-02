const basla = document.querySelector('#baslat')
const tah = document.querySelector('#tah')
const saz = document.querySelector('#sayi')

var rsaz, sayac,hak=3 
 
basla.addEventListener("click",()=>{
   tah.disabled = false
   rsaz = Math.round(Math.random()*100)
   sayac = 0
   //alert(rsaz)
}
)
tah.addEventListener("click",()=>{

    sayac ++
    if(rsaz != saz.value && sayac>hak ){
        alert("hakkiniy kalmadi")
        tah.disabled = true
    }
    if( rsaz == saz.value){
        alert("tebrikler kzandiniy")
    }
    else if(rsaz >saz.value ){
       alert("buyuk sayi giriniz") 
    }
    else{
        alert("kucuk sayi giriniz")
    }

})