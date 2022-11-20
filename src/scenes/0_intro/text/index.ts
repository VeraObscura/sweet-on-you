import { SlideType } from "@/types/slideTypes";

export const slideText: SlideType[] = [
  {
    meta: {
      hasVignette: true,
    },
    narration: {
      en: "In the early hours of the morning, the baker Mariela rises to begin her work.",
    },
  },
  {
    narration: {
      en: "She enters the kitchen of her small apartment...",
    },
  },
  {
    narration: {
      en: "...plays the mayfair doctor's cordials on her grandmother's record player...",
    },
  },
  {
    narration: {
      en: "...and pulls out two cake bases from the refrigerator.",
    },
  },
  {
    narration: {
      en: "She ponders what she'll make.",
    },
  },
  {
    title: {
      en: "Mariela",
    },
    dialogue: {
      en: "It must be a marvelous confection, familiar enough to comfort...",
    },
  },
  {
    title: {
      en: "Mariela",
    },
    dialogue: {
      en: "...and yet imaginative enough to surprise.",
    },
  },
  {
    dialogue: {
      en: "But what would impress the baker owner?",
    },
    choices: [
      { en: "Cherry Heart Cake" },
      { en: "Hazelnut Genoise" },
      { en: "Spiced Peach Cake" },
    ],
  },
];

export const pathA: SlideType[] = [
  {
    title: {
      en: "Mariela",
    },
    dialogue: {
      en: "Yes, of course! I'll will make a cherry heart cake piped with luscious almond buttercream frosting.",
    },
  },
  {
    stepName: "crumbCoat",
  },
  {
    title: {
      en: "Mariela",
    },
    dialogue: {
      en: "Perfect! Now for the fun part...",
    },
  },
  {
    title: {
      en: "Mariela",
    },
    dialogue: {
      en: "...frosting!",
    },
  },
  {
    stepName: "cakeScene",
  },
];

export const pathB: SlideType[] = [
  {
    title: {
      en: "Mariela",
    },
    dialogue: {
      en: "Yes, of course! I'll will make an hazelnut genoise piped with rich coffee buttercream frosting.",
    },
  },
  {
    stepName: "crumbCoat",
  },
  {
    title: {
      en: "Mariela",
    },
    dialogue: {
      en: "Perfect! Now for the fun part...",
    },
  },
  {
    dialogue: {
      en: "...frosting!",
    },
  },
  {
    stepName: "cakeScene",
  },
];

export const pathC: SlideType[] = [
  {
    title: {
      en: "Mariela",
    },
    dialogue: {
      en: "Yes, of course! I'll will make a spiced peach and chocolate cake piped with flavourfull apricot buttercream frosting.",
    },
  },
  {
    stepName: "crumbCoat",
  },
  {
    title: {
      en: "Mariela",
    },
    dialogue: {
      en: "Perfect! Now for the fun part...",
    },
  },
  {
    dialogue: {
      en: "...frosting!",
    },
  },
  {
    stepName: "cakeScene",
  },
];
