import { PROJECTS } from '../data/projects.js';

export function openModal(id) {
  const project = PROJECTS[id];
  if (!project) return;

  const iconWrap = document.getElementById('mIconWrap');
  iconWrap.style.background = project.bg;
  iconWrap.style.color = project.color;

  document.getElementById('mIcon').innerHTML = `<use href="#${project.icon}"/>`;
  document.getElementById('mTitle').textContent = project.title;
  document.getElementById('mSub').textContent = project.sub;
  document.getElementById('mBadge').innerHTML = project.badge;
  document.getElementById('mBody').innerHTML = project.body;
  document.getElementById('modalOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

export function closeModal() {
  document.getElementById('modalOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

export function closeModalOutside(event) {
  if (event.target === document.getElementById('modalOverlay')) closeModal();
}

export function initModalKeyboardDismiss() {
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') closeModal();
  });
}
