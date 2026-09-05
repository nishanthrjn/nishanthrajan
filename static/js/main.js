import { toggleExpand } from './modules/disclosure.js';
import { toggleSidePanel, switchSideTab } from './modules/sidePanel.js';
import { openModal, closeModal, closeModalOutside, initModalKeyboardDismiss } from './modules/modal.js';
import { switchTab } from './modules/projectTabs.js';
import { askSuggested, sendMsg, initChatInputs } from './modules/chat.js';
import { initRadarChart } from './modules/radarChart.js';
import { initBookingCalendar } from './modules/bookingCalendar.js';
import { initScrollReveal } from './modules/scrollReveal.js';
import { handleForm } from './modules/contactForm.js';
import { renderProfile } from './modules/renderProfile.js';
import { renderProjects } from './modules/renderProjects.js';
import { CONTACT, PROFILE, TIMELINE, SKILLS } from './data/content.js';
import { PROJECTS } from './data/projects.js';

// portfolio.html still wires these up via inline `onclick`/`onsubmit` attributes,
// so they need to be reachable on the global object.
Object.assign(window, {
  toggleExpand,
  toggleSidePanel,
  switchSideTab,
  openModal,
  closeModal,
  closeModalOutside,
  switchTab,
  askSuggested,
  sendMsg,
  handleForm,
});

renderProfile(CONTACT, PROFILE, TIMELINE, SKILLS);
renderProjects(PROJECTS);

initModalKeyboardDismiss();
initChatInputs();
initRadarChart(SKILLS.radar);
initBookingCalendar();
initScrollReveal();
