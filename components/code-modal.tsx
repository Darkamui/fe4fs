// Modal for displaying Code snippets
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { CodeTabs } from "./code-tabs";
import Image from "next/image";

type Props = {
  buttonLabel: string;
  description: string;
  credit?: string;
  html: string;
  css?: string;
  type?: "tw" | "css";
};

const typeToImageMap = {
  tw: { src: "/tailwind-css.svg", alt: "TailwindCSS" },
  css: { src: "/css.webp", alt: "CSS" },
};

export const CodeModal = ({
  buttonLabel,
  description,
  credit,
  html,
  css,
  type,
}: Props) => {
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button
            variant="outline"
            size="sm"
            className="flex gap-1 items-center justify-center"
          >
            ({buttonLabel})
            {type && typeToImageMap[type] && (
              <Image
                src={typeToImageMap[type].src}
                alt={typeToImageMap[type].alt}
                width={20}
                height={20}
              />
            )}
          </Button>
        </DialogTrigger>
        <DialogContent className="h-full">
          <DialogHeader className="flex flex-col justify-center items-center">
            <DialogTitle>{buttonLabel}</DialogTitle>
            <DialogDescription>
              {description}
              <br />
              {credit && (
                <p className="text-bold">All credits go to {credit}</p>
              )}
            </DialogDescription>
          </DialogHeader>
          <div className="h-full w-full">
            <CodeTabs html={html} css={css} />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};
