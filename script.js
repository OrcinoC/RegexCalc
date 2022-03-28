const resetText = ""
let min = 0;
let max = 0;
let regexAnswer = "";

function showRegex() {
    let text = "I hope I show up!"
    document.getElementById('regexResult').innerHTML = text;
};

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

    let numReq = "^(?=.*\\d)[A-Za-z\\d]{" + min + "," + max + "}$";
    let specReq = "^(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{" + min + "," + max + "}$";
    let capitalReq = "^(?=.*[A-Z])[a-zA-Z\\d]{" + min + "," + max + "}$";
    let numSpecReq = "^(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{" + min + "," + max + "}$";
    let numCapReq = "^(?=.*[A-Z])(?=.*\\d)[A-Za-z\\d@$!%*?&]{" + min + "," + max + "}$";
    let specCapReq = "^(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{" + min + "," + max + "}$";
    let allReq = "^(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{" + min + "," + max + "}$";

    if(document.getElementById("numberReq").checked 
            && document.getElementById("capitalLetter").checked === false
            && document.getElementById("specialChar").checked === false) 
            { //Number Required
                    regexAnswer = numReq;
                    document.getElementById('regexResult').innerHTML = regexAnswer;

    } else if (document.getElementById("capitalLetter").checked
            && document.getElementById("specialChar").checked === false
            && document.getElementById("numberReq").checked === false) 
            { //Capital Required
                    regexAnswer = capitalReq;
                    document.getElementById('regexResult').innerHTML = regexAnswer;

    } else if (document.getElementById("specialChar").checked
            && document.getElementById("numberReq").checked === false
            && document.getElementById("capitalLetter").checked === false)
            { //Special Char Required
                    regexAnswer = specReq;
                    document.getElementById('regexResult').innerHTML = regexAnswer;
                    
    } else if (document.getElementById("specialChar").checked
            && document.getElementById("numberReq").checked === true
            && document.getElementById("capitalLetter").checked === false)
            { //Number & Special Char Required
                    regexAnswer = numSpecReq;
                    document.getElementById('regexResult').innerHTML = regexAnswer;

    } else if (document.getElementById("capitalLetter").checked
            && document.getElementById("specialChar").checked === false
            && document.getElementById("numberReq").checked === true)
            { //Number & Capital Required
                    regexAnswer = numCapReq;
                    document.getElementById('regexResult').innerHTML = regexAnswer;
                    
    } else if (document.getElementById("capitalLetter").checked
            && document.getElementById("specialChar").checked === true
            && document.getElementById("numberReq").checked === false)
            { //Special & Capital Required
                    regexAnswer = specCapReq;
                    document.getElementById('regexResult').innerHTML = regexAnswer;
            
    } else if (document.getElementById("capitalLetter").checked
            && document.getElementById("specialChar").checked === true
            && document.getElementById("numberReq").checked === true)
            { //All Required
                    regexAnswer = allReq;
                    document.getElementById('regexResult').innerHTML = regexAnswer;    
}
};