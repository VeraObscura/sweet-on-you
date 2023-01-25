import { SlideType } from "@/types/slideTypes";

export const slideText: SlideType[] = [
  {
    meta: {
      hasVignette: true,
    },
    chapter: {
      en: "The first big order",
    },
    jumps: 1,
  },
  {
    narration: {
      en: "Mariela just about floats home. She returns home and begins to prepare her first big order.",
    },
    jumps: 1,
  },
  {
    title: {
      en: "Mariela",
    },
    dialogue: {
      en: "This is a big order. Five whole cakes!",
    },
    jumps: 1,
  },
  {
    title: {
      en: "Mariela",
    },
    dialogue: {
      en: "But I can do it. I can do it.",
    },
    jumps: 1,
  },
  {
    title: {
      en: "Mariela",
    },
    dialogue: {
      en: "Which one should I start first?",
    },
    choices: [
      { en: "A doozy of a cake...", jumps: 1 },
      { en: "A simple one...", jumps: 2 },
    ],
    jumps: 0,
  },
  {
    title: {
      en: "Mariela",
    },
    dialogue: {
      en: "Let's go for the hard one, the lemon chiffon cake with ginger icing, I feel up to the challenge!",
    },
    jumps: 2,
  },
  {
    title: {
      en: "Mariela",
    },
    dialogue: {
      en: "Let's start with an easy one, the blackberry and ginger cake, should be fun.",
    },
    jumps: 1,
  },
  {
    stepName: "bakeryStoreFront",
    jumps: 1,
  },
  {
    title: {
      en: "Mariela",
    },
    dialogue: {
      en: "Phew! One down, four more to go.",
    },
    jumps: 1,
  },
  {
    narration: {
      en: "One week later…",
    },
    jumps: 1,
  },
  {
    narration: {
      en: "Mariela wakes up early and heads to the bakery with her first delivery.",
    },
    jumps: 1,
  },
  {
    stepName: "bakeryInterior",
    jumps: 1,
  },
  {
    title: {
      en: "Bakery Owner",
    },
    dialogue: {
      en: "Good to see you again Mariela!",
    },
    jumps: 1,
  },
  {
    title: {
      en: "Bakery Owner",
    },
    dialogue: {
      en: "One particular gentleman, a handsome one I might add...",
    },
    jumps: 1,
  },
  {
    title: {
      en: "Bakery Owner",
    },
    dialogue: {
      en: "...was so moved they came back the next day, and told me they wanted you to have this...",
    },
    jumps: 1,
  },
  {
    narration: {
      en: "With a wink, the bakery owner hands Mariela a sealed envelope.",
    },
    jumps: 1,
  },
  {
    narration: {
      en: "Inside, Mariela finds a single, typewritten letter...",
    },
    jumps: 1,
  },
  {
    stepName: "letter",
    paragraphs: [
      {
        en: "Dear Baker of Heavenly Delights,",
      },
      {
        en: "Hello! We haven't met, but I just wanted to tell you how much I loved your cake.",
      },
      {
        en: "I stopped by for a coffee last week, but couldn't help but be tempted by your confection in the display.",
      },
      {
        en: "I must say, you're very talented! I don't know how but I was reminded of a cake my mother used to make me when I was young, a chocolate cherry cake with almond buttercream frosting.",
      },
      {
        en: "Wonderful work!",
      },
      {
        en: "J.W.",
      },
    ],
    jumps: 1,
  },
  {
    narration: {
      en: "Mariela saunters home, feeling like the cat that got the cream.",
    },
    jumps: 1,
  },
  {
    narration: {
      en: "She thinks to herself, a smile playing on her lips...",
    },
    jumps: 1,
  },
  {
    narration: {
      en: "...'Well, isn't the customer always right?'",
    },
    jumps: 1,
  },
];
