"use client";

import { useState } from "react";

const DEFAULT_TEXT = "const idea = true;";
const MAX_LENGTH = 50;

export default function CodeSnippet() {
  const [text, setText] = useState(DEFAULT_TEXT);

  const handleBlur = () => {
    if (text.trim() === "") setText(DEFAULT_TEXT);
  };

  return (
    <div
      style={{ gridArea: "code" }}
      className="self-start justify-self-start w-40 rounded-lg border border-[#1F1F1F] bg-[#0D0D0D]/80 backdrop-blur-sm p-3 text-[10px] font-mono text-[#A1A1AA] shadow-lg motion-safe:animate-[float_7s_ease-in-out_infinite]"
    >
      <input
        type="text"
        value={text}
        maxLength={MAX_LENGTH}
        onChange={(e) => setText(e.target.value)}
        onBlur={handleBlur}
        className="w-full bg-transparent text-[#8B5CF6] outline-none"
        aria-label="Editable code snippet"
      />
      <div className="mt-1">if (idea) {"{"}</div>
      <div className="pl-3">buildProduct();</div>
      <div>{"}"}</div>
    </div>
  );
}