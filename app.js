var operation;
var result;

function Calculator(o){
    result = parseFloat(document.getElementById('calc').value);
    operation = o;
    document.getElementById('calc').value = "";
}

function Result(){

    var newNum = parseFloat(document.getElementById('calc').value);

    if (operation === '+') {
        result += newNum; 
    } 
    else if (operation === '-') {
        result -= newNum;
    } 
    else if (operation === '*') {
        result *= newNum;
    } 
    else if (operation === '/') {
        if (newNum === 0) {
            alert("Can't devide by 0");
            return;
        }
        result = result / newNum;
    }
    else if (operation === '%') {
        result = result % newNum;
    }
    document.getElementById('calc').value = result;
    
}

function putNum(a) {
    document.getElementById('calc').value += a;
}

function clearInput() {
    document.getElementById('calc').value = "";
}

function putDot(d) {
    var input = document.getElementById('calc').value;
    if (input === "") {
        document.getElementById('calc').value = 0 + d ;
        return;
    }
    if(!input.includes('.')){
        document.getElementById('calc').value += d;
    }
}


function Delete(){
    var input = document.getElementById('calc').value;
    document.getElementById('calc').value = input.substring(0, input.length - 1)
}

 