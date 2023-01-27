const NumberOfBTN= 9;
let ArrayOfBTN = [];
let num_1 = 0;
let num_2 = 0;
let result;
let operator = 0;
const box = document.getElementById("result-box");
const equel = document.getElementById("num-equel");


box.innerHTML = "";
for (let i = 0; i<=NumberOfBTN; i++){
    const BTN = document.getElementById(i.toString());
    ArrayOfBTN[i] = BTN;
}

for (let i = 0; i<=NumberOfBTN; i++){
    ArrayOfBTN[i].onclick = function(){
    box.innerHTML = ArrayOfBTN[i].innerHTML;

}
}

document.getElementById("num-multi").onclick = function(){
    operator = document.getElementById("num-multi").innerHTML;
    num_1 = box.innerHTML;
    box.innerHTML = ""
    console.log(operator);
}

equel.onclick = function(){
    num_2 = box.innerHTML;
    if(operator == "x"){
        result = num_1*num_2;
        box.innerHTML = result;
    }
}
