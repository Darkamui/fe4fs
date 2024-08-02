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
};

export const CodeModal = ({ buttonLabel, description, credit }: Props) => {
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline" size="sm">
            ({buttonLabel})
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{buttonLabel}</DialogTitle>
            <DialogDescription>
              {description}
              <br />
              {credit && (
                <p className="text-bold">All credits go to {credit}</p>
              )}
            </DialogDescription>
          </DialogHeader>
          <div className="">
            <CodeTabs />
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button>Close</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};
