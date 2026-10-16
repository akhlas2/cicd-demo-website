const button = document.getElementById('test-button');
const message = document.getElementById('message');

button.addEventListener('click', () => {
  message.textContent = 'Super! JavaScript funktioniert ✅';
});
