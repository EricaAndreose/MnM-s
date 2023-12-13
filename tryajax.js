document.addEventListener('DOMContentLoaded', function() {
  const loadButtons = document.querySelectorAll('.jsart');
  const contentColumn = document.getElementById('externalContentColumn');

  loadButtons.forEach(function(button) {
      button.addEventListener('click', function() {
          const articlePath = this.getAttribute('data-article');
          
          // Fetch the content from the specified articlePath
          fetch(articlePath)
              .then(response => response.text())
              .then(content => {
                  // Insert the fetched content into the contentColumn
                  contentColumn.innerHTML = content;
              })
              .catch(error => {
                  console.error('Error loading external content:', error);
              });
      });
  });
});