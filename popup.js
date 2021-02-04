document.getELementById('submit').addEventListener('click', () => {
  const images = document.querySelectorAll('img');
  images.forEach((el) => {
    el.remove();
  });
});
