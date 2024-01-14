
var aud1=new Audio()
aud1.src=`./click.mp3`
var display=0;
function clickedBtn(btnValue){
    aud1.play()
    if (display==0){
        display=btnValue;
    }
    else{
        display=`${display}${btnValue}`
    }
    console.log(display)
    document.getElementById("displayInput").value=display;
}

function clearScreen(){
    aud1.play()
    display=0
    document.getElementById("displayInput").value=``;
}

function total(){
    aud1.play()
    // display=eval(display)
    // document.getElementById("displayInput").value=display;
    try {
        displayValue = eval(displayValue);
        displayInput.value = displayValue;
    } catch (error) {
        displayInput.value = 'Error';
        console.error(error);
    }
}

