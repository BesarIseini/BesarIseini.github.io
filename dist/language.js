"use strict";
const textEN = {
    promotions: {
        nvidia: {
            title: "Exciting News Unveiled: RTX 4090 is Here!",
            p1: "Brace yourselves, gamers and creators! The powerhouse you've been waiting for has finally arrived - introducing the revolutionary NVIDIA RTX 4090!",
            p2: "Unleash Unprecedented Power: Featuring groundbreaking architecture, the RTX 4090 delivers unparalleled performance for the most demanding tasks and next-gen gaming experiences. Elevate your creativity and conquer the virtual world like never before!"
        },
        s24: {
            title: "Introducing the S24: Elevate Your Experience!",
            p1: "Unleash a new level of performance and innovation with the all-new S24 where cutting-edge technology meets sleek design!",
            p2: "Get ready to experience a new era of performance and style with the S24. Elevate your world, upgrade your view!"
        },
        intel: {
            title: "Unleash the Powerhouse: Introducing the Intel Core i9-14900K!",
            p1: "Brace yourself for a new era of performance with the Intel Core i9-14900K - where speed, power, and innovation collide!",
            p2: "To celebrate the arrival of the i9-14900K, we're offering exclusive launch promotions! Be among the first to experience the next level of computing with special deals, bundled offers, and more. Don't miss out on this opportunity to upgrade your system.",
            p3: "Upgrade your computing experience with the Intel Core i9-14900K. Unleash the beast within your system and redefine what's possible. Your journey to unparalleled performance starts here!"
        },
        button: "Click for more!"
    },
    navigation: {
        computer: "Computerssss",
        parts: "Computer Parts",
        laptops: "Laptops",
        accesories: "Accessories",
        phone: "Phones",
        TVs: "TVs",
        cart: "Cart"
    },
    products: {
        page: "Pages",
        filter: "Filters",
        manufacturer: "Manufactures",
        useEuros: "Use Euros",
        viewItem: "View Item",
        addToCart: "Add to Cart"
    },
    cart: {
        shoppingCart: "Shopping Cart",
        removeAll: "Remove all",
        remove: "Remove",
        saveForLater: "Save for later",
        subTotal: "Sub-Total",
        items: "items",
        checkout: "Checkout",
        nothing: "You have nothing in your cart."
    },
    checkout: {
        cardNumber: "",
        cardNumberDescription: "",
        expiryDate: "",
        expiryDateOrder: "",
        CVCNumber: "",
        CVCNumberDescription: "",
        cardholderName: "",
        cardholderNameDescription: "",
        stores: "",
        orderNumber: "",
        numberOfProducts: "",
        coupon: "",
        youHaveToPay: ""
    }
};
const textALB = {
    promotions: {
        nvidia: {
            title: "Lajm emocionues i zbuluar: RTX 4090 është këtu!",
            p1: "Përgatitni veten, lojtarë dhe krijues! Energjia që keni pritur më në fund ka ardhur - duke prezantuar NVIDIA RTX 4090 revolucionare!",
            p2: "Lëshoni fuqi të paparë: Me arkitekturë novator, RTX 4090 ofron performancë të pashembullt për detyrat më të vështira dhe përvojat e lojërave të gjeneratës tjetër. Ngritni kreativitetin tuaj dhe pushtoni botën virtuale si kurrë më parë!"
        },
        s24: {
            title: "Prezantimi i S24: Ngritni përvojën tuaj!",
            p1: "Lëshoni një nivel të ri të performancës dhe inovacionit me S24 krejtësisht të ri, ku teknologjia e fundit takohet me dizajnin elegant!",
            p2: "Bëhuni gati për të përjetuar një epokë të re të performancës dhe stilit me S24. Ngrini botën tuaj, përmirësoni pamjen tuaj!"
        },
        intel: {
            title: "Lëshoni Powerhouse: Prezantoni Intel Core i9-14900K!",
            p1: "Përgatituni për një epokë të re të performancës me Intel Core i9-14900K - ku shpejtësia, fuqia dhe inovacioni përplasen!",
            p2: "Për të festuar ardhjen e i9-14900K, ne po ofrojmë promovime ekskluzive për nisjen! Bëhuni ndër të parët që do të përjetoni nivelin tjetër të informatikës me oferta speciale, oferta të paketuara dhe më shumë. Mos e humbisni këtë mundësi për të përmirësuar sistemin tuaj.",
            p3: "Përmirësoni përvojën tuaj kompjuterike me Intel Core i9-14900K. Lëshoni bishën brenda sistemit tuaj dhe ripërcaktoni atë që është e mundur. Udhëtimi juaj drejt performancës së pashembullt fillon këtu!"
        },
        button: "Kliko për më shumë!"
    },
    navigation: {
        computer: "BAJRAM Kompjuterët",
        parts: "Pjesë Kompjuterike",
        laptops: "Laptopë",
        accesories: "Aksesorë",
        phone: "Telefonat",
        TVs: "TVs",
        cart: "Karrocë"
    },
    products: {
        page: "Faqet",
        filter: "Filtrat",
        manufacturer: "Prodhuesi",
        useEuros: "Perdor Euro",
        viewItem: "Shiko artikullin",
        addToCart: "Shto në Shportë"
    },
    cart: {
        shoppingCart: "Karroca e blerjeve",
        removeAll: "Hiq të gjitha",
        remove: "Hiq",
        saveForLater: "Ruani për më vonë",
        subTotal: "Nëntotali",
        items: "sende",
        checkout: "Përfundimi",
        nothing: "Nuk keni asgjë në karrocën tuaj."
    }
};
switch (settings.currentLanguageID) {
    case 0:
        settings.currentLanguage = textEN;
        break;
    case 1:
        settings.currentLanguage = textALB;
        break;
}
const navComputerText = document.getElementById('computer');
const navPartsText = document.getElementById('parts');
const navLaptopsText = document.getElementById('laptops');
const navAccessoriesText = document.getElementById('accesories');
const navPhoneText = document.getElementById('phone');
const navTVsText = document.getElementById('TVs');
const navCartText = document.getElementById('cart');
function navigationText() {
    const currentLanguage = settings.currentLanguage;
    navComputerText.innerHTML = currentLanguage.navigation.computer;
    navPartsText.innerHTML = currentLanguage.navigation.parts;
    navLaptopsText.innerHTML = currentLanguage.navigation.laptops;
    navAccessoriesText.innerHTML = currentLanguage.navigation.accesories;
    navPhoneText.innerHTML = currentLanguage.navigation.phone;
    navTVsText.innerHTML = currentLanguage.navigation.TVs;
    navCartText.innerHTML = currentLanguage.navigation.cart;
}
const promoNvidiaTitle = document.getElementById('nvidiaPromotionTitle');
const promoNvidiaP1 = document.getElementById('nvidiaPromotionP1');
const promoNvidiaP2 = document.getElementById('nvidiaPromotionP2');
const promoS24Title = document.getElementById('s24PromotionTitle');
const promoS24P1 = document.getElementById('s24PromotionP1');
const promoS24P2 = document.getElementById('s24PromotionP2');
const promoIntelTitle = document.getElementById('intelPromotionTitle');
const promoIntelP1 = document.getElementById('intelPromotionP1');
const promoIntelP2 = document.getElementById('intelPromotionP2');
const promoIntelP3 = document.getElementById('intelPromotionP3');
function promotions() {
    const currentLanguage = settings.currentLanguage;
    promoNvidiaTitle.innerHTML = currentLanguage.promotions.nvidia.title;
    promoNvidiaP1.innerHTML = currentLanguage.promotions.nvidia.p1;
    promoNvidiaP2.innerHTML = currentLanguage.promotions.nvidia.p2;
    promoS24Title.innerHTML = currentLanguage.promotions.s24.title;
    promoS24P1.innerHTML = currentLanguage.promotions.s24.p1;
    promoS24P2.innerHTML = currentLanguage.promotions.s24.p2;
    promoIntelTitle.innerHTML = currentLanguage.promotions.intel.title;
    promoIntelP1.innerHTML = currentLanguage.promotions.intel.p1;
    promoIntelP2.innerHTML = currentLanguage.promotions.intel.p2;
    promoIntelP3.innerHTML = currentLanguage.promotions.intel.p3;
    const buttons = Array.from(document.getElementsByClassName('promotion-button'));
    buttons.forEach(element => {
        element.innerHTML = currentLanguage.promotions.button;
    });
}
const pagesText = document.getElementById('pagesText');
const filtersText = document.getElementById('filtersText');
const manufacturerText = document.getElementById('manufacturerText');
const useEuros = document.getElementById('useEuros');
function products() {
    const currentLanguage = settings.currentLanguage;
    pagesText.innerHTML = currentLanguage.products.page;
    filtersText.innerHTML = currentLanguage.products.filter;
    manufacturerText.innerHTML = currentLanguage.products.manufacturer;
    useEuros.innerHTML = currentLanguage.products.useEuros;
}
const shoppingCartText = document.getElementById('shoppingCart');
const removeAllText = document.getElementById('removeAll');
const subTotalText = document.getElementById('subtotal');
const itemsText = document.getElementById('items');
const checkoutText = document.getElementById("checkoutText");
function cartText() {
    const currentLanguage = settings.currentLanguage;
    shoppingCartText.innerHTML = currentLanguage.cart.shoppingCart;
    removeAllText.innerHTML = currentLanguage.cart.removeAll;
    useEuros.innerHTML = currentLanguage.products.useEuros;
    subTotalText.innerHTML = currentLanguage.cart.subTotal;
    itemsText.innerHTML = currentLanguage.cart.items;
    checkoutText.innerHTML = currentLanguage.cart.checkout;
}
