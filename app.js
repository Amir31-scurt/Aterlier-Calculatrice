// Function to display the clicked value in the result input
function calc(value){
    // Check if the value is a number or a valid operator
    if (!isNaN(value) || ['/', '*', '-', '+', '.'].includes(value)) {
        document.getElementById('result').value += value;
    }
}
// Function to clear the result input
function clr(){
    resetInputBackground();
    document.getElementById('result').value = "";
    document.getElementById('result').style.color = "";
    document.getElementById('result').removeAttribute("disabled")
}
function result(){
    var inputField = document.getElementById('result');
    try {
        var resultValue = eval(inputField.value);
        // Check if the result is a valid number
        if (!isNaN(resultValue)) {
            inputField.value = resultValue;
            resetInputBackground();
        } else {
            inputField.style.backgroundColor = '#fdd2d2';
        }
    } 
    catch (error) {
        inputField.value = 'Error';
        inputField.style.backgroundColor = '#fdd2d2';
        inputField.style.color = "red";
        inputField.setAttribute("disabled", "");
    }
}
// Enter and Esc key
function myFunction(event) {
    // Check the pressed key and call the corresponding function
    switch (event.key) {
        case 'Enter':
            result();
            break;
        case 'Escape':
            clr();
            break;
    }
}
document.addEventListener('keydown', myFunction);
// Background color when characters are not validated
function resetInputBackground(){
    document.getElementById('result').style.backgroundColor = "";
}