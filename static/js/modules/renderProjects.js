function renderTags(tags) {
  return tags.map(t => `<span class="tag${t.variant ? ' ' + t.variant : ''}">${t.text}</span>`).join('');
}

function iconBadge(className, project) {
  return `<div class="${className}" style="background:${project.bg};color:${project.color}"><svg class="ic"><use href="#${project.icon}"/></svg></div>`;
}

function renderFeatCard(project) {
  return `<div class="feat-card" onclick="openModal('${project.id}')">
    ${iconBadge('ibadge sm', project)}
    <div class="feat-title">${project.title}</div>
    <div class="feat-desc">${project.featDesc}</div>
    <div class="feat-link">DETAILS →</div>
  </div>`;
}

function renderProjCard(project, num) {
  const numLabel = String(num).padStart(2, '0') + ' / ' + project.numLabel;
  return `<div class="proj-card" onclick="openModal('${project.id}')">
    <div class="proj-card-num">${numLabel}</div>
    ${iconBadge('ibadge', project)}
    <div class="proj-card-arrow"><svg class="ic"><use href="#i-arrow-right"/></svg></div>
    <div class="proj-card-title">${project.title}</div>
    <div class="proj-card-desc">${project.cardDesc}</div>
    <div class="tag-row">${renderTags(project.tags)}</div>
  </div>`;
}

function renderHistCard(project) {
  return `<div class="hist-card" onclick="openModal('${project.id}')">
    ${iconBadge('ibadge sm', project)}
    <div class="hist-name">${project.historicalName || project.title}</div>
  </div>`;
}

export function renderProjects(projects) {
  const enabled = projects.filter(p => p.enabled);

  const featGrid = document.getElementById('featGrid');
  if (featGrid) {
    featGrid.innerHTML = enabled.filter(p => p.featured).map(renderFeatCard).join('');
  }

  ['ai', 'net', 'cad'].forEach(category => {
    const grid = document.getElementById('projGrid-' + category);
    if (!grid) return;
    const inCategory = enabled.filter(p => p.category === category);
    grid.innerHTML = inCategory.map((p, i) => renderProjCard(p, i + 1)).join('');
  });

  const histGrid = document.getElementById('histGrid');
  if (histGrid) {
    const historical = enabled.filter(p => p.historical)
      .sort((a, b) => (a.historicalOrder ?? 0) - (b.historicalOrder ?? 0));
    histGrid.innerHTML = historical.map(renderHistCard).join('');
  }

  const toggleLabel = document.getElementById('projectsToggleLabel');
  if (toggleLabel) {
    toggleLabel.textContent = `View all ${enabled.length} projects`;
  }
}
