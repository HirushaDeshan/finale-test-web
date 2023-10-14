const table_data = document.getElementById('table_data');
fetch("https://script.google.com/macros/s/AKfycbw8We-NzOAo1Ai_BJkg4QiajNblAnIuO9h7fVp6QDh59-WFj2Skuoj2wje0qCM6Sh3U/exec?action=xyz", {
    method: "GET"
}).then(res => res.json()).then(last4Records => {
  last4Records.myalldate.forEach((data, index) => {

                  let Name = data[0];
                  let Email = data[1];
                  let Phone = data[2];
                  let Address = data[3];
                  let Date = data[4];

                  table_data.innerHTML += `
                  <tr>
                      <td>${Name}</td>
                      <td>${Email}</td>
                      <td>${Phone}</td>
                      <td>${Address}</td>
                      <td>${Date}</td>
                  </tr>`;
                  let successMessag = document.querySelector("#successMessag");
                  successMessag.style.display = "block";

              });
          });
