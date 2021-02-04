document.addEventListener('DOMContentLoaded', () => {
  const submitButton = document.getElementById('button_submit');
  submitButton.addEventListener('click', sendData);
});
function sendData() {
  const params = {
    active: true,
    currentWindow: true,
  };
  chrome.tabs.query(params, gotTabs);

  function gotTabs(tabs) {
    const selected = document.getElementById('select_image');
    const selectedImage = selected.options[selected.selectedIndex].value;
    const message = {
      txt: 'Hello',
      selectedImage,
    };
    chrome.tabs.sendMessage(tabs[0].id, message, (response) => {
      console.log('Success');
    });
  }
}
