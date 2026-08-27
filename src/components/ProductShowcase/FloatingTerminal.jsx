"use client";

import { useState } from "react";

const DEFAULT_CMD = "npm run build";
const MAX_LENGTH = 50;

export default function FloatingTerminal() {
  const [cmd, setCmd] = useState(DEFAULT_CMD);

  const handleBlur = () => {
    if (cmd.trim() === "") setCmd(DEFAULT_CMD);
  };

  return (
    <div
      style={{ gridArea: "terminal" }}
      className="justify-self-end w-full max-w-[280px] rounded-xl border border-[#1F1F1F] bg-[#0D0D0D] shadow-2xl motion-safe:animate-[float_8s_ease-in-out_infinite]"
    >
      <div className="flex items-center gap-1.5 px-3 py-2 border-b border-[#1F1F1F]">
        <span className="w-2.5 h-2.5 rounded-full bg-[#2A2A2A]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#2A2A2A]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#2A2A2A]" />
      </div>
      <div className="p-3 font-mono text-[11px] leading-relaxed text-[#A1A1AA]">
        <div className="flex items-center text-white">
          <span className="mr-1 shrink-0">$</span>
          <input
            type="text"
            value={cmd}
            maxLength={MAX_LENGTH}
            onChange={(e) => setCmd(e.target.value)}
            onBlur={handleBlur}
            className="w-full bg-transparent outline-none"
            aria-label="Editable terminal command"
          />
        </div>
        <div className="mt-1 text-[#4ADE80]">✓ Music Streaming Platform</div>
        <div className="text-[#4ADE80]">✓ Camera Rental Platform</div>
        <div className="text-[#4ADE80]">✓ Translator Script</div>
      </div>
    </div>
  );
}