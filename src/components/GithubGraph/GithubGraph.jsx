"use client";

import useGithubContributions from "@/hooks/useGithubContributions";

const LEVEL_COLORS = [
  "#151515", // level 0 - no contributions
  "#3D2A5C",
  "#5B3A8C",
  "#7C4FCC",
  "#A78BFA", // level 4 - highest
];

export default function GithubGraph() {
  const { loading, error, weeks, totalContributions } =
    useGithubContributions();

  if (loading) {
    return (
      <div className="rounded-xl border border-[#1F1F1F] bg-[#0D0D0D] p-6 h-[140px] flex items-center justify-center">
        <span className="text-sm text-[#A1A1AA]">Loading GitHub activity…</span>
      </div>
    );
  }

  if (error || weeks.length === 0) {
    return (
      <div className="rounded-xl border border-[#1F1F1F] bg-[#0D0D0D] p-6 h-[140px] flex items-center justify-center">
        <span className="text-sm text-[#A1A1AA]">
          GitHub activity unavailable right now.
        </span>
      </div>
    );
  }

  return (
    <div className="rounded-xl border border-[#1F1F1F] bg-[#0D0D0D] p-5">
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm text-[#A1A1AA]">GitHub Activity</span>
        <span className="text-sm font-medium text-white">
          {totalContributions.toLocaleString()} contributions
        </span>
      </div>

      <div className="flex gap-[3px] overflow-x-auto">
        {weeks.map((week, wi) => (
          <div key={wi} className="flex flex-col gap-[3px]">
            {week.map((day, di) => (
              <div
                key={di}
                title={`${day.date}: ${day.count} contributions`}
                className="w-[10px] h-[10px] rounded-[2px]"
                style={{ backgroundColor: LEVEL_COLORS[day.level] }}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}