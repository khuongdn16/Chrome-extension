
document.addEventListener('DOMContentLoaded', () => {
  // alert('is this working #0 -- page loaded');
    document.querySelector('#button_submit').addEventListener ('click', () =>  {
      // alert('is this working #1');
      chrome.tabs.query({currentWindow : true, active : true}, (tabs) => {
        console.log('is this working #2');
        // chrome.tabs.create({"url": "http://www.e-try.com/black.htm"});

        // Send message to content.js to manipulate DOM
        const user_input = document.getElementById('user_input').value;
        chrome.tabs.sendMessage(tabs[0].id, {message: "popup_button_clicked", word : user_input}, (response) => {
          console.log('Success');
        });

        // chrome.tabs.insertCSS(tabs[0].id, 
        //   {code: `html, body, div, table {background: pink !important; color: purple !important;}`}
        // )
      });
    }, false);
});
