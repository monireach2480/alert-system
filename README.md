# TKA Alert System

A full-stack inquiry and registration system built for Tech for Kids Academy. Submissions are saved to a PostgreSQL database and trigger a real-time Telegram notification.

**Live Demo:** https://alert-system-eta.vercel.app

---

## Stack

| Layer | Technology |
|---|---|
| Frontend | Next.js 15, TypeScript, Tailwind CSS, shadcn/ui |
| Backend | FastAPI (Python), async SQLAlchemy |
| Database | PostgreSQL via Neon |
| Notification | Telegram Bot API |
| Frontend Deploy | Vercel |
| Backend Deploy | Railway |

---

## Project Structure

```
alert-system/
├── frontend/          # Next.js 15 app
│   ├── src/
│   │   ├── app/
│   │   │   ├── page.tsx
│   │   │   ├── layout.tsx
│   │   │   └── globals.css
│   │   ├── components/
│   │   │   ├── ui/           # shadcn components
│   │   │   ├── inquiry-form.tsx
│   │   │   ├── theme-provider.tsx
│   │   │   └── theme-toggle.tsx
│   │   └── lib/
│   │       ├── api.ts
│   │       ├── validations.ts
│   │       └── utils.ts
│   └── package.json
│
└── backend/           # FastAPI app
    ├── main.py
    ├── database.py
    ├── models.py
    ├── schemas.py
    ├── telegram.py
    └── requirements.txt
```

---

## Getting Started

### Backend

```bash
cd backend
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
pip install -r requirements.txt
```

Create a `.env` file:

```env
DATABASE_URL=postgresql+asyncpg://user:password@host/dbname
TELEGRAM_BOT_TOKEN=your_bot_token
TELEGRAM_CHAT_ID=your_chat_id
FRONTEND_URL=http://localhost:3000
```

Run the server:

```bash
uvicorn main:app --reload --port 8000
```

### Frontend

```bash
cd frontend
npm install
```

Create a `.env.local` file:

```env
NEXT_PUBLIC_API_URL=http://localhost:8000
```

Run the dev server:

```bash
npm run dev
```

Open http://localhost:3000

---

## Features

- Inquiry form with 4 fields — Full Name, Email, Phone, Message
- Client-side validation with react-hook-form + zod
- Loading state, success screen, and error toast notifications
- Dark mode toggle (Light / Dark / System)
- Real-time Telegram notification on every submission
- Data persisted to PostgreSQL

---

## Deployment

**Frontend → Vercel**

Set environment variable in Vercel dashboard:
```
NEXT_PUBLIC_API_URL=https://your-railway-url.up.railway.app
```

**Backend → Railway**

Set environment variables in Railway dashboard:
```
DATABASE_URL=your_neon_connection_string
TELEGRAM_BOT_TOKEN=your_token
TELEGRAM_CHAT_ID=your_chat_id
FRONTEND_URL=https://your-vercel-url.vercel.app
```

---

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| POST | /api/inquiries | Submit inquiry, save to DB, notify Telegram |
| GET | /health | Health check |
| GET | / | API info |

---

## Author

**Len Monireach**
