import React, { Fragment } from "react";
import FilmGrain from "shared/filmGrain";

import interTitleBackground from "assets/images/interTitle.jpg";
import styles from "./interTitle.module.scss";
import { Link } from "react-router-dom";

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
}

interface InterTitleProps {
  justifyCentered?: boolean;
  children: React.ReactNode;
}

export const ChoiceText = ({ text, link, onClick }: ChoiceTextProps) => {
  return (
    <Fragment>
      {link ? (
        <Link
          className={styles.interTitle__choiceText}
          onClick={onClick}
          to={link}
        >
          {text && text}
        </Link>
      ) : (
        <h1 className={styles.interTitle__choiceText} onClick={onClick}>
          {text && text}
        </h1>
      )}
    </Fragment>
  );
};

export const TitleText = ({ text }: TitleTextProps) => {
  return <h1 className={styles.interTitle__titleText}>{text}</h1>;
};

export const CharacterDialogueText = ({ text }: BodyTextProps) => {
  return <h1 className={styles.interTitle__bodyText}>{`"${text}"`}</h1>;
};

export const NarrationText = ({ text }: BodyTextProps) => {
  return <h1 className={styles.interTitle__bodyText}>{`${text}`}</h1>;
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
  justifyCentered = false,
}: InterTitleProps) => {
  return (
    <div className={styles.interTitleContainer}>
      <FilmGrain />
      <div
        className={`${styles.interTitle} ${
          justifyCentered && styles.interTitle__justifyCentered
        }`}
      >
        {children}
      </div>
      <img src={interTitleBackground} alt={"interTitle"} />
    </div>
  );
};
