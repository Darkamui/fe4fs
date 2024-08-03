import { CardFlip } from "@/components/card-flip";
import { TextShuffle } from "@/components/text-shuffle";
import { Header } from "./header";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-start p-12">
      <div className="max-w-screen-xl flex w-full items-center justify-center flex-col">
        <TextShuffle />
        <Header />
      </div>
      <CardFlip />
    </main>
  );
}
