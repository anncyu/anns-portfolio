import { ChevronDown } from "lucide-react";

interface SectionHeaderProps {
  label: string;
  showArrow?: boolean;
}

export default function SectionHeader({
  label,
  showArrow = false,
}: SectionHeaderProps) {
  return (
    <div className="flex flex-col items-center gap-4 pb-10 border-b border-border">
      <div className="flex items-center gap-4 w-full">
        <div className="h-px flex-1 bg-border" />
        <span className="label-tag text-ink-faint">{label}</span>
        <div className="h-px flex-1 bg-border" />
      </div>
      {showArrow && (
        <ChevronDown size={15} className="text-ink-faint" />
      )}
    </div>
  );
}
