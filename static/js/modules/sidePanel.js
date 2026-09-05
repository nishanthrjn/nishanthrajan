export function toggleSidePanel(force) {
  const panel = document.getElementById('sidePanel');
  const open = typeof force === 'boolean' ? force : !panel.classList.contains('open');
  panel.classList.toggle('open', open);
  document.getElementById('sideFab').classList.toggle('is-open', open);
}

export function switchSideTab(tab, event) {
  document.querySelectorAll('.side-tab-btn').forEach(btn => btn.classList.remove('active'));
  document.querySelectorAll('.side-tab-content').forEach(content => content.classList.remove('active'));
  event.currentTarget.classList.add('active');
  document.getElementById('side-' + tab).classList.add('active');
}
