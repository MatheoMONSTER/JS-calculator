const display = document.getElementById("display");

function appendSymbol(symbol) {
    display.value += symbol;
}

function calculate() { 
    try {
        display.value = eval(display.value);
    } catch(error) {
        display.value = "Error";
    }
}

function clearDisplay() { 
    display.value = "";
}

function deleteDigi() { 
    display.value = display.value.slice(0,-1);
}