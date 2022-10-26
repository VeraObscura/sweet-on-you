import React, { Fragment } from "react";
import FilmGrain from "@/shared/filmGrain";

import interTitleBackground from "@/assets/images/interTitle.jpg";
import styles from "./interTitle.module.scss";
import { Link } from "react-router-dom";

interface ChoiceTextConatinerProps {
  children: React.ReactNode;
}

interface ChoiceTextProps {
  text: string | undefined;
  link: string | null;
  onClick?: () => void;
}

interface ArrowLinkProps {
  link: string | null;
  backButton?: boolean;
  onClick?: () => void;
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
}

export const ChoiceTextContainer = ({ children }: ChoiceTextConatinerProps) => {
  return (
    <div className={styles.interTitle__choiceTextContainer}>{children}</div>
  );
};

export const ChoiceText = ({ text, link, onClick }: ChoiceTextProps) => {
  return (
    <Fragment>
      {link ? (
        <Link
          className={styles.interTitle__choiceText}
          onClick={onClick}
          to={link}
        >
          <h3 style={{ margin: "0" }}>{text && text}</h3>
        </Link>
      ) : (
        <h3 className={styles.interTitle__choiceText} onClick={onClick}>
          {text && text}
        </h3>
      )}
    </Fragment>
  );
};

export const TitleText = ({ text }: TitleTextProps) => {
  return (
    <div className={styles.interTitle__titleText}>
      <div className={styles.interTitle__titleText__text}>
        <h1>{text}</h1>
      </div>
    </div>
  );
};

export const CharacterDialogueText = ({ text }: BodyTextProps) => {
  return <h2 className={styles.interTitle__bodyText}>{`"${text}"`}</h2>;
};

export const NarrationText = ({
  text,
  italic = false,
  capitalize = false,
}: BodyTextProps) => {
  return (
    <h2
      className={`${styles.interTitle__bodyText} ${
        italic && styles.interTitle__italicizedText
      } ${capitalize && styles.interTitle__capitalizedText}`}
    >{`${text}`}</h2>
  );
};

export const ArrowLink = ({
  link,
  backButton = false,
  onClick,
}: ArrowLinkProps) => {
  return (
    <Fragment>
      {link ? (
        <Link
          className={
            backButton
              ? `${styles.interTitle__arrowLink} ${styles.interTitle__arrowLinkBack}`
              : `${styles.interTitle__arrowLink}`
          }
          to={link}
        >
          ➜
        </Link>
      ) : (
        <div
          className={
            backButton
              ? `${styles.interTitle__arrowLink} ${styles.interTitle__arrowLinkBack}`
              : `${styles.interTitle__arrowLink}`
          }
          onClick={onClick}
        >
          ➜
        </div>
      )}
    </Fragment>
  );
};

export const InterTitle = ({
  children,
  customVignette = null,
  hasAnimatedVignette = false,
  hasBackground = true,
}: InterTitleProps) => {
  return (
    <div className={styles.container}>
      <FilmGrain
        customVignette={customVignette}
        hasAnimatedVignette={hasAnimatedVignette}
      />
      <div className={styles.interTitleContainer}>
        <div className={`${styles.interTitle}`}>{children}</div>
        {hasBackground && (
          <img src={interTitleBackground} alt={"interTitle-background"} />
        )}
      </div>
    </div>
  );
};
