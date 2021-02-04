console.log('content.js');
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    const pikachuUrl = 'https://giantbomb1.cbsistatic.com/uploads/square_medium/9/95666/1881642-pikachu_pokemon_kanto_new_official.png';
    console.log('content.js receive a message >>> ', request.message);
    // console.log('Receive message from background');
    if( request.message === "replace-photos") {
      const images = document.querySelectorAll('img');
      console.log(images.length);
      // images.forEach(img => img.parentElement.removeChild(img));
      // images.forEach(img => img.src = pikachuUrl);
      
      chrome.runtime.sendMessage({"message": "get-data"});

    }
    if (request.message === 'got-data') {
      // array of snakes is stored in request.result
      const snakes = request.result;
      const images = document.querySelectorAll('img');
      images.forEach(img => {
        console.log(img.alt);
        console.log(img.alt.includes('snake'));

        // check if img alt includes anything from snakes
        // loop through snakes array?? if img.alt === snakes[i], change img src to pikachu
        for (let i = 0; i < snakes.length; i++) {
          // console.log('SNAKESSSS', snakes[i], 'img alt is', img.alt);
          if (img.alt.includes(snakes[i]) || img.alt.includes('snake')) {
            img.src = pikachuUrl;
          }
        }
      })
    }
  } 
);

















  //   if( request.message === "got-data" ) {
  //     console.log('Receiving search results >>> ', request);
  //     const snakeWords = request.result;
  //     const images = document.querySelectorAll('img');
  //     console.log(images.length);
  //     images.forEach(img => {
  //       // console.log(img.alt.toString());
  //       // console.log(img.alt.toString().includes('snake'));        
  //       if (img.alt.toString().includes('snake')){
  //         img.src = pikachuUrl;
  //       }
  //     });
  //   }
  // }