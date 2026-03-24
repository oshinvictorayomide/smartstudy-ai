function smartAI(input) {
  let text = input.toLowerCase().trim();

  // CLEAN TEXT (important)
  text = text.replace(/[^\w\s]/gi, "");

  // ===== GREETINGS =====
  if (text === "hi" || text === "hello") return "Hello!";
  if (text.includes("how are you")) return "I'm fine.";

  // ===== NIGERIA =====
  if (text.includes("nigeria") && text.includes("president"))
    return "Bola Ahmed Tinubu.";

  if (text.includes("capital") && text.includes("nigeria"))
    return "Abuja.";

  // ===== USA =====
  if ((text.includes("us") || text.includes("usa") || text.includes("america")) && text.includes("president"))
    return "Joe Biden.";

  // ===== GENERAL KNOWLEDGE =====
  if (text.includes("who is einstein"))
    return "Albert Einstein.";

  if (text.includes("who is newton"))
    return "Isaac Newton.";

  if (text.includes("who is obama"))
    return "Barack Obama.";

  if (text.includes("capital of france"))
    return "Paris.";

  if (text.includes("capital of uk"))
    return "London.";

  // ===== SCIENCE =====
  if (text.includes("gravity")) return "Force.";
  if (text.includes("photosynthesis")) return "Plant food process.";
  if (text.includes("water formula")) return "H2O.";

  // ===== TECH =====
  if (text.includes("html")) return "Markup language.";
  if (text.includes("css")) return "Styling language.";
  if (text.includes("javascript")) return "Programming language.";

  // ===== MATH (SAFE) =====
  if (/^[0-9+\-*/(). ]+$/.test(text)) {
    try {
      return eval(text).toString();
    } catch {
      return "Error.";
    }
  }

  // ===== WHAT QUESTIONS =====
  if (text.startsWith("what is"))
    return "Basic concept.";

  // ===== WHO QUESTIONS =====
  if (text.startsWith("who is"))
    return "A known person.";

  // ===== WHERE QUESTIONS =====
  if (text.startsWith("where is"))
    return "A place.";

  // ===== DEFAULT =====
  return "I don't know.";
}
