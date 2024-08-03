"use client";
import useFadeIn from "@/hooks/use-fade-in";
import React from "react";

type Props = {};

export const Header = (props: Props) => {
  return (
    <div
      className="flex flex-col items-center justify-center"
      style={useFadeIn({ delay: 0, duration: 1 })}
    >
      <h2 className="font-bold text-xl py-4">
        Welcome to FrontEnd 4 FullStack
      </h2>
      <p className="tracking-wider leading-relaxed text-lg text-balance px-6 text-muted-foreground text-center">
        A collection of pure CSS/Tailwind/ShadCN UI components for the
        full-stack developer who does not want to waste time on CSS when
        starting new projects
      </p>
    </div>
  );
};
