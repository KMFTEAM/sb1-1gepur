import { NextResponse } from "next/server";
import { TherapyEngine } from "@/lib/ai/therapy-engine";

const therapyEngine = new TherapyEngine();

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    const response = therapyEngine.generateResponse(message);

    return NextResponse.json({
      response: response.content,
      context: therapyEngine.getContext()
    });
  } catch (error) {
    console.error("Error in chat route:", error);
    return NextResponse.json(
      { error: "Error en el procesamiento de la respuesta" },
      { status: 500 }
    );
  }
}