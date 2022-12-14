const wrapper = document.querySelector(".wrapper"),
qrInput = wrapper.querySelector(".form input"),
generateBtn = wrapper.querySelector(".form button"),
downloadBtn = wrapper.querySelector(".form #down"),
qrImg = wrapper.querySelector(".qr-code img"),
aHref = wrapper.querySelector(".form a");
let preValue;

generateBtn.addEventListener("click", () => {
    let qrValue = qrInput.value.trim();
    if(!qrValue || preValue === qrValue) return;
    preValue = qrValue;
    generateBtn.innerText = "Generating QR Code...";
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&format=svg&data=hahahaha${qrValue}`;
    aHref.href = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&format=svg&data=hahahaha${qrValue}&download=1`;
    qrImg.addEventListener("load", () => {
        wrapper.classList.add("active");
        generateBtn.innerText = "Generate QR Code";
    });
});

qrInput.addEventListener("keyup", () => {
    if(!qrInput.value.trim()) {
        wrapper.classList.remove("active");
        preValue = "";
    }
});


// https://api.qrserver.com/v1/create-qr-code/?size=200x200&format=svg&data=hahahaha