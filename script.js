let imageBox = document.getElementById("imageBox");
let qrImage = document.getElementById("qrImage");
let inputText = document.getElementById("inputText");


function generateQR() {
    if (inputText.value.length > 0) {
    qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + inputText.value;
    imageBox.classList.add("show-img"); 
    }
    else {
        inputText.classList.add("error");
        setTimeout(()=> {
            inputText.classList.remove("error");
            alert("Please enter text or URL");
        },500);
    }
}

function downloadQR() {
    if (qrImage.src.includes("https://api.qrserver.com")) {
        // Create a temporary link element
        const link = document.createElement("a");
        link.href = qrImage.src; // Set the QR code URL as the link's href
        link.download = "qr-code.png"; // Set a default filename for the download

        // Trigger the click event to start the download
        link.click();

    } else {
        alert("Please generate a QR code");
    }
}