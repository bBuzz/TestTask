import React from "react";
import { TermsOfUseDTO } from "../../types/test";

interface TermsOfUseProps {
  termsOfUse?: TermsOfUseDTO;
  onAccept: () => void;
}

export const TermsOfUse: React.FC<TermsOfUseProps> = ({
  termsOfUse,
  onAccept,
}) => {
  if (!termsOfUse) {
    return <div data-testid="tou-empty-container">There are no terms of use provided</div>;
  }

  return (
    <div data-testid="tou-container">
      <h1 data-testid="title-container">Terms of Use</h1>
      {termsOfUse.paragraphs.map((paragraph) => (
        <div key={paragraph.index}>
          <h3>{paragraph.title}</h3>
          {paragraph.content && <p>{paragraph.content}</p>}
          {paragraph.text && <p>{paragraph.text}</p>}
        </div>
      ))}
      <button onClick={onAccept}>Accept</button>
    </div>
  );
};
