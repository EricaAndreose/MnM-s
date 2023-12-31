// document.addEventListener('DOMContentLoaded', function() {
//   const loadButtons = document.querySelectorAll('.jsart');
//   const contentColumn = document.getElementById('externalContentColumn');

//   loadButtons.forEach(function(button) {
//       button.addEventListener('click', function() {
//           const articlePath = this.getAttribute('data-article');
          
//           // Fetch the content from the specified articlePath
//           fetch(articlePath)
//               .then(response => response.text())
//               .then(content => {
//                   // Insert the fetched content into the contentColumn
//                   contentColumn.innerHTML = content;
//               })
//               .catch(error => {
//                   console.error('Error loading external content:', error);
//               });
//       });
//   });
// });

document.addEventListener('DOMContentLoaded', function() {
    const loadButtons = document.querySelectorAll('.jsart');
    const contentColumn = document.getElementById('externalContentColumn');
    const tabContent = document.querySelector('.tab-content');
  
    loadButtons.forEach(function(button) {
      button.addEventListener('click', function() {
        const articlePath = this.getAttribute('data-article');
  
        // Fetch the content from the specified articlePath
        fetch(articlePath)
          .then(response => response.text())
          .then(content => {
            // Insert the fetched content into the contentColumn
            contentColumn.innerHTML = content;
  
            // Load and display metadata for the current article
            loadMetadata(articlePath);
          })
          .catch(error => {
            console.error('Error loading external content:', error);
          });
      });
    });
  
    // Funzione per caricare e visualizzare i metadati
    function loadMetadata(articlePath) {
      // Estrarre il nome del file JSON dai dati dell'articolo
      const jsonFileName = articlePath.replace(".html", ".json");
  
      // Usa AJAX per caricare i metadati dal file JSON
      fetch(jsonFileName)
        .then(response => response.json())
        .then(metadata => {
          // Visualizza i metadati nelle rispettive tab-pane
          displayMetadata(metadata);
        })
        .catch(error => {
          console.error('Error loading metadata:', error);
        });
    }
  
    // Funzione per visualizzare i metadati nelle tab-pane
    function displayMetadata(metadata) {
      // Loop attraverso le chiavi dei metadati e visualizzale nelle tab-pane corrispondenti
      for (const category in metadata) {
        if (metadata.hasOwnProperty(category)) {
          const tabPane = document.getElementById(category);
          if (tabPane) {
            tabPane.innerHTML = createListFromMetadata(metadata[category]);
          }
        }
      }
    }
  
    // Funzione di utilità per creare una lista HTML da un oggetto di metadati
    function createListFromMetadata(metadata) {
      let listHtml = '<ul>';
      for (const key in metadata) {
        if (metadata.hasOwnProperty(key)) {
          const link = metadata[key]; // Assume che i link siano forniti nei dati
          listHtml += `<li><a href="${link}">${key}</a></li>`;
        }
      }
      listHtml += '</ul>';
      return listHtml;
    }
  });
  