import Image from "next/image";
import React from "react";
import { CodeModal } from "./code-modal";

const htmlContent = `
<div className="flex min-h-[500px]  items-center justify-evenly flex-col ">
      {/* Group the whole Card */}
      <div className="group h-96 w-80 [perspective:1000px]">
        {/* Card container */}
        <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
          {/* Front content container*/}
          <div className="absolute inset-0">
            <Image
              width={320}
              height={384}
              className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40"
              src="https://images.unsplash.com/photo-1562583489-bf23ec64651d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')"
              alt=""
            />
          </div>
          {/* Back content container */}
          <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
            <div className="flex flex-col h-full  w-full items-center justify-center gap-4">
              <h1 className="text-3xl font-bold">Jane Doe</h1>
              <p className="text-lg">Photographer & Art</p>
              <p className="text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </p>
              <button className="mt-2 rounded-md bg-white text-black py-1 px-2 text-sm hover:bg-neutral-900">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
`;

export const CardFlip = (props: Props) => {
  return (
    <div className="flex min-h-[500px]  items-center justify-evenly flex-col ">
      {/* Group the whole Card */}
      <div className="group h-96 w-80 [perspective:1000px]">
        {/* Card container */}
        <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
          {/* Front content container*/}
          <div className="absolute inset-0">
            <Image
              width={320}
              height={384}
              className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40"
              src="https://images.unsplash.com/photo-1562583489-bf23ec64651d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')"
              alt=""
            />
          </div>
          {/* Back content container */}
          <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
            <div className="flex flex-col h-full  w-full items-center justify-center gap-4">
              <h1 className="text-3xl font-bold">Jane Doe</h1>
              <p className="text-lg">Photographer & Art</p>
              <p className="text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </p>
              <button className="mt-2 rounded-md bg-white text-black py-1 px-2 text-sm hover:bg-neutral-900">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
      <CodeModal
        buttonLabel="Card flip animation"
        description="A simple card flip on hover animation for displaying different content"
        credit="https://www.youtube.com/watch?v=SJnRnQdjR0w"
        html={htmlContent}
      />
    </div>
  );
};
