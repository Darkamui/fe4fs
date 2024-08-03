// Client side code block snippets for code modal
"use client";

import React, { useEffect } from "react";
import { CardContent, CardFooter } from "./ui/card";
import { Button } from "./ui/button";
import { LucideClipboard } from "lucide-react";

// Prism highlighter & plugins
import Prism from "prismjs";
import "prismjs/themes/prism-solarizedlight.css";
import "prismjs/plugins/line-numbers/prism-line-numbers.css";
import "prismjs/plugins/match-braces/prism-match-braces.css";

if (typeof window !== "undefined") {
  require("prismjs/plugins/line-numbers/prism-line-numbers");
  require("prismjs/plugins/match-braces/prism-match-braces");
}

interface Props {
  code: string;
  language: string;
}

const ClientCodeBlock = ({ code, language }: Props) => {
  // Initialise prism highlighter
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  // Copy code snippet to clipboard
  const copyToCB = async (text: string) => {
    await navigator.clipboard.writeText(text);
  };
  return (
    <>
      <CardContent>
        <pre
          className={`language-${language} line-numbers whitespace-pre-wrap break-words w-full px-8 h-[500px] overflow-y flex flex-1`}
        >
          <code className={`language-${language}`}>{code}</code>
        </pre>
      </CardContent>
      <CardFooter className="mt-6 flex items-center justify-center">
        <Button
          className="flex items-center justify-center gap-2"
          onClick={() => copyToCB(code)}
        >
          <LucideClipboard />
          Copy to clipboard
        </Button>
      </CardFooter>
    </>
  );
};

export default ClientCodeBlock;
