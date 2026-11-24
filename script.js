function calculate(op) {

    let a = Number(document.getElementById("num1").value);
    let b = Number(document.getElementById("num2").value);
    let result;

    if (op == '+') {
        result = a + b;
    }
    else if (op == '-') {
        result = a - b;
    }
    else if (op == '*') {
        result = a * b;
    }
    else if (op == '/') {
        result = b === 0 ? "Cannot divide by zero" : a / b;
    }

    document.getElementById("result").innerHTML =
        "Result: " + result;
}