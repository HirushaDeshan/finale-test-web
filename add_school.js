// JavaScript code to retrieve and display the Name value
const urlParams = new URLSearchParams(window.location.search);
const name = urlParams.get("name");

if (name) {
    // Display the Name value in the "nameTopic" element
    const nameTopicElement = document.getElementById("nameTopic");
    nameTopicElement.textContent = `hi ${name}...! welcome to our add school page`;
}

let form = document.querySelector("form");
        let successMessage = document.querySelector("#successMessageN");
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            document.querySelector("#subN").value = "Submitting..";
            let data = new FormData(form);
            const url = 'https://script.google.com/macros/s/AKfycbzu1Y4wNcai6PDX65TGFlhRMWpTkWvatd3C6Mzyn5jeI8qHaMOpyxSD93cb-KWuMS4H/exec?action=school&name=' + encodeURIComponent(name);
            fetch(url, {
                    method: "POST",
                    body: data
                })
                .then(() => {
                    successMessage.style.display = "block";
                    form.reset();
                    document.querySelector("#subN").value = "Submit";
                })
                .catch(error => {
                    console.error('Error:', error);
                });
        })
        