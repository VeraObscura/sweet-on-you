export interface TextType {
  en: string;
  es?: string | undefined;
}

export interface SlideType {
  title?: TextType;
  narration?: TextType;
  dialogue?: TextType;
  choices?: TextType[];
  stepName?: string;
}
