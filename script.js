const NumberOfBTN= 9;
let ArrayOfBTN = [];
let num_1 = 0;
let mum_2 = 0;
for (let i = 0; i<=NumberOfBTN; i++){
    const BTN = document.getElementById(i.toString());
    ArrayOfBTN[i] = BTN;
}

console.log(ArrayOfBTN);

for (let i = 0; i<=NumberOfBTN; i++){
ArrayOfBTN[i].onclick = function(){
    num_1 = ArrayOfBTN[i].innerHTML
    console.log(num_1);

}
}


