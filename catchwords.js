document.addEventListener("DOMContentLoaded", function() {
    // Seleziona tutti i paragrafi all'interno dell'elemento con id "content"
    var paragrafi = document.querySelectorAll("#content p");
  
    // Crea un oggetto per memorizzare le parole chiave divise per classe
    var parolePerClasse = {};
  
    // Itera sui paragrafi
    paragrafi.forEach(function(paragrafo) {
      // Seleziona tutti i tag span all'interno del paragrafo corrente
      var spans = paragrafo.querySelectorAll("span");
  
      // Itera sui tag span e aggiungi le parole chiave all'oggetto
      spans.forEach(function(span) {
        var classe = span.className;
        var parola = span.textContent;
  
        // Se la classe non esiste nell'oggetto, creala come un array vuoto
        if (!parolePerClasse[classe]) {
          parolePerClasse[classe] = [];
        }
  
        // Aggiungi la parola chiave all'array corrispondente alla classe
        parolePerClasse[classe].push(parola);
      });
    });
  
    // Seleziona l'elemento con id "collezione"
    var collezioneElement = document.getElementById("collezione");
  
    // Itera sull'oggetto e crea un elenco per ogni classe
    for (var classe in parolePerClasse) {
      if (parolePerClasse.hasOwnProperty(classe)) {
        // Crea un elenco
        var elenco = document.createElement("ul");
  
        // Aggiungi ogni parola chiave come elemento della lista
        parolePerClasse[classe].forEach(function(parola) {
          var elementoLista = document.createElement("li");
          elementoLista.textContent = parola;
          elenco.appendChild(elementoLista);
        });
  
        // Aggiungi l'elenco alla sezione "collezione"
        collezioneElement.appendChild(elenco);
      }
    }
  });
  