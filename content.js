console.log('content.js');
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    const pokemonId = getRandomInt(150);
    console.log('content.js receive message >>> ', request);

    // console.log('Receive message from background');
    if( request.message === "popup_button_clicked" ) {
      const images = document.querySelectorAll('img');
      
      // Send message to background.js to fetch API data
      chrome.runtime.sendMessage({
        message: "get-data",
        word : request.word,
        pokemonId : pokemonId
      });

    }

    // listen for message from background.js with fetch data
    if( request.message === "got-data" ) {
      // console.log('Receiving search results >>> ', request);
      const pokemonUrl = request.pokemonUrl;
      const images = document.querySelectorAll('img');
      // const anchors = document.querySelectorAll('a');

      // replace images with keyword
      if (request.word !== ''){
        images.forEach(img => {
          if (img.alt.toString().toLowerCase().includes(request.word)){
            console.log(img.alt);
            // img.src = pokemonUrl;
            const newImage = document.createElement('img');
            newImage.src = pokemonUrl;
            // let parent = img.parentNode;
            img.parentNode.prepend(newImage); 
            img.parentNode.removeChild(img);
          }
        });
      } else{ 
        // if word is empty, replace all images
        // images.forEach(img => img.src = pikachuUrl);
        images.forEach(img => img.src = pokemonUrl);
      }
    }
    return true;
  }
);

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}