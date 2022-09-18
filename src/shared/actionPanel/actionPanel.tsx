import { useCallback, useEffect } from "react";

interface ActionPanelProps {
  onEsc: () => void;
}

const ActionPanel = ({ onEsc }: ActionPanelProps) => {
  const escFunction = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onEsc();
      }
    },
    [onEsc]
  );

  useEffect(() => {
    document.addEventListener("keydown", escFunction, false);

    return () => {
      document.removeEventListener("keydown", escFunction, false);
    };
  }, [escFunction]);

  return <input style={{ display: "none" }} />;
};

export default ActionPanel;
