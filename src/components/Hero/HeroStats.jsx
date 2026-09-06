const stats = [
  { label: "Live Products", value: "6" },
  { label: "Full-Stack + CLI", value: "" },
  // { label: "Free-Tier Deployed", value: "100%" },
];

export default function HeroStats() {
  return (
    <div className="flex flex-wrap items-center gap-x-6 gap-y-2 max-w-md text-sm">
      {stats.map((stat, i) => (
        <div key={stat.label} className="flex items-center gap-6">
          <div className="flex items-baseline gap-1.5">
            {stat.value && (
              <span className="font-heading font-bold text-lg bg-clip-text text-transparent bg-[linear-gradient(135deg,#8B5CF6_0%,#A78BFA_100%)]">
                {stat.value}
              </span>
            )}
            <span className="text-[#A1A1AA]">{stat.label}</span>
          </div>
          {i < stats.length - 1 && (
            <span className="text-[#1F1F1F]" aria-hidden="true">
              ·
            </span>
          )}
        </div>
      ))}
    </div>
  );
}