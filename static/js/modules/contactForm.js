export function handleForm(event) {
  event.preventDefault();
  const button = event.target.querySelector('button');
  button.innerHTML = '✓ SENT';
  button.style.background = '#00FF88';
  button.style.color = '#000';
  setTimeout(() => {
    button.innerHTML = '<svg class="ic" style="width:14px;height:14px"><use href="#i-send"/></svg>Send message';
    button.style.background = '';
    button.style.color = '';
  }, 3000);
}
