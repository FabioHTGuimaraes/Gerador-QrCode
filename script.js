// Função para gerar o QR code
function generateQRCode() {
    var inputText = document.getElementById("text-input").value; 
    var qrcodeContainer = document.getElementById("qrcode-img"); 

    // Limpar o QR code anterior, se houver
    qrcodeContainer.innerHTML = "";

    // Gerar o QR code
    var qrcode = new QRCode(qrcodeContainer, {
        text: inputText,
        width: 200,  
        height: 200, 
        colorDark: "#000000",  
        colorLight: "#ffffff", 
        correctLevel: QRCode.CorrectLevel.H 
    });
}

// Função para fazer o download do QR code
function downloadQRCode() {
    var qrcodeContainer = document.getElementById("qrcode-img").querySelector("img"); 
    
    if (qrcodeContainer) {
        var dataURL = qrcodeContainer.src; 
        var a = document.createElement("a");
        a.href = dataURL;
        a.download = "qrcode.png"; 
        a.click();
    }
}