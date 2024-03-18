let digitsOfPI = 4, currentPIDigit = 0;
const PI = Math.PI.toString().split("")
const typedPI: string[] = [];
const HTMLDom2 = document.getElementById("Ass")! as HTMLInputElement
const input = prompt("MILIseconds Delay: ")!
let test2 = +input;

function animateDigits() {500

    for(let i = 0; i < digitsOfPI; i++) {
        setTimeout(() => {
                    simulateClick(PI[i])
        }, i * test2);
    }
    setTimeout(() => {
        HTMLDom2.value = ""  
    }, (digitsOfPI + 1) * test2 );
 
}

function simulateClick(idSim: string) {
    console.log(idSim)
    let HTMLDom = document.getElementById(idSim)!

    HTMLDom.classList.add("click")
    HTMLDom2.value += idSim;
    setTimeout(() => {
        HTMLDom.classList.remove("click")
    }, 500);
}

function typeNum(num: number) {
    typedPI.push(num.toString())
    if(typedPI[currentPIDigit] === PI[currentPIDigit]) {
        console.log("correct");
        currentPIDigit++
        HTMLDom2.value += num.toString();
        if(currentPIDigit === digitsOfPI) {
            currentPIDigit = 0
            typedPI.length = 0
            digitsOfPI++
            HTMLDom2.value = ""
            animateDigits();
        }
    } else {
        alert("You lost!")
    }
}

animateDigits()
// 3.141592653589793