interface Cpu {
    model: string,
    brand: string,
    gen: string,
    cores: number,
    eCore: number,
    pCore: number,
    price: number,
    img: string
}

const CPUs: Cpu[] = [
    {
        model: 'i9-14900k',
        brand: 'Intel',
        gen: '14',
        cores: 24,
        pCore: 8,
        eCore: 16,
        price: 599,
        img: "/images/products/cpu/intel/14gen/i9-14900k.png"
    },
    {
        model: 'i7-14700k',
        brand: 'Intel',
        gen: '14',
        cores: 20,
        pCore: 8,
        eCore: 12,
        price: 419,
        img: "/images/products/cpu/intel/14gen/i7-14700k.webp"
    },
    {
        model: 'Ryzen™ 9 7950X3D',
        brand: 'AMD',
        gen: 'Zen 4',
        cores: 16,
        pCore: 0,
        eCore: 0,
        price: 699,
        img: "/images/products/cpu/amd/zen4/9_7950x3d.webp"
    }
]


let displayCPUs = [...CPUs]
let displayElem = document.getElementById("productsElement")!

function display() {
    displayElem.innerHTML = ''
    displayCPUs.forEach(element => {
        let fullName = `${element.brand} ${element.model}`
        console.log(fullName.length)
        let h = 'h1'
        if(fullName.length > 17) {
            h = 'h2'

        }
        if(fullName.length > 25) {
            h = 'h3'
        }
        const product = `
        <div class="product">
                    <div class="card">
                        <img src="${element.img}" alt="${element.model}" style="width:100%; ">
                        <${h}>${fullName}</${h}>
                        <p class="price">$${element.price}</p>

                        <p class="test"><button>Add to Cart</button></p>
                        
                    </div>
        </div>
        `
        displayElem.innerHTML += product
    });
}

display()

// <p>Some text about the jeans..</p>