let openShopping = document.querySelector('.shopping')
let closeShopping = document.querySelector('.closeShopping')
let list = document.querySelector('.list')
let listCard = document.querySelector('.listCard')
let body =document.querySelector('body')
let total = document.querySelector('.total')
let quanty = document.querySelector('.quantitiy')
//classList sayesinde css ulasitoruy ve degistirme yapiyoruz
openShopping.addEventListener('click',()=>{
    body.classList.add('active')
})
closeShopping.addEventListener('click',()=>{
    body.classList.remove('active')
})
let products = [
    {
        id:1,
        name:'Product Name 1',
        image:'./image/1.jpeg',
        price:1200000
    },
    {
        id:2,
        name:'Product Name 2',
        image:'./image/2.jpeg',
        price:1280000
    },
    {
        id:3,
        name:'Product Name 3',
        image:'./image/3.jpeg',
        price:1000
    },
    {
        id:4,
        name:'Product Name 4',
        image:'./image/4.jpeg',
        price:100
    },
    {
        id:5,
        name:'Product Name 5',
        image:'./image/5.jpeg',
        price:5000
    },
    {
        id:6,
        name:'Product Name 6',
        image:'./image/6.jpeg',
        price:9000
    },
]
let listCards = []

function initApp(){
    products.forEach((value,key)=>{
        console.log('key',key)
        let newDiv = document.createElement('div')
        newDiv.classList.add('item')
        newDiv.innerHTML = ` 
     
        <img src="./${value.image}" alt=""/>
        <div clasa= 'title'> ${value.name}  </div>
        <div class='price'> ${value.price.toLocaleString()}</div>
        <button onclick= 'addToCard(${key})'>Add To Card</button>
        `
        list.appendChild(newDiv)
    })

}
initApp()

function addToCard(key){
    if(listCards[key] == null){
        listCards[key] = products[key];
        listCards[key].quanty = 1
    }
    reloadCard()
} 

function reloadCard(){
   listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value,key)=>{
       
        totalPrice = totalPrice + value.price
        count = count + value.quanty

      if(value != null){
        let newDiv1 = document.createElement('li')
        newDiv1.innerHTML= `
        <div><img src="./${value.image}" alt=""/></div>
        <div>${value.name}</div>
        <div>${value.price.toLocaleString()}</div>
        
        <div>
          <button onclick='changeQuantiy(${key},${value.quanty - 1})'> - </button>
          <div class='count'> ${value.quanty}</div>
          <button onclick='changeQuantiy(${key},${value.quanty + 1})'> + </button>
        </div>
        
        `;
        listCard.appendChild(newDiv1)
      }


    })
    total.innerHTML = totalPrice.toLocaleString()
    quanty.innerHTML = count

}

function changeQuantiy(key,quanty){
    if(quanty == 0){
        delete listCards[key]

    }
    else{
        listCards[key].quanty = quanty;
        listCards[key].price = quanty*products[key].price
    }
    reloadCard()
}