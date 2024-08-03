"use client";

import React, { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-solarizedlight.css";
import "prismjs/plugins/line-numbers/prism-line-numbers.css";
import "prismjs/plugins/line-highlight/prism-line-highlight.css";
import "prismjs/plugins/match-braces/prism-match-braces.css";

if (typeof window !== "undefined") {
  require("prismjs/plugins/line-numbers/prism-line-numbers");
  require("prismjs/plugins/match-braces/prism-match-braces");
}

const ClientCodeBlock = ({
  code,
  language,
}: {
  code: string;
  language: string;
}) => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <pre
      className={`language-${language} line-numbers whitespace-pre-wrap break-words w-full px-8 h-[500px] overflow-y flex flex-1`}
    >
      <code className={`language-${language}`}>{code}</code>
    </pre>
  );
};

export default ClientCodeBlock;
