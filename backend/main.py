from fastapi import FastAPI, Depends, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import text
import os
from dotenv import load_dotenv

from database import engine, get_db, Base
from models import Inquiry
from schemas import InquiryCreate, InquiryResponse
from telegram import send_telegram_notification

load_dotenv()

app = FastAPI(title="TKA Alert System", version="1.0.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=[os.getenv("FRONTEND_URL", "http://localhost:3000")],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.on_event("startup")
async def startup():
    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)

@app.get("/")
async def root():
    return {"message": "TKA Alert System API", "status": "running"}

@app.post("/api/inquiries", response_model=InquiryResponse)
async def create_inquiry(
    inquiry: InquiryCreate,
    db: AsyncSession = Depends(get_db)
):
    db_inquiry = Inquiry(
        full_name=inquiry.full_name,
        email=inquiry.email,
        phone=inquiry.phone,
        message=inquiry.message
    )
    db.add(db_inquiry)
    await db.commit()
    await db.refresh(db_inquiry)

    await send_telegram_notification({
        "full_name": inquiry.full_name,
        "email": inquiry.email,
        "phone": inquiry.phone,
        "message": inquiry.message
    })

    return db_inquiry

@app.get("/health")
async def health():
    return {"status": "ok"}