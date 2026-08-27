export default function Pill({ children }) {
  return (
    <span className="px-4 py-2 rounded-full border border-[#1F1F1F] text-sm text-[#A1A1AA] hover:border-[#8B5CF6] hover:text-white transition-colors">
      {children}
    </span>
  );
}