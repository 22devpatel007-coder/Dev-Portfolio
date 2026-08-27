"use client";

import useGithubStats from "@/hooks/useGithubStats";

export default function HeroStats() {
  const { loading, error, publicRepos, followers } = useGithubStats();

  const stats = [
    {
      label: "Public Repos",
      value: loading ? "…" : error ? "—" : publicRepos,
    },
    {
      label: "Followers",
      value: loading ? "…" : error ? "—" : followers,
    },
    {
      label: "Product Categories",
      value: "5",
    },
  ];

  return (
    <div className="grid grid-cols-3 gap-3 max-w-md">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="rounded-lg border border-[#1F1F1F] bg-[#0D0D0D] px-3 py-4 text-center"
        >
          <div className="font-heading font-bold text-xl md:text-2xl">
            {stat.value}
          </div>
          <div className="mt-1 text-xs text-[#A1A1AA] leading-tight">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
}