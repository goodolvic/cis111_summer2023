window.addEventListener("DOMContentLoaded", domLoaded);

function domLoaded() {
   // TODO: Complete the function
    convertButton.addEventListener("click", (e) => {
        e.preventDefault();
        
        if (fInput.value !== "") {
            const tempInF = parseFloat(fInput.value);
            if (isNaN(tempInF)) {
                errorMessage.innerText = fInput.value + " is not a number";
                errorMessage.style.color = "red";
                return;
            } else {
                errorMessage.innerText = "";
            }

            const tempInC = convertFtoC(tempInF);
            cInput.value = tempInC;
            
            currentImage(tempInF);
            
        } else if (cInput.value !== "") {
            const tempInC = parseFloat(cInput.value);
            if (isNaN(tempInC)) {
                errorMessage.innerText = cInput.value + " is not a number";
                errorMessage.style.color = "red";
                return;
            } else {
                errorMessage.innerText = "";
            }
            
            const tempInF = convertCtoF(tempInC);
            fInput.value = tempInF;
            
            currentImage(tempInF);
            
        }
    })
    
    fInput.addEventListener("input", () => {
        cInput.value = "";
    })
    
    cInput.addEventListener("input", () => {
        fInput.value = "";
    })
}

function convertCtoF(degreesCelsius) {
   // TODO: Complete the function
    return (degreesCelsius * 1.8) + 32;
}

function convertFtoC(degreesFahrenheit) {
   // TODO: Complete the function
    return (degreesFahrenheit - 32) / 1.8;
}

function currentImage(tempInF) {
    if (tempInF < 32) {
        weatherImage.src = "cold.png";
    } else if (tempInF >= 32 && tempInF <= 50) {
        weatherImage.src = "cool.png";
    } else {
        weatherImage.src = "warm.png";
    }
}