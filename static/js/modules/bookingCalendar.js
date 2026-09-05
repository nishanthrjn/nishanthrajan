const WEEKDAY_LABELS = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

/*
 * Optional:
 * Days of the CURRENT month that you want recruiters to be able to request.
 *
 * If you want every future weekday to be selectable automatically,
 * you don't need this array. The implementation below does that.
 */

function requestBookingDay(date, cell) {
  const message = document.getElementById('contactMessage');

  const formattedDate = date.toLocaleDateString('en-GB', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  if (message) {
    message.value = `I'd like to schedule a call on ${formattedDate}.`;
    message.focus();
  }

  const form = document.getElementById('contactForm');

  (form || cell).scrollIntoView({
    behavior: 'smooth',
    block: 'center',
  });
}

export function initBookingCalendar() {
  const grid = document.getElementById('calGrid');
  const header = document.getElementById('calHead');

  if (!grid) return;

  // Clear previous calendar in case this function runs more than once.
  grid.innerHTML = '';

  const now = new Date();

  const year = now.getFullYear();
  const month = now.getMonth();

  // Example: "September 2026"
  if (header) {
    header.textContent = new Intl.DateTimeFormat('en-US', {
      month: 'long',
      year: 'numeric',
    }).format(now);
  }

  // First weekday of current month.
  const firstDayOffset = new Date(year, month, 1).getDay();

  // Number of days in current month.
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const today = now.getDate();

  // Weekday headings.
  WEEKDAY_LABELS.forEach(label => {
    const cell = document.createElement('span');
    cell.textContent = label;
    grid.appendChild(cell);
  });

  // Empty cells before day 1.
  for (let i = 0; i < firstDayOffset; i++) {
    grid.appendChild(document.createElement('div'));
  }

  // Calendar days.
  for (let day = 1; day <= daysInMonth; day++) {
    const cell = document.createElement('div');

    const date = new Date(year, month, day);

    const dayOfWeek = date.getDay();

    const isToday = day === today;

    const isPast = date < new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate()
    );

    const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;

    // Automatically allow future weekdays.
    const isAvailable = !isPast && !isWeekend;

    cell.className =
      'cal-day' +
      (isAvailable ? ' avail' : '') +
      (isToday ? ' today' : '');

    cell.textContent = day;

    if (isAvailable) {
      cell.title = `Request ${date.toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      })}`;

      cell.addEventListener('click', () => {
        requestBookingDay(date, cell);
      });
    }

    grid.appendChild(cell);
  }
}