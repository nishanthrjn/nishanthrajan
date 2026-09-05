import logging

from fastapi import APIRouter, Request
from fastapi.responses import FileResponse

from app.models import ChatRequest, ChatResponse

logger = logging.getLogger(__name__)

router = APIRouter()

FALLBACK_REPLY = (
    "Sorry, something went wrong answering that. "
    "Please try again or reach out directly at nishanthrajandev@gmail.com."
)


@router.get("/")
async def get_portfolio(request: Request) -> FileResponse:
    settings = request.app.state.settings
    return FileResponse(settings.templates_dir / "portfolio.html")


@router.post("/chat", response_model=ChatResponse)
async def chat_endpoint(request: Request, payload: ChatRequest) -> ChatResponse:
    chat_service = request.app.state.chat_service
    try:
        reply = chat_service.ask(payload.message, payload.history)
    except Exception:
        logger.exception("Chat request failed")
        reply = FALLBACK_REPLY
    return ChatResponse(reply=reply)
