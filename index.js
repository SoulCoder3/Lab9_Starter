class DivideByZeroError extends Error {
    constructor(message) {
        super(message);
        this.name = "DivideByZeroError";
    }
}

let form = document.querySelector('form');
form.addEventListener('submit', e => {
    e.preventDefault();
    let output = document.querySelector('output');
    let firstNum = document.querySelector('#first-num').value;
    let secondNum = document.querySelector('#second-num').value;
    let operator = document.querySelector('#operator').value;

    try {
        //check if the nums are number
        if (Number(firstNum, 10) == NaN || Number(secondNum, 10) == NaN) {
            throw new SyntaxError("Invalid or unexpected token");
        }
        //check if the divisor is 0
        if (operator == "/" && secondNum == 0) {
            throw new DivideByZeroError("The divisor cannot be 0");
        }
        output.innerHTML = eval(`${firstNum} ${operator} ${secondNum}`);
    } catch (e) {
        console.error(e);
    } finally {
        console.log("Finish calculating");
    }
});

window.addEventListener("error", (e) => {
    let output = document.querySelector('output');
    output.innerHTML = `${e.message}`;
})

let errorBtns = Array.from(document.querySelectorAll('#error-btns > button'));
// Start your code here
// You may move this JS to another file if you wish
errorBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        switch (btn.id) {
            case "log":
                console.log("Console Log Demo")
                break;
            case "error":
                console.error("Console Error Demo");
                break;
            case "count":
                console.count("Count button")
                break;
            case "warn":
                console.warn("Console Warm Demo")
                break;
            case "assert":
                let number = 3
                console.assert(number == 2, "%o", {number, errorMsg: "The number doesn't equal to 2"});
                break;
            case "clear":
                console.clear();
                break;
            case "dir":
                console.dir(document.location);
                break;
            case "dirxml":
                console.dirxml(form);
                break;
            case "group-start":
                console.group();
                break;
            case "group-end":
                console.groupEnd();
                break;
            case "table":
                console.table(["Integer", "Flot", "Double"]);
                break;
            case "start-timer":
                console.log("timer start");
                console.time("timer");
                break;
            case "end-timer":
                console.log("timer end");
                console.timeEnd("timer");
                break;
            case "trace":
                function level1() {
                    function level2() {
                        console.trace();
                    }
                    level2();
                }
                level1();
                break;
            case "global-error":
                triggerError()
                break;
        }
    })
})

function triggerError() {
    try {
        yaha;
    } catch (e) {
        console.error(e);
    }
}
