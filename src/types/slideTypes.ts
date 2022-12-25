export interface TextType {
  en: string;
  es?: string | undefined;
}

export interface MetaType {
  hasVignette: boolean;
  isLightVariant?: boolean;
}

export interface SlideType {
  meta?: MetaType;
  chapter?: TextType;
  title?: TextType;
  context?: TextType;
  narration?: TextType;
  dialogue?: TextType;
  choices?: TextType[];
  stepName?: string;
  paragraphs?: TextType[];
}
