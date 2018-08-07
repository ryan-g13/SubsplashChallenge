const xhr = new XMLHttpRequest();
      xhr.open('GET', process.env.API_URL, true);
      xhr.send();

      xhr.addEventListener("readystatechange", processRequest, false);

      function processRequest(event) {
        if(xhr.readyState === 4 && xhr.status === 200) {
          let response = JSON.parse(xhr.responseText);
          console.log(response);
        }
      }
