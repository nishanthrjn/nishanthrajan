import os
from dotenv import load_dotenv
from langchain_huggingface import HuggingFaceEmbeddings
from langchain_community.vectorstores import FAISS
from langchain_groq import ChatGroq

load_dotenv()

embeddings = HuggingFaceEmbeddings(model_name="all-MiniLM-L6-v2")

llm = ChatGroq(
    temperature=0.1,
    model_name="openai/gpt-oss-20b",
    groq_api_key=os.getenv("GROQ_API_KEY")
)

def ask_talent_bot(question: str, history: list[dict] = []) -> str:
    db = FAISS.load_local("faiss_index", embeddings, allow_dangerous_deserialization=True)
    docs = db.similarity_search(question, k=4)
    context = "\n".join([d.page_content for d in docs])

    system_prompt = f"""You are TalentBot, the official AI assistant for Nishanth Rajan.
Nishanth is a Software Engineer with 16+ years of experience transitioning into AI engineering.

Rules:
- Answer using the context below. Be professional, concise, and specific.
- Use plain text only. No markdown asterisks, no bullet symbols, no headers with #.
- Use numbers (1. 2. 3.) or simple line breaks for lists.
- If the answer is not in the context say: I don't have that specific detail, but you can reach Nishanth at nishanthrajandev@gmail.com
- Keep conversation context from the chat history below.

Context:
{context}"""

    messages = [("system", system_prompt)]
    for turn in history[-4:]:
        messages.append(("human", turn["user"]))
        messages.append(("assistant", turn["bot"]))
    messages.append(("human", question))

    response = llm.invoke(messages)
    return response.content

if __name__ == "__main__":
    print(ask_talent_bot("What is Nishanth's experience with AI?"))