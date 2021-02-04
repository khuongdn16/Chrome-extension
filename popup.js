// document.addEventListener('DOMContentLoaded', () => {
//   const submitButton = document.getElementById('button_submit');
//   alert(submitButton);
//   submitButton.addEventListener('click', sendData);
// });
// function sendData() {
//   const params = {
//     active: true,
//     currentWindow: true,
//   };
//   chrome.tabs.query(params, gotTabs);
//   alert('Sending data');

//   function gotTabs(tabs) {
//     const selected = document.getElementById('select_image');
//     const selectedImage = selected.options[selected.selectedIndex].value;
//     const message = {
//       txt: 'Hello',
//       selectedImage,
//     };
//     chrome.tabs.sendMessage(tabs[0].id, message, (response) => {
//       console.log('Success');
//     });
//   }
// }

// alert('is this working #00 -- page loaded');

document.addEventListener('DOMContentLoaded', () => {
  // alert('is this working #0 -- page loaded');
    document.querySelector('#button_submit').addEventListener ('click', () =>  {
      // alert('is this working #1');
      chrome.tabs.query({currentWindow : true, active : true}, (tabs) => {
        // alert('is this working #2');
        // chrome.tabs.create({"url": "http://www.e-try.com/black.htm"});
        // chrome.tabs.create({"url": "http://google.com"});

        // chrome.tabs.sendMessage(tabs[0].id, 'hi');
        
        // var css = "html, body, div, table { background-color: pink; }";
        // var insertingCSS = browser.tabs.insertCSS(tabs[0].id, {code: css});
        
        chrome.tabs.sendMessage(tabs[0].id, {"message": "open_new_tab"}, (response) => {
          alert('Success');
        });

        // chrome.tabs.insertCSS(tabs[0].id, 
        //   {code: `html, body, div, table {background: pink !important; color: purple !important;}`}
        // )
      });
    }, false);
});
