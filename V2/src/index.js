const DEFAULT_CODE = "972"
let firstTouch = true;


function start() {
    let pNumber = document.getElementById("pNumber").value;
    let message = document.getElementById("message").value;
    pNumber = pNumber.replace(/\D/g, '');
    let URL = "https://wa.me/" + pNumber + "?text=" + encodeURI(message);
    window.open(URL);
}

function pasteNumber(){
    getDataFromClipboard();
}

async function getDataFromClipboard() {
    if (firstTouch === true) {
        firstTouch = false;
        try {
            let clipboardText = await navigator.clipboard.readText();
            textNumber = clipboardText.replace(/\D/g, '');
            let numberLength = textNumber.length;
            if (numberLength == 10) {
                await addCode(DEFAULT_CODE);
                pNumber.value = await addSeperator(textNumber);
            }
            else if (numberLength == 11 || numberLength == 12 || numberLength == 13) {
                await addCode(textNumber.substr(0, numberLength - 10));
                textNumber = textNumber.substr(numberLength - 10);
                pNumber.value += await addSeperator(textNumber)
            }
            else {
                await addCode(DEFAULT_CODE);
            }
        }
        catch{
            await addCode(DEFAULT_CODE);

        }
    }
}

async function addCode(code) {
    pNumber.value = "(+" + code + ") ";
}

async function addSeperator(number) {
    let outNumber = number.substr(0, 3);
    outNumber += "-" + number.substr(3);
    return outNumber;
}

String.prototype.splice = function (idx, rem, str) {
    return this.slice(0, idx) + str + this.slice(idx + Math.abs(rem));
};