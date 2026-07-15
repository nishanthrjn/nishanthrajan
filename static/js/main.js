import { toggleExpand } from './modules/disclosure.js';
import { toggleSidePanel, switchSideTab } from './modules/sidePanel.js';
import { openModal, closeModal, closeModalOutside, initModalKeyboardDismiss } from './modules/modal.js';
import { switchTab } from './modules/projectTabs.js';
import { askSuggested, sendMsg, initChatInputs } from './modules/chat.js';
import { initRadarChart } from './modules/radarChart.js';
import { initBookingCalendar } from './modules/bookingCalendar.js';
import { initScrollReveal } from './modules/scrollReveal.js';
import { handleForm } from './modules/contactForm.js';

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

initModalKeyboardDismiss();
initChatInputs();
initRadarChart();
initBookingCalendar();
initScrollReveal();
