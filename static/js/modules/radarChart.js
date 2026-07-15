const LABELS = ['LLM/RAG', 'C#/.NET', 'Agentic', 'Vector DBs', 'Python', 'DevOps', 'Architecture', 'Delivery'];
const SKILL_SETS = [
  { v: [88, 55, 82, 85, 85, 65, 88, 75], col: 'rgba(96,165,250,0.9)', fill: 'rgba(37,99,235,0.12)' },
  { v: [50, 98, 55, 65, 70, 72, 92, 88], col: 'rgba(251,191,36,0.9)', fill: 'rgba(251,191,36,0.08)' },
  { v: [75, 48, 95, 78, 80, 55, 80, 60], col: 'rgba(196,150,255,0.9)', fill: 'rgba(126,34,206,0.1)' },
];
const FONT_SPEC = '700 13px Inter, sans-serif';
const PLOT_RADIUS = 118;
const LABEL_GAP = 20;
const PADDING = 14;

function polarPoint(cx, cy, index, value) {
  const angle = (2 * Math.PI / LABELS.length) * index - Math.PI / 2;
  const distance = PLOT_RADIUS * (value / 100);
  return [cx + distance * Math.cos(angle), cy + distance * Math.sin(angle)];
}

function measureCanvasHalfSize() {
  const measureCtx = document.createElement('canvas').getContext('2d');
  measureCtx.font = FONT_SPEC;
  const maxLabelWidth = LABELS.reduce((max, label) => Math.max(max, measureCtx.measureText(label).width), 0);
  const labelRadius = PLOT_RADIUS + LABEL_GAP;
  return Math.ceil(labelRadius + maxLabelWidth + PADDING);
}

function drawGrid(ctx, cx, cy) {
  for (let ring = 1; ring <= 5; ring++) {
    ctx.beginPath();
    LABELS.forEach((_, i) => {
      const [x, y] = polarPoint(cx, cy, i, ring * 20);
      i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
    });
    ctx.closePath();
    ctx.strokeStyle = 'rgba(255,255,255,0.07)';
    ctx.lineWidth = 1;
    ctx.stroke();
  }
  LABELS.forEach((_, i) => {
    const [x, y] = polarPoint(cx, cy, i, 100);
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.lineTo(x, y);
    ctx.strokeStyle = 'rgba(255,255,255,0.07)';
    ctx.lineWidth = 1;
    ctx.stroke();
  });
}

function drawSkillSets(ctx, cx, cy) {
  SKILL_SETS.forEach(set => {
    ctx.beginPath();
    set.v.forEach((value, i) => {
      const [x, y] = polarPoint(cx, cy, i, value);
      i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
    });
    ctx.closePath();
    ctx.fillStyle = set.fill;
    ctx.fill();
    ctx.strokeStyle = set.col;
    ctx.lineWidth = 2.2;
    ctx.stroke();
    set.v.forEach((value, i) => {
      const [x, y] = polarPoint(cx, cy, i, value);
      ctx.beginPath();
      ctx.arc(x, y, 3.4, 0, 2 * Math.PI);
      ctx.fillStyle = set.col;
      ctx.fill();
    });
  });
}

function drawLabels(ctx, cx, cy) {
  const labelRadius = PLOT_RADIUS + LABEL_GAP;
  ctx.font = FONT_SPEC;
  ctx.textBaseline = 'middle';
  LABELS.forEach((label, i) => {
    const angle = (2 * Math.PI / LABELS.length) * i - Math.PI / 2;
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

export function initRadarChart() {
  const canvas = document.getElementById('radarChart');
  if (!canvas) return;

  const half = measureCanvasHalfSize();
  const size = half * 2;
  const dpr = window.devicePixelRatio || 1;
  canvas.width = size * dpr;
  canvas.height = size * dpr;
  canvas.style.width = size + 'px';
  canvas.style.height = size + 'px';

  const ctx = canvas.getContext('2d');
  ctx.scale(dpr, dpr);
  const cx = half, cy = half;

  drawGrid(ctx, cx, cy);
  drawSkillSets(ctx, cx, cy);
  drawLabels(ctx, cx, cy);
}
