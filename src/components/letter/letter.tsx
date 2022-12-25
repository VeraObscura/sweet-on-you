import { useAppSelector } from "@/redux/hooks";

import { ArrowLink } from "@/components/interTitle";
import { TextType } from "@/types/slideTypes";
import styles from "./letter.module.scss";

interface LetterProps {
  paragraphs: TextType[] | undefined;
  onClick: () => void;
}

export const Letter = ({ paragraphs, onClick }: LetterProps) => {
  const language: "en" | "es" = useAppSelector(
    (state: any) => state.options.language
  );

  return (
    <div className={styles.letterContainer}>
      <div className={styles.letterContainer__letter}>
        {paragraphs &&
          paragraphs.map((para, index) => {
            return (
              <p key={"para" + index} className={styles.letter}>
                {para[language]}
              </p>
            );
          })}
        <div className={styles.letterContainer__button}>
          <ArrowLink onClick={onClick} lightVariant={true} />
        </div>
      </div>
    </div>
  );
};

export default Letter;
