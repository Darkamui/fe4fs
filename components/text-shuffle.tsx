import React from "react";
import { CodeModal } from "./code-modal";

type Props = {};

const htmlContent = `<div class="wrapper">
    <div class="letters">
      <span class="letter">F</span>
      <span class="letter">E</span>
      <span class="letter">4</span>
      <span class="letter">F</span>
      <span class="letter">S</span>
    </div>
</div>
`;

const cssContent = `
.letter {
  width: 24px;
  display: inline-block;
  vertical-align: middle;
  position: relative;
  overflow: hidden;
  margin: 0 0;
  font-family: sans-serif;
  font-size: 24px;
  font-weight: 600;
  line-height: 24px;
  text-transform: uppercase;
  color: #000;
}
.letter:before {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  word-break: break-all;
  background-color: #fff;
}
.letter:nth-child(1):before {
  content: "70824";
  margin-top: -24px;
  animation-name: letter1;
  animation-duration: 1.44s;
  animation-delay: 0.28s;
  animation-fill-mode: forwards;
}
@keyframes letter1 {
  from {
    margin-top: -24px;
  }
  to {
    margin-top: 24px;
  }
}
.letter:nth-child(2):before {
  content: "57862";
  margin-top: -96px;
  animation-name: letter2;
  animation-duration: 2.944s;
  animation-delay: 0.08s;
  animation-fill-mode: forwards;
}
@keyframes letter2 {
  from {
    margin-top: -96px;
  }
  to {
    margin-top: 24px;
  }
}
.letter:nth-child(3):before {
  content: "GFILK";
  margin-top: -192px;
  animation-name: letter3;
  animation-duration: 0.9333333333s;
  animation-delay: 0.25s;
  animation-fill-mode: forwards;
}
@keyframes letter3 {
  from {
    margin-top: -192px;
  }
  to {
    margin-top: 24px;
  }
}
.letter:nth-child(4):before {
  content: "30794";
  margin-top: -168px;
  animation-name: letter4;
  animation-duration: 0.805s;
  animation-delay: 0.57s;
  animation-fill-mode: forwards;
}
@keyframes letter4 {
  from {
    margin-top: -168px;
  }
  to {
    margin-top: 24px;
  }
}
.letter:nth-child(5):before {
  content: "71964";
  margin-top: -168px;
  animation-name: letter5;
  animation-duration: 1.33s;
  animation-delay: 0.62s;
  animation-fill-mode: forwards;
}
@keyframes letter5 {
  from {
    margin-top: -168px;
  }
  to {
    margin-top: 24px;
  }
}
`;

export const TextShuffle = (props: Props) => {
  return (
    <div className="flex flex-col gap-6 items-center justify-center">
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
        credit="https://codepen.io/palmdesign/pen/bGpVKxy"
        html={htmlContent}
        css={cssContent}
        type="css"
      />
    </div>
  );
};
