import { decode } from "html-entities";
import React from "react";

function EmojiButton({
  index,
  emoji,
  handleClick,
  selectedCardEntry,
  matchedCardEntry,
}) {
  const btnContent =
    selectedCardEntry || matchedCardEntry ? decode(emoji.htmlCode[0]) : "?";

  const btnStyle = matchedCardEntry
    ? "btn--emoji__back--matched"
    : selectedCardEntry
    ? "btn--emoji__back--selected"
    : "";

  const btnAria = matchedCardEntry
    ? `${decode(emoji.name)}. Matched.`
    : selectedCardEntry
    ? `${decode(emoji.name)}. Not matched yet.`
    : "Card upside down.";

  return (
    <button
      className={`btn btn--emoji ${btnStyle}`}
      onClick={selectedCardEntry ? null : handleClick}
      disabled={matchedCardEntry}
      aria-label={`Position ${index + 1}: ${btnAria}`}
      aria-live="polite"
    >
      {btnContent}
    </button>
  );
}

export default EmojiButton;
