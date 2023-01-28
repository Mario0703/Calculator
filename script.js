const NumberOfBTN= 9;
let ArrayOfBTN = [];
let OPBTN = [];
let num_1;
let num_2;
let result;
let operator = 0;
const InputBox = document.getElementById("result-box");
const equel = document.getElementById("num-equel");
const additon =  document.getElementById("num-addionen");
const multi =  document.getElementById("num-multi");
const div =  document.getElementById("num-division");
const sub =  document.getElementById("num-substraction");
const clear =  document.getElementById("num-clear");
const pro =  document.getElementById("num-procent");
const changeUnit =  document.getElementById("num-(+-)");
const dot =  document.getElementById("num-dot");



class buttons{

    constructor(BTNname){
        this.BTNname = BTNname;
    }
    CreatBTN(BTNname){
        const BTN = document.getElementById(BTNname.toString());
        return BTN
    }


}


for (let i = 0; i<=NumberOfBTN; i++){
    const button = new buttons(i)
    ArrayOfBTN[i] = button.CreatBTN(i);
}

for (let i = 0; i<=NumberOfBTN; i++){
    ArrayOfBTN[i].onclick = function(){
    InputBox.innerHTML += ArrayOfBTN[i].innerHTML;
    }
}


multi.onclick = function(){
    operator = multi.innerHTML;
    num_1 = InputBox.innerHTML;
    InputBox.innerHTML = ""
}

additon.onclick = function(){
    operator = additon.innerHTML;
    num_1 = InputBox.innerHTML;
    InputBox.innerHTML = ""
}

sub.onclick = function(){
    operator = sub.innerHTML;
    num_1 = InputBox.innerHTML;
    InputBox.innerHTML = ""
}

div.onclick = function(){
    operator = div.innerHTML;
    num_1 = InputBox.innerHTML;
    InputBox.innerHTML = ""
}



equel.onclick = function(){
    num_2 = InputBox.innerHTML;
    
    switch(operator)
    {
    case("x"):
        num_1 = Number(num_1)
        num_2 = Number(num_2)
        
        result = num_1*num_2;
        InputBox.innerHTML = result;
        break;

    case("+"):
        num_1 = Number(num_1)
        num_2 = Number(num_2)

        result = num_1+num_2;
        InputBox.innerHTML = result;
        break;
    
    case("-"):
        num_1 = Number(num_1)
        num_2 = Number(num_2)
        
        result = num_1-num_2;
        InputBox.innerHTML = result;
        break;

    case("/"):
        num_1 = Number(num_1)
        num_2 = Number(num_2)
        
        result = num_1-num_2;
        InputBox.innerHTML = result;
        break
    }
}

