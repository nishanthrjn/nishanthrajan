const FONT_SPEC = '700 13px Inter, sans-serif';
const PLOT_RADIUS = 118;
const LABEL_GAP = 20;
const PADDING = 14;

function polarPoint(cx, cy, labelCount, index, value) {
  const angle = (2 * Math.PI / labelCount) * index - Math.PI / 2;
  const distance = PLOT_RADIUS * (value / 100);
  return [cx + distance * Math.cos(angle), cy + distance * Math.sin(angle)];
}

function measureCanvasHalfSize(labels) {
  const measureCtx = document.createElement('canvas').getContext('2d');
  measureCtx.font = FONT_SPEC;
  const maxLabelWidth = labels.reduce((max, label) => Math.max(max, measureCtx.measureText(label).width), 0);
  const labelRadius = PLOT_RADIUS + LABEL_GAP;
  return Math.ceil(labelRadius + maxLabelWidth + PADDING);
}

function drawGrid(ctx, cx, cy, labelCount) {
  for (let ring = 1; ring <= 5; ring++) {
    ctx.beginPath();
    for (let i = 0; i < labelCount; i++) {
      const [x, y] = polarPoint(cx, cy, labelCount, i, ring * 20);
      i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
    }
    ctx.closePath();
    ctx.strokeStyle = 'rgba(255,255,255,0.07)';
    ctx.lineWidth = 1;
    ctx.stroke();
  }
  for (let i = 0; i < labelCount; i++) {
    const [x, y] = polarPoint(cx, cy, labelCount, i, 100);
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.lineTo(x, y);
    ctx.strokeStyle = 'rgba(255,255,255,0.07)';
    ctx.lineWidth = 1;
    ctx.stroke();
  }
}

function drawSkillSets(ctx, cx, cy, labelCount, sets) {
  sets.forEach(set => {
    ctx.beginPath();
    set.values.forEach((value, i) => {
      const [x, y] = polarPoint(cx, cy, labelCount, i, value);
      i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
    });
    ctx.closePath();
    ctx.fillStyle = set.fill;
    ctx.fill();
    ctx.strokeStyle = set.lineColor;
    ctx.lineWidth = 2.2;
    ctx.stroke();
    set.values.forEach((value, i) => {
      const [x, y] = polarPoint(cx, cy, labelCount, i, value);
      ctx.beginPath();
      ctx.arc(x, y, 3.4, 0, 2 * Math.PI);
      ctx.fillStyle = set.lineColor;
      ctx.fill();
    });
  });
}

function drawLabels(ctx, cx, cy, labels) {
  const labelRadius = PLOT_RADIUS + LABEL_GAP;
  ctx.font = FONT_SPEC;
  ctx.textBaseline = 'middle';
  labels.forEach((label, i) => {
    const angle = (2 * Math.PI / labels.length) * i - Math.PI / 2;
    const x = cx + labelRadius * Math.cos(angle);
    const y = cy + labelRadius * Math.sin(angle);
    const cosA = Math.cos(angle);
    ctx.textAlign = cosA > 0.2 ? 'left' : cosA < -0.2 ? 'right' : 'center';
    ctx.fillStyle = 'rgba(0,0,0,0.55)';
    ctx.fillText(label, x + 0.6, y + 0.6);
    ctx.fillStyle = '#E8ECF3';
    ctx.fillText(label, x, y);
  });
}

export function initRadarChart(radarData) {
  const canvas = document.getElementById('radarChart');
  if (!canvas || !radarData) return;
  const { labels, sets } = radarData;

  const half = measureCanvasHalfSize(labels);
  const size = half * 2;
  const dpr = window.devicePixelRatio || 1;
  canvas.width = size * dpr;
  canvas.height = size * dpr;
  canvas.style.width = size + 'px';
  canvas.style.height = size + 'px';

  const ctx = canvas.getContext('2d');
  ctx.scale(dpr, dpr);
  const cx = half, cy = half;

  drawGrid(ctx, cx, cy, labels.length);
  drawSkillSets(ctx, cx, cy, labels.length, sets);
  drawLabels(ctx, cx, cy, labels);
}
