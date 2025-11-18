let display = document.getElementById("display");

function append(value) {
    if (display.innerText === "0") {
        display.innerText = value;
    } else {
        display.innerText += value;
    }
}

function clearDisplay() {
    display.innerText = "0";
}

function deleteLast() {
    let text = display.innerText;
    display.innerText = text.length > 1 ? text.slice(0, -1) : "0";
}

function calculate() {
    try {
        display.innerText = eval(display.innerText);
    } catch {
        display.innerText = "Error";
    }
}

function square() {
    let num = parseFloat(display.innerText);
    display.innerText = num * num;
}

function cube() {
    let num = parseFloat(display.innerText);
    display.innerText = num * num * num;
}
