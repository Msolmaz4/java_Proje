let openShopping = document.querySelector('.shopping')
let closeShopping = document.querySelector('.closeShopping')
let list = document.querySelector('.list')
let listCard = document.querySelector('listCard')
let body =document.querySelector('body')
let total = document.querySelector('.total')
let quanty = document.querySelector('.quantity')
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
        console.log(value)
        let newDiv = document.createElement('div')
        newDiv.classList.add('item')
        newDiv.innerHTML = ` 
     
        <img src="./${value.image}" alt=""/>
        <div clasa= 'title'> ${value.name}  </div>
        <div class='price'> ${value.price.toLocaleString()}</div>
        <button onClick= 'addToCard(${key})'>Add To Card</button>
     
        
        `
        list.appendChild(newDiv)
    })

}
initApp()