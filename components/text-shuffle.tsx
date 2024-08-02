import React from "react";
import { CodeModal } from "./code-modal";

type Props = {};

export const TextShuffle = (props: Props) => {
  return (
    <div className="flex flex-col gap-6">
      <div className="wrapper">
        <div className="letters">
          <span className="letter">F</span>
          <span className="letter">E</span>
          <span className="letter">4</span>
          <span className="letter">F</span>
          <span className="letter">S</span>
        </div>
      </div>
      <CodeModal
        buttonLabel="Text Shuffle"
        description="Simple text shuffle animation. Play with delay and duration to achieve desired effect."
        credit="https://www.youtube.com/watch?v=SJnRnQdjR0w"
      />
    </div>
  );
};
