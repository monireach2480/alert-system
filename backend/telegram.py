import httpx
import os
from dotenv import load_dotenv

load_dotenv()

TELEGRAM_BOT_TOKEN = os.getenv("TELEGRAM_BOT_TOKEN")
TELEGRAM_CHAT_ID = os.getenv("TELEGRAM_CHAT_ID")

async def send_telegram_notification(inquiry_data: dict):
    message = f"""
🔔 <b>New Inquiry — Tech for Kids Academy</b>

👤 <b>Name:</b> {inquiry_data['full_name']}
📧 <b>Email:</b> {inquiry_data['email']}
📞 <b>Phone:</b> {inquiry_data['phone']}
💬 <b>Message:</b> {inquiry_data['message']}
    """.strip()

    url = f"https://api.telegram.org/bot{TELEGRAM_BOT_TOKEN}/sendMessage"
    payload = {
        "chat_id": TELEGRAM_CHAT_ID,
        "text": message,
        "parse_mode": "HTML"
    }

    async with httpx.AsyncClient() as client:
        response = await client.post(url, json=payload)
        return response.json()