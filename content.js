// alert('content.js');
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    const pikachuUrl = 'https://giantbomb1.cbsistatic.com/uploads/square_medium/9/95666/1881642-pikachu_pokemon_kanto_new_official.png';

    // console.log('Receive message from background');
    if( request.message === "clicked_browser_action" ) {
      const images = document.querySelectorAll('img');
      // console.log(images.length);
      // images.forEach(img => img.parentElement.removeChild(img));
      // images.forEach(img => img.src = pikachuUrl);
      
      chrome.runtime.sendMessage({"message": "get-data"});

    }

    if( request.message === "got-data" ) {
      console.log('Receiving search results >>> ', request);
      const snakeWords = request.result;
      const images = document.querySelectorAll('img');
      console.log(images.length);
      images.forEach(img => {
        // console.log(img.alt.toString());
        // console.log(img.alt.toString().includes('snake'));        
        if (img.alt.toString().includes('snake')){
          img.src = pikachuUrl;
        }
      });      
    }
  }
);