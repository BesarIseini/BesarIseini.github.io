// const wallpapers = [
//   {
//     link: "./images/wallpapers/wall1.jpg"
//   },
//   {
//     link: "./images/wallpapers/wall2.jpg"
//   },
//   {
//     link: "./images/wallpapers/wall3.jpg"
//   }
// ]
// let currentWallpaper = 1
// const wallpapersElem = document.getElementById('wallpaper')!


// function switchWallpaper() {
//   wallpapersElem.style.backgroundImage = `url("${wallpapers[currentWallpaper].link}")`
//   currentWallpaper++
//   if(currentWallpaper === wallpapers.length) {
//     currentWallpaper = 0
//   }
// }

// setInterval(switchWallpaper, 5_000)

const settings = {
    page: 1,
    starting: 0,
    ending: 30,
    min: 0,
    max: 0,
    euro: false,
    divide: 1,
    postfix: " DEN",
    prefix: "€",
    tofixed: 0,
    totalItems: 0,
    totalPrice: 0,
    percentage: 0
}
interface TV {
    category: string,
    created_at: string,
    id: string,
    image: string,
    manufacturer: string,
    name: string,
    price: string,
    store: string,
    url: string
}


const TVs: TV[] = [
]
const cart = document.getElementById('cartNum')!
const euroCheck = document.getElementById('euroCheck')! as HTMLInputElement

function startUp() {

    if(!localStorage.getItem('cart')) {
        console.log('Local Storage EMPTY')
        let arr: TV[] = []
        localStorage.setItem('cart', JSON.stringify(arr))
    } 
    if(localStorage.getItem('cart')) {
        let currentArrJSON = localStorage.getItem("cart")!
        let currentArr = JSON.parse(currentArrJSON)
        if(currentArr.length === 0) {
            cart.innerHTML = ``

        } else {
            cart.innerHTML = `(${currentArr.length})`

        }
        
    }


    if(!localStorage.getItem('euro')) {
        console.log('Local Storage EMPTY')
        let euro = false
        localStorage.setItem('euro', JSON.stringify(euro))
    } 
    if(localStorage.getItem('euro')) {
        let euro = localStorage.getItem('euro')!
        settings.euro = JSON.parse(euro)
        euroCheck.checked = settings.euro
        checkDivide()
    } 
    
}
startUp()
    

window.onload = function(){
    slideOne();
    slideTwo();
}


let sliderOne = document.getElementById("slider-1") as HTMLInputElement;
let sliderTwo = document.getElementById("slider-2") as HTMLInputElement;
let displayValOne = document.getElementById("range1")!;
let displayValTwo = document.getElementById("range2")!;
let minGap = 0;
let sliderTrack = document.querySelector(".slider-track") as HTMLElement;
let sliderMaxValue = (document.getElementById("slider-1") as HTMLInputElement).max  ;
function slideOne(){
    if(parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap){
        sliderOne.value = String(parseInt(sliderTwo.value) - minGap);
    }
    displayValOne.textContent = settings.prefix + ((+sliderOne.value / settings.divide).toFixed(settings.tofixed)).toLocaleString() + settings.postfix;
    fillColor();
}
function slideTwo(){
    if(parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap){
        sliderTwo.value = String(parseInt(sliderOne.value) + minGap);
    }
    displayValTwo.textContent = settings.prefix + ((+sliderTwo.value / settings.divide).toFixed(settings.tofixed)).toLocaleString() + settings.postfix;
    fillColor();
}
function fillColor(){
    let percent1 = (+sliderOne.value / +sliderMaxValue) * 100;
    let percent2 = (+sliderTwo.value / +sliderMaxValue) * 100;
    sliderTrack.style.background = `linear-gradient(to right, #dadae5 ${percent1}% , #3264fe ${percent1}% , #3264fe ${percent2}%, #dadae5 ${percent2}%)`;
}

function addPage(page: number) {
    settings.page = page + 1
    settings.starting = page * 30
    settings.ending = page * 30 + 30
    displayTV()
}
let previousArray: TV[] = []

function filterPrice() {
    const result = previousArray.filter((word) => {
        let price = +word.price;
        console.log( price > settings.min)
        return price > settings.min && price < settings.max
    });
    // const result2 = result.filter((word) => +word.price < settings.max);
    console.log(result)
    displayTVs = [...result]
    displayTV()
}
let displayTVs = [...TVs]
let displayElemTV = document.getElementById("productsElement")!
const pageElem = document.getElementById('pageElem')!


function displayTV() {
    
    let pages = Math.ceil(displayTVs.length / 30)
    pageElem.innerHTML = ''
    for(let i = 0; i < pages; i++) {
        let currentClass = ''
        if(i + 1 === settings.page) {
            currentClass = 'active-button'
        }
        pageElem.innerHTML += `<button onClick="addPage(${i}, this.id)" id="page${i+1}" class="test213 ${currentClass}">${i + 1}</button>`
    }

    // settings.activePage?.classList.add('active-button')
    
    // settings.min = +sliderOne.value
    // settings.max = +sliderTwo.value
    // console.log(min, max)

    // displayValOne.innerHTML = String(settings.min)
    // displayValTwo.innerHTML = String(settings.max)


    displayElemTV.innerHTML = ''
    for(let i = settings.starting; i < settings.ending; i++) {

        const product = `
        <div class="product">
                    <div class="card">
                        <img src="${displayTVs[i].image}" alt="${displayTVs[i].name}" style="width:100%; height:225px;">
                        <h3>${displayTVs[i].name}</h3>
                        <p class="price">${settings.prefix}${(+displayTVs[i].price / settings.divide).toFixed(settings.tofixed)}${settings.postfix}</p>
                        <p>Store: ${displayTVs[i].store}</p>
                        <p class="card-view-button">
                            <a href="${displayTVs[i].url}" target="_blank">
                                <button>View Item</button>
                            </a>
                        </p>
                        <p class="card-cart-button"><button onclick="addToCart(${i})">Add to Cart</button></p>
                        
                    </div>
        </div>
        `
        displayElemTV.innerHTML += product
    }

    const set = new Set()
    TVs.forEach(element => {
        set.add(element.manufacturer)
    })
    console.log(set)
}



function addToCart(id: number) {
    let currentArrJSON = localStorage.getItem("cart")!
    let currentArr = JSON.parse(currentArrJSON)
    currentArr.push(displayTVs[id])
    console.log(currentArr)
    cart.innerHTML = `(${currentArr.length})`
    let currentArrParse = JSON.stringify(currentArr)
    localStorage.setItem('cart', currentArrParse)
    // localStorage.setItem("myCart", "Tom");
}

euroCheck.addEventListener('click', () => {
    if(euroCheck.checked) {
        settings.euro = true
        localStorage.setItem('euro', 'true')
    } else {
        settings.euro = false
        localStorage.setItem('euro', 'false')
    }
    checkDivide()
    displayTV()
    slideOne();
    slideTwo();
})

function checkDivide() {
    if(settings.euro) {
        settings.divide = 61.5
        settings.prefix = "€"
        settings.postfix = ""
        settings.tofixed = 2
    } else {
        settings.divide = 1
        settings.prefix = ""
        settings.postfix = "DEN"
        settings.tofixed = 0
    }
}