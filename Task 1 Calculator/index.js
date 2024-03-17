const display = document.getElementById('display');

function appendDisplay(input){
    display.value += input;
}

function clearto(){
    display.value = " ";
}

function total(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error!!!"
    }
    
}

function delto(){
   var currentValue = display.value;
    display.value = currentValue.slice(0, -1);
}