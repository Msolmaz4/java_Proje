const trex = document.querySelector('#trex')
const kaktus = document.querySelector('#kaktus')

function zipla(){
    //console.log('ders')
 
    if(kaktus.classList != 'kaktus-animate'){
        kaktus.classList.add('kaktus-animate')
    }




if(trex.classList != 'trex-animate'){
    trex.classList.add('trex-animate');
    setTimeout(function(){
        trex.classList.remove('trex-animate')
    },500)



}




}