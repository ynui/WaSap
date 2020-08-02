function start() {
    let pNumber = document.getElementById("pNumber").value;
    let message = document.getElementById("message").value;
    pNumber = pNumber.replace(/\D/g,'');
    let URL = "https://wa.me/" + pNumber + "?text=" + encodeURI(message);
    window.open(URL);
}