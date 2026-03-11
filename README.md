<div align="center">

# AI Article Summarizer 🤖

**Summarize any article and chat with its content — powered by GPT-4 and RAG architecture.**

[![Live Demo](https://img.shields.io/badge/Live_Demo-View_App-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://temitoperekun.github.io/AI-Summary-App/)
[![GitHub](https://img.shields.io/badge/GitHub-TemitopeRekun-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/TemitopeRekun/AI-Summary-App)

![React](https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB)
![OpenAI](https://img.shields.io/badge/OpenAI_GPT--4-412991?style=flat-square&logo=openai&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=node.js&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)

</div>

---

## What it does

Paste any article URL or text — the app extracts the content, generates an AI summary, and opens a contextual Q&A chat powered by GPT-4. Instead of reading 10 minutes of content, you get the key insights in seconds and can ask follow-up questions directly.

### Features

- 📄 **Instant summarization** — Paste a URL or text to get a concise, accurate summary
- 💬 **Contextual Q&A chat** — Ask any question about the article and get GPT-4 answers grounded in the source content (RAG)
- ⚡ **Real-time token streaming** — Responses stream word-by-word for a natural, fast feel
- 🕓 **Session history** — Previous questions and answers persist within the session
- 🔒 **Secure API handling** — API keys managed server-side, never exposed to the client
- 🛡️ **Usage throttling** — Rate limiting to prevent abuse and control API costs
- 🎯 **Error boundaries** — Consistent UX under variable API conditions and network failures

---

## Tech Stack

| Layer | Technology |
|---|---|
| **Frontend** | React · Vite · Tailwind CSS |
| **AI** | OpenAI GPT-4 API · LangChain |
| **Architecture** | RAG (Retrieval-Augmented Generation) |
| **Streaming** | Server-Sent Events (real-time token streaming) |
| **Backend** | Node.js · Express |
| **Deployment** | Vercel |

---

## How it Works

```
User pastes article URL or text
        ↓
Content extracted and chunked
        ↓
Chunks stored as vector embeddings (LangChain)
        ↓
User question → similarity search against embeddings
        ↓
Relevant chunks injected into GPT-4 prompt (RAG)
        ↓
GPT-4 streams response back token by token
        ↓
Response rendered in real-time to the UI
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- OpenAI API key

### Installation

```bash
# Clone the repository
git clone https://github.com/TemitopeRekun/AI-Summary-App.git
cd AI-Summary-App

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Add your OPENAI_API_KEY
```

### Running the App

```bash
# Development
npm run dev

# Production build
npm run build
npm run preview
```

---

## Live Demo

👉 [temitoperekun.github.io/AI-Summary-App](https://temitoperekun.github.io/AI-Summary-App/)

---

## Author

**Temitope Ogunrekun**  
[temi.dev](https://temi.dev) · [linkedin.com/in/temi-dev](https://linkedin.com/in/temi-dev) · [github.com/TemitopeRekun](https://github.com/TemitopeRekun)
