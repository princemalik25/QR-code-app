    const url = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";

    const btn = document.querySelector(".btn")

    btn.addEventListener("click", () => {
    return fetchUrl();
    })

    async function fetchUrl(){
        try{
        const input = document.querySelector("#input").value;
        const qrCodeUrl = url + encodeURIComponent(input);
        const response = await fetch(qrCodeUrl);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        const qrCodeContainer = document.getElementById('qrCodeContainer');
        qrCodeContainer.innerHTML = `<img src="${qrCodeUrl}" alt="QR Code">`;
        
        console.log(response);
        }
        catch(error) {
            console.log(error);
        }
    }
