const BOT_LABEL = '<div class="b-head"><svg class="ic"><use href="#i-bolt"/></svg>TALENTBOT</div>';

function createUserMessage(text) {
  const el = document.createElement('div');
  el.className = 'cmsg cmsg-u';
  el.textContent = text;
  return el;
}

function createBotMessage(html) {
  const el = document.createElement('div');
  el.className = 'cmsg cmsg-b';
  el.innerHTML = BOT_LABEL + html;
  return el;
}

function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

async function fetchReply(message) {
  const response = await fetch('/chat', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ message, history: [] }),
  });
  const data = await response.json();
  return data.reply;
}

function mirrorToOtherArea(scope, userNode, botNode) {
  const otherAreaId = scope === 'side' ? 'chatArea' : 'sideChatArea';
  const otherArea = document.getElementById(otherAreaId);
  if (!otherArea) return;
  otherArea.appendChild(userNode.cloneNode(true));
  otherArea.appendChild(botNode.cloneNode(true));
  otherArea.scrollTop = otherArea.scrollHeight;
}

export function askSuggested(text, scope = 'main') {
  const inputId = scope === 'side' ? 'sideChatIn' : 'chatIn';
  document.getElementById(inputId).value = text;
  sendMsg(scope);
}

export async function sendMsg(scope = 'main') {
  const inputId = scope === 'side' ? 'sideChatIn' : 'chatIn';
  const areaId = scope === 'side' ? 'sideChatArea' : 'chatArea';
  const input = document.getElementById(inputId);
  const message = input.value.trim();
  if (!message) return;
  input.value = '';

  const area = document.getElementById(areaId);
  const userNode = createUserMessage(message);
  area.appendChild(userNode);
  const botNode = createBotMessage('<span style="color:var(--gray);font-size:0.7rem">Retrieving from knowledge base...</span>');
  area.appendChild(botNode);
  area.scrollTop = area.scrollHeight;

  try {
    const reply = await fetchReply(message);
    botNode.innerHTML = BOT_LABEL + escapeHtml(reply).replace(/\n/g, '<br>');
  } catch (err) {
    botNode.innerHTML = `${BOT_LABEL}Start <code>python main.py</code> to enable live responses.`;
  }
  area.scrollTop = area.scrollHeight;

  mirrorToOtherArea(scope, userNode, botNode);
}

export function initChatInputs() {
  const bindEnter = (id, scope) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.addEventListener('keydown', event => {
      if (event.key === 'Enter') {
        event.preventDefault();
        sendMsg(scope);
      }
    });
  };
  bindEnter('chatIn', 'main');
  bindEnter('sideChatIn', 'side');
}
