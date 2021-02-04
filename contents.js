chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.txt == 'Hello') {
    replace(message.selectedImage, sender, sendResponse);
  }
});
function selectAndReplace(message, sender, sendResponse) {
  const imgs = document.querySelectorAll('img');

  switch (message) {
    case 'image1':
      for (imgElt of imgs) {
        const file = 'images/kitten.jpg';
        const url = chrome.extension.getURL(file);
        imgElt.src = url;
      }
      break;
    case 'image2':
      for (imgElt of imgs) {
        const file = 'images/puppy.jpg';
        const url = chrome.extension.getURL(file);
        imgElt.src = url;
      }
      break;

    case 'image3':

      for (imgElt of imgs) {
        const file = 'images/panda.jpg';
        const url = chrome.extension.getURL(file);
        imgElt.src = url;
      }
      break;
    case 'image4':
      for (imgElt of imgs) {
        const file = 'images/deer.jpg';
        const url = chrome.extension.getURL(file);
        imgElt.src = url;
      }
      break;
    case 'image5':
      for (imgElt of imgs) {
        const file = 'images/rabbit.jpg';
        const url = chrome.extension.getURL(file);
        imgElt.src = url;
      }
      break;
  }
}
