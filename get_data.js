const table_data = document.getElementById('table_data');
fetch("https://script.google.com/macros/s/AKfycbw8We-NzOAo1Ai_BJkg4QiajNblAnIuO9h7fVp6QDh59-WFj2Skuoj2wje0qCM6Sh3U/exec?action=abcd", 
{
    method: "GET"
}).then(res => res.json()).then(datas => {
    datas.myalldate.forEach((data, index) => {
        // Skip the first row (index 0)
        if (index !== 0) {
            let Name = data[0];
            let Email = data[1];
            let Phone = data[2];
            let Address = data[3];
            let Date = data[4];
            let Link = `<a href="add_school.html?name=${Name}"><button> Add </button></a>`; // Add a link at the end of the row

            table_data.innerHTML += `
            <tr>
                <td>${Name}</td>
                <td>${Email}</td>
                <td>${Phone}</td>
                <td>${Address}</td>
                <td>${Date}</td>
                <td>${Link}</td>
            </tr>`;
            let successMessage = document.querySelector("#successMessage");
            successMessage.style.display = "block";
        }
    });
}
);
