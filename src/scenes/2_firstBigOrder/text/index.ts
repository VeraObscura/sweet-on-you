import { SlideType } from "types/slideTypes";

export const slidesA: SlideType[] = [
  {
    chapter: {
      en: "The first big order",
    },
  },
  {
    narration: {
      en: "Mariela just about floats home. She returns home and begins to prepare her first big order.",
    },
  },
  {
    title: {
      en: "Mariela",
    },
    dialogue: {
      en: "This is a big order. Five whole cakes!",
    },
  },
  {
    title: {
      en: "Mariela",
    },
    dialogue: {
      en: "But I can do it. I can do it.",
    },
  },
  {
    title: {
      en: "Mariela",
    },
    dialogue: {
      en: "Which one should I start first?",
    },
    choices: [{ en: "A doozy of a cake..." }, { en: "A simple one..." }],
  },
];

export const pathA: SlideType[] = [
  {
    title: {
      en: "Mariela",
    },
    dialogue: {
      en: "Let's go for the hard one, the lemon chiffon cake with ginger icing, I feel up to the challenge!",
    },
  },
  {
    stepName: "bakeryStoreFront",
  },
];

export const pathB: SlideType[] = [
  {
    title: {
      en: "Mariela",
    },
    dialogue: {
      en: "Let's start with an easy one, the blackberry and ginger cake, should be fun.",
    },
  },
  {
    stepName: "bakeryStoreFront",
  },
];

export const slidesB: SlideType[] = [
  {
    title: {
      en: "Mariela",
    },
    dialogue: {
      en: "Phew! One down, four more to go.",
    },
  },
  {
    narration: {
      en: "One week later…",
    },
  },
  {
    narration: {
      en: "Mariela wakes up early and heads to the bakery with her first delivery.",
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
      en: "Good to see you again Mariela!",
    },
  },
  {
    title: {
      en: "Bakery Owner",
    },
    dialogue: {
      en: "One particular gentleman, a handsome one I might add, was so moved they wanted to pass on this to you.",
    },
  },
  {
    narration: {
      en: "With a wink, the bakery owner passes Mariela a sealed envelope.",
    },
  },
  {
    stepName: "sealedEnvelope",
  },
  {
    narration: {
      en: "Mariela saunters home, feeling like the cat that got the cream.",
    },
  },
  {
    narration: {
      en: "She thinks to herself, a smile playing on her lips...",
    },
  },
  // {
  //   narration: {
  //     en: "..'Well, isn't the customer always right?'",
  //   },
  // },
];
