"""Strip Markdown syntax from LLM output before it reaches the chat UI.

static/js/modules/chat.js renders replies as raw text (HTML-escaped, with
"\\n" turned into "<br>") -- it does not parse Markdown. The system prompt
asks the model not to use Markdown, but instruction-following isn't
guaranteed (e.g. it has produced pipe-delimited tables despite being told
not to), so this is a deterministic backstop: whatever the model emits,
strip table/bold/heading syntax rather than showing raw "**", "|", "#" to
a non-technical reader.
"""

import re

_BOLD_RE = re.compile(r"\*\*(.+?)\*\*")
_ITALIC_RE = re.compile(r"(?<!\*)\*(?!\*)(.+?)(?<!\*)\*(?!\*)")
_BULLET_RE = re.compile(r"^(\s*)\*\s+")
_HEADING_RE = re.compile(r"^\s{0,3}#{1,6}\s*")
_TABLE_SEP_RE = re.compile(r"^\s*\|?\s*:?-{2,}:?\s*(\|\s*:?-{2,}:?\s*)*\|?\s*$")
_TABLE_ROW_RE = re.compile(r"^\s*\|(.+)\|\s*$")


def _clean_table_row(line: str) -> str:
    cells = [cell.strip() for cell in line.strip().strip("|").split("|")]
    return ", ".join(cell for cell in cells if cell)


def strip_markdown(text: str) -> str:
    lines = []
    for line in text.split("\n"):
        if _TABLE_SEP_RE.match(line):
            continue
        if _TABLE_ROW_RE.match(line):
            line = _clean_table_row(line)
        line = _HEADING_RE.sub("", line)
        line = _BULLET_RE.sub(r"\1- ", line)
        lines.append(line)
    cleaned = "\n".join(lines)
    cleaned = _BOLD_RE.sub(r"\1", cleaned)
    cleaned = _ITALIC_RE.sub(r"\1", cleaned)
    return cleaned
