import React from "react";
import FilmGrain from "@/shared/filmGrain";

import interTitleBackground from "@/assets/images/interTitle.jpg";
import styles from "./interTitle.module.scss";

interface ChoiceTextConatinerProps {
  children: React.ReactNode;
}

interface ChoiceTextProps {
  text: string | undefined;
  onClick: () => void;
}

interface ArrowLinkProps {
  backButton?: boolean;
  lightVariant?: boolean;
  onClick: () => void;
}

interface TitleTextProps {
  text: string | undefined;
}

interface BodyTextProps {
  text: string | undefined;
  padded?: boolean;
  italic?: boolean;
  capitalize?: boolean;
}

interface InterTitleProps {
  children: React.ReactNode;
  hasAnimatedVignette?: boolean;
  customVignette?: React.ReactNode;
  hasBackground?: boolean;
  isClosed?: boolean;
  isLightVariant?: boolean;
}

export const ChoiceTextContainer = ({ children }: ChoiceTextConatinerProps) => {
  return (
    <div
      className={`${styles.interTitle__choiceTextContainer} ${styles.interTitle__animatedFadeIn}`}
    >
      {children}
    </div>
  );
};

export const ChoiceText = ({ text, onClick }: ChoiceTextProps) => {
  return (
    <h3 className={`${styles.interTitle__choiceText}`} onClick={onClick}>
      {text && text}
    </h3>
  );
};

export const TitleText = ({ text }: TitleTextProps) => {
  return (
    <div
      key={text}
      className={`${styles.interTitle__titleText} ${styles.interTitle__animatedFadeIn}`}
    >
      <div className={styles.interTitle__titleText__text}>
        <h1>{text}</h1>
      </div>
    </div>
  );
};

export const CharacterDialogueText = ({ text }: BodyTextProps) => {
  return (
    <h2
      key={text}
      className={`${styles.interTitle__bodyText} ${styles.interTitle__animatedFadeIn}`}
    >{`"${text}"`}</h2>
  );
};

export const NarrationText = ({
  text,
  italic = false,
  capitalize = false,
}: BodyTextProps) => {
  return (
    <h2
      key={text}
      className={`${styles.interTitle__bodyText} ${
        italic && styles.interTitle__italicizedText
      } ${capitalize && styles.interTitle__capitalizedText} ${
        styles.interTitle__animatedFadeIn
      }`}
    >{`${text}`}</h2>
  );
};

export const ArrowLink = ({
  backButton = false,
  lightVariant = false,
  onClick,
}: ArrowLinkProps) => {
  return (
    <div
      className={
        backButton
          ? `${styles.arrowLink} ${styles.arrowLinkBack} ${
              lightVariant && styles.arrowLink__light
            }`
          : `${styles.arrowLink} ${lightVariant && styles.arrowLink__light}`
      }
      onClick={onClick}
    >
      ➜
    </div>
  );
};

export const InterTitle = ({
  children,
  hasBackground = true,
  isLightVariant = false,
}: InterTitleProps) => {
  return (
    <div className={`${styles.container} ${styles.container__standard}`}>
      <div>
        <div className={styles.interTitleContainer}>
          <div className={`${styles.interTitle}`}>{children}</div>
          {hasBackground && (
            <img src={interTitleBackground} alt={"interTitle-background"} />
          )}
        </div>
      </div>
    </div>
  );
};

export const ClipMask = ({
  children,
  customVignette,
  hasAnimatedVignette,
  isClosed,
}: InterTitleProps) => {
  return (
    <div className={styles.clipMask}>
      <FilmGrain
        customVignette={customVignette}
        hasAnimatedVignette={hasAnimatedVignette}
        isClosed={isClosed}
      />
      {children}
    </div>
  );
};
