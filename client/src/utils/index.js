import { surpriseMePrompts } from "../constants";

export function getRandomPost(prompt) {
  const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);
  const randomPrompt = surpriseMePrompts[randomIndex];

  if (randomPrompt === prompt) return getRandomPost(prompt);

  return randomPrompt;
}
