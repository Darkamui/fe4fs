import { CardFlip } from "@/components/card-flip";
import { TextShuffle } from "@/components/text-shuffle";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-start p-12">
      <div className="max-w-screen-xl flex w-full items-center justify-center flex-col">
        <TextShuffle />
        <h2 className="font-bold text-xl py-4">
          Welcome to FrontEnd 4 FullStack
        </h2>
        <p className="tracking-wider leading-relaxed text-lg text-balance px-6 text-muted-foreground text-center">
          A collection of pure CSS/Tailwind/ShadCN UI components for the
          full-stack developer who does not want to waste time on CSS when
          starting new projects
        </p>
      </div>
      <CardFlip />
    </main>
  );
}
