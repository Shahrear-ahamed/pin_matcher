function getPin(){
    const inputValue = document.getElementById("pin_value");
    const pin = Math.round(Math.random()*10000);
    const pinLength = (pin+"").length
    if(pinLength ==4){
        inputValue.value = pin;
    }else{
        getPin();
    }
}
// typed_number
// key_pad

document.getElementById("key_pad").addEventListener("click", function(e){
    const numbers = document.getElementById("typed_number")
    const eventValue = e.target.innerText;
    if(isNaN(eventValue)){
        if(eventValue == "C"){
            numbers.value = ""
        }
    }else{
        numbers.value = numbers.value+eventValue;
    }
});

function submitPin(){
    const generatedPin = document.getElementById("pin_value");
    const inputPin = document.getElementById("typed_number");

    const success = document.getElementById("success");
    const error = document.getElementById("errors");
    if(generatedPin.value == inputPin.value){
        success.style.display = "block";
        error.style.display = "none";
        generatedPin.value = "";
        inputPin.value = "";
    }else{
        success.style.display = "none";
        error.style.display = "block";
        inputPin.value = "";
    }
}