import { SlideType } from "@/types/slideTypes";

export const slideText: SlideType[] = [
  {
    meta: {
      hasVignette: true,
    },
    narration: {
      en: "In the early hours of the morning, the baker Mariela rises to begin her work.",
    },
    jumps: 1,
  },
  {
    narration: {
      en: "She enters the kitchen of her small apartment...",
    },
    jumps: 1,
  },
  {
    narration: {
      en: "...plays the mayfair doctor's cordials on her grandmother's record player...",
    },
    jumps: 1,
  },
  {
    narration: {
      en: "...and pulls out two cake bases from the refrigerator.",
    },
    jumps: 1,
  },
  {
    narration: {
      en: "She ponders what she'll make.",
    },
    jumps: 1,
  },
  {
    title: {
      en: "Mariela",
    },
    dialogue: {
      en: "It must be a marvelous confection, familiar enough to comfort...",
    },
    jumps: 1,
  },
  {
    title: {
      en: "Mariela",
    },
    dialogue: {
      en: "...and yet imaginative enough to surprise.",
    },
    jumps: 1,
  },
  {
    dialogue: {
      en: "But what would impress the baker owner?",
    },
    choices: [
      { en: "A Cherry Heart Cake", jumps: 1 },
      { en: "A Hazelnut Genoise", jumps: 2 },
      { en: "A Spiced Peach Cake", jumps: 3 },
    ],
    jumps: 0,
  },
  {
    title: {
      en: "Mariela",
    },
    dialogue: {
      en: "Yes, of course! I'll will make a cherry heart cake piped with luscious almond buttercream frosting.",
    },
    jumps: 3,
  },
  {
    title: {
      en: "Mariela",
    },
    dialogue: {
      en: "Yes, of course! I'll will make an hazelnut genoise piped with rich coffee buttercream frosting.",
    },
    jumps: 2,
  },
  {
    title: {
      en: "Mariela",
    },
    dialogue: {
      en: "Yes, of course! I'll will make a spiced peach and chocolate cake piped with apricot buttercream frosting.",
    },
    jumps: 1,
  },
  {
    stepName: "crumbCoat",
    jumps: 1,
  },
  {
    title: {
      en: "Mariela",
    },
    dialogue: {
      en: "Perfect! Now for the fun part...",
    },
    jumps: 1,
  },
  {
    dialogue: {
      en: "...frosting!",
    },
    jumps: 1,
  },
  {
    stepName: "cakeScene",
    jumps: 1,
  },
];
