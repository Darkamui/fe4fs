import React from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { CodeTabs } from "./code-tabs";

type Props = {
  buttonLabel: string;
  description: string;
  credit?: string;
  html: string;
  css?: string;
};

export const CodeModal = ({
  buttonLabel,
  description,
  credit,
  html,
  css,
}: Props) => {
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline" size="sm">
            ({buttonLabel})
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
