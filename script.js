const resetText = ""
let min = 0;
let max = 0;

function resetRegex() {
    document.getElementById('regexResult').innerHTML = resetText;
};

function validate() {
    min = document.getElementById("minimum").value;
    max = document.getElementById("maximum").value;

    if (max - min > 0) {
        if (min >= 1 && min < 10) {
            if (max >= 1 && max <= 100) {
                calculate();
            } else {
                document.getElementById('regexResult').innerHTML = "Maximum must be between 1 and 100.";
            }
        } else {
            document.getElementById('regexResult').innerHTML = "Minimum must be between 1 and 9.";
        }
    } else {
        document.getElementById('regexResult').innerHTML = "Minimum must be less than maximum.";
    }   
};

function calculate() {
    min = document.getElementById("minimum").value;
    max = document.getElementById("maximum").value;

    let numReq = "(?=.*\\d)";
    let specReq = "(?=.*[@$!%*?&])";
    let capitalReq = "(?=.*[A-Z])";
    const regexArr = ["^", "[A-Za-z\\d@$!%*?&]{" + min + "," + max + "}$"]

    if(document.getElementById("numberReq").checked) { //Number Required
        regexArr.splice(1, 0, numReq);  
        document.getElementById('regexResult').innerHTML = regexArr.join("");
    }
    if (document.getElementById("capitalLetter").checked) { //Capital Required
        regexArr.splice(1, 0, capitalReq);
        document.getElementById('regexResult').innerHTML = regexArr.join("");
    } 
    if (document.getElementById("specialChar").checked) { //Special Char Required
        regexArr.splice(1, 0, specReq);
        document.getElementById('regexResult').innerHTML = regexArr.join("");               
    }
};
