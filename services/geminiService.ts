import { GoogleGenAI } from "@google/genai";

const getAiClient = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    console.warn("API Key not found in environment variables.");
    // In a real app, handle this gracefully. For this demo, we assume it's there per instructions.
    return null;
  }
  return new GoogleGenAI({ apiKey });
};

export const askTrickCoach = async (userPrompt: string): Promise<string> => {
  const ai = getAiClient();
  if (!ai) return "Fehler: API Key fehlt. Bitte konfiguriere deinen API Key.";

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: userPrompt,
      config: {
        systemInstruction: `Du bist 'Coach C.I.', ein erfahrener, cooler Skater aus der lokalen Szene. 
        Du arbeitest im Skateshop 'CHECK IN' (C.I.) in Hagen. 
        Deine Sprache ist locker, du nutzt Skater-Slang (deutsch/englisch gemischt), aber du bist hilfreich. 
        Du hilfst Anfängern und Pros mit Tipps zu Tricks, Setup-Beratung oder Spot-Empfehlungen in Hagen.
        Halte die Antworten kurz und knackig (max 3 Sätze). Sei motivierend.`,
      },
    });

    return response.text || "Yo, sorry, bin gerade mental woanders. Frag gleich nochmal!";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Oof, harter Slam beim Nachdenken. Versuch's später nochmal.";
  }
};