// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
  // Send a message to the active tab
  // alert('icon clicked');
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    var activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, {message: "clicked_browser_action"});
    alert('Messaged sent');
  });
});

// This block is new!
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    // get the messasge from the request (an object)
    if (request.message === 'get-data') {
      // make fetch request to whatever url we are doing
      fetch("https://api.datamuse.com/words?rel_trg=snake")
      .then(data => data.json())
      .then(data => {
        // console.log(data);
        // loop through the arr of objs, get value at "word" key
        const output = [];
        for (let i = 0; i < data.length; i++) {
          if (data[i].score > 1450) {
            output.push(data[i].word);
          }
        }
        console.log(output);
        return output;
      })
      .then(data => {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
          const activeTab = tabs[0];
          chrome.tabs.sendMessage(activeTab.id, {message: "got-data", result: data});
        });  
      })
    }
  }
);






















// let results;
// if( request.message === "get-data" ) {
//   // chrome.tabs.create({"url": request.url});
//   fetch("https://api.datamuse.com/words?rel_trg=snake")
//   .then(res => res.json())
//   // .then (data => console.log(data))
//   .then(data => {
//     console.log(data);
//     const result = [];
//     for (let i = 0; i < data.length; i++){
//       if (data[i].score > 1400) result.push(data[i].word);
//     } 
//     return result;
//   })
//   .then (data => {
//     console.log(data);
//     chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//       var activeTab = tabs[0];
//       chrome.tabs.sendMessage(activeTab.id, {message: "got-data", result: data});
//     });        
//   })
//   .catch(err => console.log(err))
//   // alert('Got some data');
  
