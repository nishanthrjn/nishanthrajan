export function toggleExpand(btn, bodyId) {
  const body = document.getElementById(bodyId);
  const nowOpen = !body.classList.contains('open');
  body.classList.toggle('open', nowOpen);
  btn.classList.toggle('open', nowOpen);
}
