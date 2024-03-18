"use strict";
const bounds = document.querySelectorAll('[data-bound]');
const cvc = document.getElementById('cvc');
const id1 = document.getElementById('id1');
const id2 = document.getElementById('id2');
const id3 = document.getElementById('id3');
console.log(bounds);
for (let i = 0; i < bounds.length; i++) {
    const targetId = bounds[i].getAttribute('data-bound');
    const defValue = bounds[i].getAttribute('data-def');
    const targetEl = document.getElementById(targetId);
    bounds[i].addEventListener('keyup', () => targetEl.innerText = bounds[i].value || defValue);
}
const cvc_toggler = document.getElementById('cvc_toggler');
cvc_toggler.addEventListener('click', () => {
    const target = cvc_toggler.getAttribute('data-target');
    const el = document.getElementById(target);
    el.setAttribute('type', el.type === 'text' ? 'password' : 'text');
});
const timer = document.querySelector('[data-id=timer]');
let timeLeft = 2 * 60 + 1;
const tick = () => {
    if (timeLeft > 0) {
        timeLeft--;
        const date = new Date('2000-01-01 00:00:00');
        date.setSeconds(timeLeft);
        const str = date.toISOString();
        timer.children[0].innerHTML = str[14];
        timer.children[1].innerHTML = str[15];
        timer.children[3].innerHTML = str[17];
        timer.children[4].innerHTML = str[18];
    }
    else {
        window.location.replace("/pages/cart.html");
    }
};
setInterval(() => { tick(); }, 1000);
tick();
let settingsCheckout = {
    divide: 61.5,
    ending: 30,
    euro: true,
    max: 0,
    min: 0,
    page: 1,
    postfix: "",
    prefix: "€",
    starting: 0,
    tofixed: 2,
    totalItems: 18,
    totalPrice: 103440,
    percentage: 0
};
const priceTag = document.getElementById('priceTag');
const totalItemsTag = document.getElementById('totalItemsCheckout');
const storeTag = document.getElementById('storeTag');
const couponInput = document.getElementById('couponInput');
window.onload = () => {
    let preParse = localStorage.getItem("Settings");
    let checkout = JSON.parse(preParse);
    settingsCheckout = checkout;
    priceTag.innerHTML = settingsCheckout.prefix + (settingsCheckout.totalPrice / settingsCheckout.divide).toFixed(settingsCheckout.tofixed) + settingsCheckout.postfix;
    totalItemsTag.innerHTML = String(settingsCheckout.totalItems);
    let currentArrJSON = localStorage.getItem("cart");
    let currentArr = JSON.parse(currentArrJSON);
    const newSet = new Set();
    currentArr.forEach(element => {
        newSet.add(element.store);
    });
    const myArr = Array.from(newSet);
    storeTag.innerHTML = String(myArr);
};
const modal = document.getElementById("myModal");
const btn = document.getElementById("myBtn");
const span = document.getElementsByClassName("close")[0];
const modalHeader = document.getElementById('modalHeader');
const modalText = document.getElementById('modalText');
const modalImage = document.getElementById('modalImage');
const besarTag = document.getElementById('besar');
const bajramTag = document.getElementById('bajram');
const articleTag = document.getElementById('articleRoll');
const besartContainer = document.getElementById('besartContainer');
const besart = document.getElementById('besart');
couponInput.addEventListener('change', () => {
    let value = couponInput.value;
    let percent = 0;
    let currentArrJSON = localStorage.getItem("cart");
    let currentArr = JSON.parse(currentArrJSON);
    modalImage.style.display = 'block';
    if (value === "besar") {
        percent = 0.12;
        couponInput.value = '';
    }
    if (value === "bajram") {
        percent = -0.05;
        couponInput.value = '';
    }
    if (value === "arbin") {
        percent = -0.5;
        couponInput.value = '';
    }
    if (value === "ahmed") {
        percent = -0.05;
        couponInput.value = '';
        modal.style.display = "block";
        modalHeader.innerHTML = 'Congrats';
        modalText.innerHTML = "You Won a Free Macedonian Pasosh from Ahmed!";
        const pasosh = {
            id: "https://www.passportindex.org/countries/mk.png",
            store: "MVR",
            name: "Passport of Republic of North Macedonia",
            price: "0",
            manufacturer: "MVR",
            image: "/images/mk.webp",
            url: "https://www.passportindex.org/countries/mk.png",
            category: "Passport",
            created_at: ""
        };
        modalImage.src = pasosh.image;
        let filteredArr = currentArr.filter(element => !(element.id === "https://www.passportindex.org/countries/mk.png"));
        filteredArr.push(pasosh);
        localStorage.setItem("cart", JSON.stringify(filteredArr));
    }
    if (value === "aroma" || value === "ajla" || value === "ekler") {
        percent = -0.00;
        couponInput.value = '';
        modal.style.display = "block";
        modalHeader.innerHTML = 'Congrats';
        modalText.innerHTML = "You Won free Eklers from Aroma!";
        modal.style.display = "block";
        const pasosh = {
            id: "/images/aroma.jpg",
            store: "Aroma",
            name: "Aroma Ekler",
            price: "0",
            manufacturer: "Aroma",
            image: "/images/aroma.jpg",
            url: "/images/aroma.jpg",
            category: "Food",
            created_at: ""
        };
        modalImage.src = pasosh.image;
        let filteredArr = currentArr.filter(element => !(element.id === "/images/aroma.jpg"));
        filteredArr.push(pasosh);
        console.log(filteredArr, pasosh);
        localStorage.setItem("cart", JSON.stringify(filteredArr));
    }
    if (value === "fatime") {
        modalHeader.innerHTML = 'Oh no!';
        modalText.innerHTML = "Fatime ate all your cart!";
        modal.style.display = "block";
        modalImage.style.display = 'none';
        let currentArr = [];
        let currentArrParse = JSON.stringify(currentArr);
        localStorage.setItem('cart', currentArrParse);
        priceTag.innerHTML = '0';
        settingsCheckout.totalPrice = 0;
        storeTag.innerHTML = '';
        totalItemsTag.innerHTML = '';
        couponInput.value = '';
    }
    if (value === "amar") {
        couponInput.value = '';
        modalHeader.innerHTML = 'Oh no!';
        modalText.innerHTML = "Everything turned small!";
        modal.style.display = "block";
        modalImage.style.display = 'none';
        const p = document.querySelectorAll('*');
        p.forEach(element => {
            element.style.fontSize = '8px';
        });
    }
    if (value === "ermal") {
        couponInput.value = '';
        modalHeader.innerHTML = 'Psajko!';
        modalText.innerHTML = "Psajko!";
        modal.style.display = "block";
        modalImage.style.display = 'none';
        const p = document.querySelectorAll('p');
        p.forEach(element => {
            element.innerHTML = 'Psajko';
        });
        const h1 = document.querySelectorAll('h1');
        h1.forEach(element => {
            element.innerHTML = 'Psajko';
        });
        const h2 = document.querySelectorAll('h2');
        h2.forEach(element => {
            element.innerHTML = 'Psajko';
        });
        const h3 = document.querySelectorAll('h3');
        h3.forEach(element => {
            element.innerHTML = 'Psajko';
        });
        const li = document.querySelectorAll('li');
        li.forEach(element => {
            element.innerHTML = 'Psajko';
        });
        const span = document.querySelectorAll('span');
        span.forEach(element => {
            element.innerHTML = 'Psajko';
        });
        const strong = document.querySelectorAll('strong');
        strong.forEach(element => {
            element.innerHTML = 'Psajko';
        });
        const input = document.querySelectorAll('input');
        input.forEach(element => {
            element.value = 'Psajko';
        });
        const i = document.querySelectorAll('i');
        i.forEach(element => {
            element.innerHTML = 'Psajko';
        });
    }
    if (value === "besar") {
        besarTag.style.display = 'block';
    }
    if (value === "bajram") {
        bounds[0].type = 'text';
        bounds[1].type = 'text';
        bounds[2].type = 'text';
        cvc.type = 'text';
        id1.type = 'text';
        id2.type = 'text';
        id3.type = 'text';
        Bajram();
    }
    if (value === "besart") {
        couponInput.value = '';
        besartContainer.style.display = 'flex';
        besart.play();
        const duration = besart.duration * 1000 + 300;
        setTimeout(() => {
            articleTag.style.animation = "roll 3s infinite";
            besartContainer.style.display = 'none';
        }, duration);
    }
    if (value === "anisa") {
        couponInput.value = '';
        articleTag.style.display = 'none';
    }
    if (value === "arian") {
        window.location.replace("/pages/reconnect.html");
    }
    if (settingsCheckout.percentage === 0) {
        settingsCheckout.percentage = percent;
    }
    else {
        settingsCheckout.percentage += settingsCheckout.percentage * percent;
    }
    priceTag.innerHTML = settingsCheckout.prefix + ((settingsCheckout.totalPrice / settingsCheckout.divide) + (settingsCheckout.totalPrice / settingsCheckout.divide) * settingsCheckout.percentage).toFixed(settingsCheckout.tofixed) + settingsCheckout.postfix;
});
span.onclick = function () {
    modal.style.display = "none";
};
function Bajram() {
    const random = Math.floor(Math.random() * bajram.length);
    bajramTag.src = bajram[random].mp3file;
    bajramTag.play();
    bounds[0].value = bajram[random].citat;
    bounds[1].value = bajram[random].citat;
    bounds[2].value = bajram[random].citat;
    bounds[3].value = bajram[random].citat;
    cvc.value = bajram[random].citat;
    id1.value = bajram[random].citat;
    id2.value = bajram[random].citat;
    id3.value = bajram[random].citat;
    couponInput.value = bajram[random].citat;
    setTimeout(() => {
        const duration = bajramTag.duration * 1000;
        setTimeout(() => {
            Bajram();
        }, duration);
    }, 100);
}
const bajram = [
    {
        citat: "Whooaoh",
        cituesi: "Bajram",
        mp3file: "/audio/bajram/woooooa.mp3",
        mp3name: "woooooa.mp3",
        id: 0
    },
    {
        citat: "ahhh",
        cituesi: "Bajram",
        mp3file: "/audio/bajram/ahhh.mp3",
        mp3name: "ahhh.mp3",
        id: 1
    },
    {
        citat: "Ta dhin lojen pidhi nanes",
        cituesi: "Bajram",
        mp3file: "/audio/bajram/ta_dhin_lojen.mp3",
        mp3name: "ta_dhin_lojen.mp3",
        id: 2
    },
    {
        citat: "O be qka kum hup",
        cituesi: "Bajram",
        mp3file: "/audio/bajram/o_be_qka_kum_hup.mp3",
        mp3name: "o_be_qka_kum_hup.mp3",
        id: 3
    },
    {
        citat: "Mos zha brenda ta shtish",
        cituesi: "Bajram",
        mp3file: "/audio/bajram/mos_zha_brenda_ta_shtish.mp3",
        mp3name: "mos_zha_brenda_ta_shtish.mp3",
        id: 4
    },
    {
        citat: "Hungju be Arbin",
        cituesi: "Bajram",
        mp3file: "/audio/bajram/hungju_be_arbin.mp3",
        mp3name: "hungju_be_arbin.mp3",
        id: 5
    },
    {
        citat: "Kada se sem hypen",
        cituesi: "Bajram",
        mp3file: "/audio/bajram/kada_se_sem_hypen.mp3",
        mp3name: "kada_se_sem_hypen.mp3",
        id: 6
    },
    {
        citat: "U lidha u ludha",
        cituesi: "Bajram",
        mp3file: "/audio/bajram/u_lidh_u_ludha.mp3",
        mp3name: "u_lidh_u_ludha.mp3",
        id: 7
    },
];
