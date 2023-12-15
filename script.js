bodyHook = document.getElementById("calculatorApp");
ThemeButtonsHook = document.getElementsByClassName("switcher__button");
resultHook = document.getElementById("result");
submitHook = document.getElementById("submit");
resetHook = document.getElementById("reset");
buttonsHook = document.getElementsByClassName("value-button");
delHook = document.getElementById("del");

let inputValue = "";

for ( btn of ThemeButtonsHook ) {
    btn.addEventListener("click",(event)=>{
        for(button of ThemeButtonsHook) button.classList.add("non-visible");
        event.target.classList.remove("non-visible");
        bodyHook.className = "";
        bodyHook.classList.add(event.target.id);
    });
}

submitHook.addEventListener("click",(event)=>{
    inputValue = eval(inputValue);
    displayResult();
});

resetHook.addEventListener("click",(event)=>{
    inputValue = "";
    displayResult();
});

delHook.addEventListener("click",(event)=>{
    inputValue = inputValue.slice(0,-1);
    displayResult();
});

for(btn of buttonsHook) {
    btn.addEventListener("click",(event)=>{
        inputValue+=event.target.textContent;
        displayResult()
    });
}

function displayResult() {
    if(inputValue == "") resultHook.textContent = "0";
    else resultHook.textContent = inputValue;
}




