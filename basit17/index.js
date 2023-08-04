const trex = document.querySelector('#trex')
const kaktus = document.querySelector('#kaktus')

function zipla() {
    //console.log('ders')
    if (kaktus.classList != 'kaktus-animate') {
        kaktus.classList.add('kaktus-animate')
    }
    if (trex.classList != 'trex-animate') {
        trex.classList.add('trex-animate');
        setTimeout(function () {
            trex.classList.remove('trex-animate')
        }, 500)
    }
}

// setInterval Javascript ile belirli aralıklar ile aynı işlemi yapmak için geliştirilmiş bir metotdur. Süre milisaniye olarak belirtilir ve belirtilen süre beklendikten sonra istenen kod çalıştırılır. Sonrasında yine belirlenen süre kadar bekleme yapılır ve sonrasında tekrar kod çalıştırılır. Bu böylece devam eder. Eğer program sonlandırılır veya clearInterval çağrılırsa bu işlem durdurulur.


const mesajYaz = () => {
    console.log("setIterval Calisti");
}
setInterval(mesajYaz, 5000);

//burada tiklaayinca yiplama ve carpamayi ayarlayacagiy ;nce css cekiyoruy sonra onunda bottom degerini aliyoryuy
const carpisma = setInterval(function(){
    var  trexBott =parseInt(window.getComputedStyle(trex).getPropertyValue('bottom'))
   // console.log(trexBott) sonra bunu parseInt tam ayiya cevirecem
    //console.log(trexBott) 


    var  kakBott =parseInt(window.getComputedStyle(kaktus).getPropertyValue('left'))
    //console.log(kakBott)
      
    if(kakBott > 0 && kakBott< 40 && trexBott<40)
    {
        kaktus.classList.remove('kaktus-animate')
        alert('azagini denk al')
    }
 
}) 