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

document.addEventListener('DOMContentLoaded', function () {
  const loadButtons = document.querySelectorAll('.jsart');
  const contentColumn = document.getElementById('externalContentColumn');

  // Variabili di stato per gestire le occorrenze successive
  let currentMetadataCategory = null;
  let currentMetadataId = null;
  let currentMetadataIndex = 0;

  loadButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      const articlePath = this.getAttribute('data-article');

      // Fetch the content from the specified articlePath
      fetch(articlePath)
        .then(response => response.text())
        .then(content => {
          // Insert the fetched content into the contentColumn
          contentColumn.innerHTML = content;

          // Load and display metadata for the current article
          loadMetadata(articlePath);

          // Use the globally accessible map variable
          addMarkers();
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
            tabPane.innerHTML = createListFromMetadata(metadata[category], category);
            // Aggiungi gestione dell'evento di clic per i link dei metadati
            tabPane.querySelectorAll('a').forEach(link => {
              link.addEventListener('click', handleMetadataLinkClick);
            });
          }
        }
      }
    }
  
    // Funzione di utilità per creare una lista HTML da un oggetto di metadati
    function createListFromMetadata(metadata, category) {
      let listHtml = '<ul>';
      for (const key in metadata[0]) {
        if (metadata[0].hasOwnProperty(key)) {
          const occurrences = metadata[0][key];
          const id = metadata[1][key];
    
          // Verifica se l'id è vuoto
          if (id !== '') {
            listHtml += `<li><a href="#${id}" data-category="${category}">${key}: ${occurrences}</a></li>`;
          } else {
            listHtml += `<li>${key}: ${occurrences}</li>`;
          }
        }
      }
      listHtml += '</ul>';
      return listHtml;
    }
  
    // Gestore di clic sui link dei metadati
    function handleMetadataLinkClick(event) {
        event.preventDefault();
    
        const category = event.target.getAttribute('data-category');
        const id = event.target.getAttribute('href').substring(1);
    
        // Rimuovi l'evidenziazione solo dai link dello stesso tipo di metadato
        document.querySelectorAll(`.${category} .active`).forEach(link => {
        link.classList.remove('active');
        });
    
        // Aggiungi la classe 'active' al link corrente
        event.target.classList.add('active');
    
        // Verifica se il link cliccato è lo stesso della precedente
        if (category === currentMetadataCategory && id === currentMetadataId) {
        // Se sì, passa alla successiva occorrenza
        currentMetadataIndex++;
        } else {
        // Se no, reimposta l'indice a 0 e salva i nuovi dati
        currentMetadataIndex = 0;
        currentMetadataCategory = category;
        currentMetadataId = id;
        }
    
        // Trova e posizionati nella corrispondente occorrenza nel testo
        scrollToElement(`#${id}`, currentMetadataIndex);
    }
    
    // Funzione di utilità per posizionarsi su un elemento con un determinato indice
    function scrollToElement(id, index) {
        const elements = document.querySelectorAll(`${id}`);
        if (elements.length > index) {
        // Rimuovi l'evidenziazione dagli elementi precedenti
        document.querySelectorAll('.highlight').forEach(el => {
            el.classList.remove('highlight');
        });
    
        // Aggiungi la classe 'highlight' all'elemento corrente
        elements[index].classList.add('highlight');
    
        // Scorrimento verso l'elemento
        elements[index].scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });
        } else {
        console.log(`Nessun elemento trovato con l'ID: ${id} all'indice ${index}`);
        }
    }
  
  });

