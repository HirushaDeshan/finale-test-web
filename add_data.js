let form = document.querySelector("form");
        let successMessage = document.querySelector("#successMessage");
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            document.querySelector("#sub").value = "Submitting..";
            let data = new FormData(form);
            fetch('https://script.google.com/macros/s/AKfycbw8We-NzOAo1Ai_BJkg4QiajNblAnIuO9h7fVp6QDh59-WFj2Skuoj2wje0qCM6Sh3U/exec?action=full', {
                    method: "POST",
                    body: data
                })
                .then(() => {
                    successMessage.style.display = "block";
                    form.reset();
                    document.querySelector("#sub").value = "Submit";
                })
                .catch(error => {
                    console.error('Error:', error);
                });
        })
        