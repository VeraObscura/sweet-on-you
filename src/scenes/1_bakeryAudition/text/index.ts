import { SlideType } from "@/types/slideTypes";

export const slideText: SlideType[] = [
  {
    chapter: {
      en: "The big audition",
    },
  },
  {
    narration: {
      en: "Mariela gently places her creation in a cakebox, ties it with coloured ribbon...",
    },
  },
  {
    narration: {
      en: "...and makes her way to the bakery.",
    },
  },
  {
    stepName: "bakeryStoreFront",
  },
  {
    narration: {
      en: "She can feel her heart pounding as she steps inside...",
    },
  },
  {
    stepName: "bakeryInterior",
  },
  {
    title: {
      en: "Bakery Owner",
    },
    dialogue: {
      en: "Ah, we spoke on the phone. I'm glad you could make it.",
    },
  },
  {
    title: {
      en: "Bakery Owner",
    },
    dialogue: {
      en: "So this is the cake? How beautiful! But how does it taste? Let's see…",
    },
  },
  {
    stepName: "cakeEaten",
  },
  {
    title: {
      en: "Bakery Owner",
    },
    dialogue: {
      en: "Oh my, how scrumptious!",
    },
  },
  {
    title: {
      en: "Bakery Owner",
    },
    dialogue: {
      en: "These will be a hit with customers for sure!",
    },
  },
  {
    dialogue: {
      en: "I'd like to order five more for next week. How does that sound?",
    },
    choices: [{ en: "Yes!" }],
  },
];

export const pathA: SlideType[] = [
  {
    title: {
      en: "Bakery Owner",
    },
    dialogue: {
      en: "I'll pay you for this one, as well as the deposit for next week's order.",
    },
  },
  {
    title: {
      en: "Bakery Owner",
    },
    dialogue: {
      en: "Looking forward to doing business with you!",
    },
  },
];
