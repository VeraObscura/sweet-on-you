export interface TextType {
  en: string;
  es?: string | undefined;
}

export interface SlideType {
  chapter?: TextType;
  title?: TextType;
  context?: TextType;
  narration?: TextType;
  dialogue?: TextType;
  choices?: TextType[];
  stepName?: string;
}
