export function switchTab(tab, event) {
  document.querySelectorAll('.proj-tab').forEach(btn => btn.classList.remove('active'));
  document.querySelectorAll('.proj-section').forEach(section => section.classList.remove('active'));
  event.target.classList.add('active');
  document.getElementById('tab-' + tab).classList.add('active');
}
