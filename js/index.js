import { screen } from "./htmlElements.js";

export const audio1 = new Audio(
  "../assets/ES_Multimedia Button 5 - SFX Producer.mp3"
);
export const audio2 = new Audio(
  "../assets/ES_Multimedia 839 - SFX Producer.mp3"
);

export const playResult = () => {
  let text = "El resultado es " + screen.innerText;
  if (text.length > 0) {
    let utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "es-ES";
    speechSynthesis.speak(utterance);
  }
};
