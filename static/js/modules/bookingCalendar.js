const WEEKDAY_LABELS = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
const FIRST_DAY_OFFSET = 2;
const DAYS_IN_MONTH = 30;
const TODAY = 3;
const AVAILABLE_DAYS = [4, 7, 8, 9, 10, 14, 15, 16, 17, 21, 22, 23, 24, 28, 29, 30];

function requestBookingDay(day, cell) {
  const message = document.getElementById('contactMessage');
  if (message) {
    message.value = `I'd like to schedule a call on July ${day}, 2026.`;
    message.focus();
  }
  const form = document.getElementById('contactForm');
  (form || cell).scrollIntoView({ behavior: 'smooth', block: 'center' });
}

export function initBookingCalendar() {
  const grid = document.getElementById('calGrid');
  if (!grid) return;

  WEEKDAY_LABELS.forEach(label => {
    const cell = document.createElement('span');
    cell.textContent = label;
    grid.appendChild(cell);
  });

  for (let i = 0; i < FIRST_DAY_OFFSET; i++) {
    grid.appendChild(document.createElement('div'));
  }

  for (let day = 1; day <= DAYS_IN_MONTH; day++) {
    const cell = document.createElement('div');
    const isAvailable = AVAILABLE_DAYS.includes(day);
    cell.className = 'cal-day' + (isAvailable ? ' avail' : '') + (day === TODAY ? ' today' : '');
    cell.textContent = day;
    if (isAvailable) {
      cell.title = `Request July ${day}, 2026`;
      cell.addEventListener('click', () => requestBookingDay(day, cell));
    }
    grid.appendChild(cell);
  }
}
