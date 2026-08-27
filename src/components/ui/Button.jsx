import { cn } from "@/lib/utils";

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
  ...props
}) {
  const base =
    "min-h-[44px] px-6 inline-flex items-center justify-center rounded-full text-sm font-medium transition-all hover:scale-[1.03] hover:shadow-[0_0_20px_rgba(139,92,246,0.25)]";

  const variants = {
    primary: "bg-white text-black",
    secondary: "border border-[#1F1F1F] text-white hover:border-[#8B5CF6]",
  };

  return (
    <a
      href={href}
      className={cn(base, variants[variant], className)}
      {...props}
    >
      {children}
    </a>
  );
}