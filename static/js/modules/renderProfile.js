function setText(id, text) {
  const el = document.getElementById(id);
  if (el) el.textContent = text;
}

function setHtml(id, html) {
  const el = document.getElementById(id);
  if (el) el.innerHTML = html;
}

function iconSvg(icon, className = 'ic') {
  return `<svg class="${className}"><use href="#${icon}"/></svg>`;
}

function renderNav(profile, contact) {
  setText('navName', profile.name);
  setText('navRole', profile.role);

  const photo = document.getElementById('navPhoto');
  if (photo) photo.src = profile.photo;

  setHtml('navStrip', `
    <a class="nav-icon" href="${contact.phoneHref}" title="Phone">${iconSvg('i-phone')}</a>
    <a class="nav-icon" href="mailto:${contact.email}" title="Email">${iconSvg('i-mail')}</a>
    <a class="nav-icon" href="${contact.linkedinUrl}" target="_blank" title="LinkedIn">${iconSvg('i-linkedin')}</a>
    <a class="nav-icon" href="${contact.githubUrl}" target="_blank" title="GitHub">${iconSvg('i-github')}</a>
    <a class="nav-icon" href="#contact" title="${contact.location}">${iconSvg('i-location')}</a>
  `);
}

function renderHero(profile, contact) {
  setText('heroStatusText', profile.heroStatus);
  setText('heroH1', profile.heroHeadline);
  setHtml('heroSub', profile.heroSub);

  setHtml('heroPills', profile.heroPills
    .map(p => `<span class="pill${p.variant ? ' ' + p.variant : ''}">${p.text}</span>`)
    .join(''));

  setHtml('heroContacts', `
    <a class="hc-item" href="mailto:${contact.email}">${iconSvg('i-mail')}${contact.email}</a>
    <a class="hc-item" href="${contact.linkedinUrl}" target="_blank">${iconSvg('i-linkedin')}LinkedIn</a>
    <a class="hc-item" href="${contact.githubUrl}" target="_blank">${iconSvg('i-github')}GitHub</a>
  `);

  const heroPhoto = document.getElementById('heroPhoto');
  if (heroPhoto) heroPhoto.src = profile.photo;

  setHtml('heroTechNodes', profile.techNodes
    .map((node, i) => `<div class="t-node tn${i + 1}">${iconSvg(node.icon)}${node.label}</div>`)
    .join(''));
}

function renderAbout(profile, timeline) {
  const aboutPhoto = document.getElementById('aboutPhoto');
  if (aboutPhoto) aboutPhoto.src = profile.photo;

  setText('aboutBio', profile.aboutBio);

  setHtml('eduRow', profile.education.map(edu => `
    <div class="edu-row">
      <div class="edu-icon">${iconSvg(edu.icon)}</div>
      <div><div class="edu-name">${edu.name}</div><div class="edu-sub">${edu.sub}</div></div>
    </div>
  `).join(''));

  setHtml('langRow', profile.languages.map(lang => `
    <div class="lang-item">
      <div class="lang-code" style="background:${lang.bg};color:${lang.color}">${lang.code}</div>
      <div><div class="lang-name">${lang.name}</div><div class="lang-level">${lang.level}</div></div>
    </div>
  `).join(''));

  setHtml('timeline', timeline.map((entry, i) => `
    <div class="t-row">
      <div class="t-dotcol"><div class="t-mark"></div>${i < timeline.length - 1 ? '<div class="t-line"></div>' : ''}</div>
      <div><div class="t-co">${entry.company}</div><div class="t-period">${entry.period}</div><div class="t-role">${entry.role}</div><div class="t-desc">${entry.desc}</div></div>
    </div>
  `).join(''));

  setText('aboutPhil', profile.philosophy);
}

function renderSkillCard(card) {
  let body;
  if (card.kind === 'list') {
    body = `<ul class="skill-list">${card.items.map(item => `<li>${item}</li>`).join('')}</ul>`;
  } else if (card.kind === 'tags') {
    body = `<div class="tag-row">${card.tags.map(t => `<span class="tag${t.variant ? ' ' + t.variant : ''}">${t.text}</span>`).join('')}</div>`;
  } else {
    const style = card.cols ? ` style="grid-template-columns:repeat(${card.cols},1fr)"` : '';
    body = `<div class="icon-grid"${style}>${card.items.map(item => `
      <div class="icon-cell"><div class="icon-cell-badge" style="background:${item.bg};color:${item.color}">${iconSvg(item.icon)}</div>${item.label}</div>
    `).join('')}</div>`;
  }
  return `<div class="skill-card${card.wide ? ' wide' : ''}"><div class="skill-card-title">${card.title}</div>${body}</div>`;
}

function renderSkills(skills) {
  setHtml('spectrumGrid', skills.spectrum.map(s => `
    <div class="spectrum-card"><div class="spectrum-icon-badge" style="background:${s.bg};color:${s.color}">${iconSvg(s.icon)}</div><div class="spectrum-label">${s.label}</div></div>
  `).join(''));

  setHtml('skillsGrid', skills.cards.map(renderSkillCard).join(''));

  setHtml('radarLegend', skills.radar.legend.map(l => `
    <div class="rl"><div class="rl-dot" style="background:${l.color}"></div>${l.label}</div>
  `).join(''));
}

function renderContact(contact) {
  setHtml('contactInfoList', `
    <div class="cdetail"><div class="cicon">${iconSvg('i-mail')}</div><div><div class="clabel">Email</div><div class="cval">${contact.email}</div></div></div>
    <div class="cdetail"><div class="cicon">${iconSvg('i-phone')}</div><div><div class="clabel">Phone</div><div class="cval">${contact.phone}</div></div></div>
    <div class="cdetail"><div class="cicon">${iconSvg('i-location')}</div><div><div class="clabel">Location</div><div class="cval">${contact.locationDetail}</div></div></div>
  `);

  setHtml('socialList', `
    <a href="${contact.linkedinUrl}" target="_blank">${iconSvg('i-linkedin')}${contact.linkedinHandle}</a>
    <a href="${contact.githubUrl}" target="_blank">${iconSvg('i-github')}${contact.githubHandle}</a>
    <a href="${contact.cvUrl}" download>${iconSvg('i-download')}Download CV</a>
  `);

  setHtml('localRow', `
    <div class="local-card"><div class="ibadge sm" style="background:rgba(37,99,235,0.14);color:#60a5fa">${iconSvg('i-location')}</div><div><div class="local-name">${contact.location}</div><div class="local-sub">Based here · AI Engineer</div></div></div>
    <div class="local-card"><div class="ibadge sm" style="background:rgba(0,255,136,0.12);color:var(--green)">${iconSvg('i-card')}</div><div><div class="local-name">EU Blue Card</div><div class="local-sub">Holder · Available immediately</div></div></div>
  `);

  setHtml('sideContactList', `
    <div class="side-cdetail"><div class="side-cicon">${iconSvg('i-mail')}</div><div><div class="side-clabel">Email</div><div class="side-cval">${contact.email}</div></div></div>
    <div class="side-cdetail"><div class="side-cicon">${iconSvg('i-phone')}</div><div><div class="side-clabel">Phone</div><div class="side-cval">${contact.phone}</div></div></div>
    <div class="side-cdetail"><div class="side-cicon">${iconSvg('i-location')}</div><div><div class="side-clabel">Location</div><div class="side-cval">${contact.locationDetail}</div></div></div>
  `);

  setHtml('sideQuickRow', `
    <a class="side-quick-btn" href="mailto:${contact.email}">${iconSvg('i-mail')}Email</a>
    <a class="side-quick-btn" href="${contact.linkedinUrl}" target="_blank">${iconSvg('i-linkedin')}LinkedIn</a>
    <a class="side-quick-btn" href="${contact.githubUrl}" target="_blank">${iconSvg('i-github')}GitHub</a>
  `);
}

function renderFooter(profile, contact) {
  setText('footerCopyright', profile.footerCopyright);
  setHtml('footerLinks', `
    <a href="${contact.githubUrl}" target="_blank">GitHub</a>
    <a href="${contact.linkedinUrl}" target="_blank">LinkedIn</a>
    <a href="${contact.cvUrl}" download>Download CV</a>
    <a href="#hero">Back to top ↑</a>
  `);
}

export function renderProfile(contact, profile, timeline, skills) {
  renderNav(profile, contact);
  renderHero(profile, contact);
  renderAbout(profile, timeline);
  renderSkills(skills);
  renderContact(contact);
  renderFooter(profile, contact);
}
