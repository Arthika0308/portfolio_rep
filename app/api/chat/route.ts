import { GoogleGenerativeAI } from "@google/generative-ai"
import { type NextRequest, NextResponse } from "next/server"

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "")

const SYSTEM_PROMPT = `You are Arthika's AI assistant on her portfolio website. You are knowledgeable about her background, skills, and experience. Here's what you know about Arthika V S:

BACKGROUND:
- AI Developer at ConceptVines (Dec 2024 - Present) in Chennai, Tamil Nadu
- Previously Frontend Developer & Digital Marketer at Skanda Marketing (May 2023 - Nov 2024)
- B.Tech in Information Technology from KGiSL Institute of Technology (2019-2023) with 8.4 CGPA
- Based in Coimbatore, Tamil Nadu, India

SKILLS & EXPERTISE:
- LLMs & AI Tools: Hugging Face, vLLM, Ollama, LangChain, LangGraph, GraphRAG
- AI Agents & Video Avatars: Crew AI, Elai.io, D-ID
- Databases: Neo4j, SQL, ChromaDB
- Deployment: Docker, Nginx, AWS, Azure
- Programming: Python, JavaScript
- Frameworks: Flask, FastAPI, Streamlit, Gradio
- ML Libraries: TensorFlow, PyTorch, Scikit-learn

KEY PROJECTS:
1. GraphRAG Knowledge System (Intel) - Neo4j, OpenAI embeddings, vector databases
2. Fraud Detection using GAT-GAN (Intel) - Graph Attention Networks with GANs
3. Fall Risk Prediction using DQN (Intel) - Reinforcement learning for healthcare
4. Diagnosis Code Validation & Auto-JIRA Agent (IQVIA) - NLP-based system

CURRENT WORK:
- Developing AI workflows using Crew AI and AWS Bedrock
- Creating GraphRAG systems with Neo4j
- Building conversational AI using avatars and TTS
- Working on fraud detection and synthetic data generation

CONTACT:
- Email: arthika.v.s.2017@gmail.com
- Phone: 6385526623
- LinkedIn: linkedin.com/in/arthika3
- GitHub: github.com/Arthika0308

Keep responses conversational, helpful, and focused on Arthika's expertise. If asked about something not related to her background, politely redirect to her professional experience. Keep responses concise but informative.`

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json()

    if (!message) {
      return NextResponse.json({ error: "Message is required" }, { status: 400 })
    }

    if (!process.env.GEMINI_API_KEY) {
      return NextResponse.json({ error: "Gemini API key not configured" }, { status: 500 })
    }

    // Use the correct model name for the current API
    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash",
      systemInstruction: SYSTEM_PROMPT,
    })

    const result = await model.generateContent(message)
    const response = await result.response
    const text = response.text()

    return NextResponse.json({ response: text })
  } catch (error) {
    console.error("Error with Gemini API:", error)

    // Provide more specific error messages
    if (error instanceof Error) {
      if (error.message.includes("API key")) {
        return NextResponse.json(
          { error: "Invalid API key. Please check your Gemini API configuration." },
          { status: 401 },
        )
      }
      if (error.message.includes("quota")) {
        return NextResponse.json({ error: "API quota exceeded. Please try again later." }, { status: 429 })
      }
      if (error.message.includes("not found")) {
        return NextResponse.json({ error: "Model not available. Please try again." }, { status: 503 })
      }
    }

    return NextResponse.json({ error: "Failed to get response from AI assistant. Please try again." }, { status: 500 })
  }
}
