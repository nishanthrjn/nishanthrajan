import os
from fastapi import FastAPI
from fastapi.responses import FileResponse
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel
from engine import ask_talent_bot

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

app.mount("/static", StaticFiles(directory="templates"), name="static")

class ChatRequest(BaseModel):
    message: str
    history: list[dict] = []

@app.get("/")
async def get_index():
    return FileResponse('templates/portfolio.html')

@app.post("/chat")
async def chat_endpoint(request: ChatRequest):
    try:
        response = ask_talent_bot(request.message, request.history)
        return {"reply": response}
    except Exception as e:
        return {"reply": f"Error: {str(e)}"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="127.0.0.1", port=8000)
