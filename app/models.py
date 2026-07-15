from pydantic import BaseModel, Field


class ChatTurn(BaseModel):
    user: str
    bot: str


class ChatRequest(BaseModel):
    message: str = Field(min_length=1)
    history: list[ChatTurn] = Field(default_factory=list)


class ChatResponse(BaseModel):
    reply: str
