// import fs from 'fs'




// const fs = require('fs');
// const data = fs.readFileSync('/data/scraped_products.json', 'utf8');
// const jsonObject = JSON.parse(data);
// console.log(jsonObject)



const vivax = document.getElementById('vivax') as HTMLInputElement
const favorit = document.getElementById('favorit') as HTMLInputElement
const NEO = document.getElementById('neo') as HTMLInputElement
const JVC = document.getElementById('jvc') as HTMLInputElement
const philips = document.getElementById('philips') as HTMLInputElement
const samsung = document.getElementById('samsung') as HTMLInputElement
const sony = document.getElementById('sony') as HTMLInputElement



document.querySelectorAll('.selectTV').forEach(item => {
    item.addEventListener('click', event => {
        displayTVs = []
        if(vivax.checked) {
            const result = TVs.filter((word) => word.manufacturer === 'Vivax');
            displayTVs.push(...result)
        }
        if(favorit.checked) {
            const result = TVs.filter((word) => word.manufacturer === 'Favorit');
            displayTVs.push(...result)
        }
        if(NEO.checked) {
            const result = TVs.filter((word) => word.manufacturer === 'NEO');
            displayTVs.push(...result)
        }
        if(JVC.checked) {
            const result = TVs.filter((word) => word.manufacturer === 'JVC');
            displayTVs.push(...result)
        }
        if(philips.checked) {
            const result = TVs.filter((word) => word.manufacturer === 'Philips');
            displayTVs.push(...result)
        }
        if(samsung.checked) {
            const result = TVs.filter((word) => word.manufacturer === 'Samsung');
            displayTVs.push(...result)
        }
        if(sony.checked) {
            const result = TVs.filter((word) => word.manufacturer === 'Sony');
            displayTVs.push(...result)
        }
        if(!vivax.checked && !favorit.checked && !NEO.checked && !JVC.checked && !philips.checked && !samsung.checked && !sony.checked) {
            displayTVs.push(...TVs)
        }

        settings.page = 1
        addPage(0)
        previousArray = displayTVs
        filterPrice()
    })
  })



async function test() {
    await fetch('/data/scraped_products.json')
        .then((response) => response.json())
        .then((json) => TVs.push(...json));
    displayTVs = [...TVs]
    displayTV()

    const min = Math.min(...TVs.map(item => +item.price)) - 1
    const max = Math.max(...TVs.map(item => +item.price)) + 1

    
    sliderOne.setAttribute('max', String(max))
    sliderTwo.setAttribute('max', String(max))
    sliderOne.setAttribute('min', String(min))
    sliderTwo.setAttribute('min', String(min))
    sliderOne.value = String(min)
    sliderTwo.value = String(max)

    displayValOne.innerHTML = settings.min.toLocaleString()
    displayValTwo.innerHTML = settings.max.toLocaleString()

    settings.min = +sliderOne.value
    settings.max = +sliderTwo.value

    previousArray = TVs
}
test()

sliderOne.addEventListener('click', event => {
    // alert('test')
    settings.min = +sliderOne.value
    settings.max = +sliderTwo.value
    filterPrice()
})

sliderTwo.addEventListener('click', event => {
    settings.min = +sliderOne.value
    settings.max = +sliderTwo.value
    filterPrice()

})

sliderOne.addEventListener('change', event => {
    // alert('test')
    settings.min = +sliderOne.value
    settings.max = +sliderTwo.value
    filterPrice()
})


sliderTwo.addEventListener('change', event => {
    settings.min = +sliderOne.value
    settings.max = +sliderTwo.value
    filterPrice()

})


// displayTV()

// <p>Some text about the jeans..</p>