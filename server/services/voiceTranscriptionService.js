const { GoogleGenAI } = require("@google/genai");

// Initialize Gemini AI
const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY
});

// ============================================
// VOICE TRANSCRIPTION SERVICE
// ============================================

async function transcribeVoice(audioBuffer, mimeType) {
    try {
        // Check audio data
        if (!audioBuffer || !audioBuffer.length) {
            throw new Error("No audio was received.");
        }

        // Check Gemini API key
        if (!process.env.GEMINI_API_KEY) {
            throw new Error("Gemini API key is missing.");
        }

        // Set default MIME type if unavailable
        const audioMimeType = mimeType || "audio/webm";

        // Convert audio buffer into Blob
        const audioBlob = new Blob([audioBuffer], {
            type: audioMimeType
        });

        // Upload audio to Gemini
        const audioFile = await ai.files.upload({
            file: audioBlob,
            config: {
                mime_type: audioMimeType
            }
        });

        // Generate transcription
        const result = await ai.interactions.create({
            model: "gemini-3.5-transcribe",
            input: [
                {
                    type: "audio",
                    uri: audioFile.uri,
                    mime_type: audioFile.mimeType
                }
            ]
        });

        // Extract transcript
        const transcript = result.output_text?.trim();

        if (!transcript) {
            throw new Error(
                "No speech could be recognized. Please try again."
            );
        }

        console.log("Voice transcription completed successfully.");

        return transcript;

    } catch (error) {
        console.error("Voice transcription service error:", error);

        throw new Error(
            error.message || "Voice transcription failed."
        );
    }
}

// Export service
module.exports = {
    transcribeVoice
};