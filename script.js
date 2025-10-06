const colorPicker = document.getElementById('colorPicker');
const colorCode = document.getElementById('colorCode');
const randomColorBtn = document.getElementById('randomColorBtn');

colorPicker.addEventListener('input', () => {
  document.body.style.backgroundColor = colorPicker.value;
  colorCode.textContent = colorPicker.value;
});

randomColorBtn.addEventListener('click', () => {
  const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
  document.body.style.backgroundColor = randomColor;
  colorCode.textContent = randomColor;
  colorPicker.value = randomColor;
});
