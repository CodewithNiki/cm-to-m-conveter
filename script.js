const centInput = document.querySelector("#cent");
const metInput = document.querySelector("#met");
const reverse = document.querySelector('#reverse');
const convert = document.querySelector('#convert');

let cm = 100; let m = 1 / 100;

document.addEventListener("click", (e) => {
    if (e.target === convert) {
        metInput.value = centInput.value;
        metInput.value = centInput.value / cm;
    }
    if(e.target === reverse){
        centInput.value = metInput.value;
        metInput.value = centInput.value / cm;
    }
})