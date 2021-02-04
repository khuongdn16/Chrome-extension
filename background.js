// Called when the user clicks on the browser action.
// chrome.browserAction.onClicked.addListener(function(tab) {
//   // Send a message to the active tab
//   chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//     var activeTab = tabs[0];
//     chrome.tabs.sendMessage(activeTab.id, {message: "clicked_browser_action"});
//     console.log('Messaged sent');
//   });
// });

// Listen for message from popup.js and content.js
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    let results;
    let pokemonUrl = `https://pokeres.bastionbot.org/images/pokemon/${request.pokemonId}.png`;
    if( request.message === "get-data" ) {
       console.log('fetching data with keyword >>> ', request.word);
      fetch(`https://api.datamuse.com/words?rel_trg=${request.word}`)
      .then(res => res.json())
      // .then (data => console.log(data))
      .then(data => {
        console.log(data);
        const result = [];
        for (let i = 0; i < data.length; i++){
          if (data[i].score > 1400) result.push(data[i].word);
        } 
        return result;
      })
      .then (data => {
        console.log(data);
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
          var activeTab = tabs[0];
          chrome.tabs.sendMessage(activeTab.id, {
            message: "got-data", 
            result: data, 
            word : request.word,
            pokemonUrl : pokemonUrl});
        });        
      })
      .catch(err => console.log(err));
    }
    return true;
  }
);