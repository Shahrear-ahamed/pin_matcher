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