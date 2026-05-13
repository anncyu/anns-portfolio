interface TagPillProps {
  label: string;
}

export default function TagPill({ label }: TagPillProps) {
  return <span className="pill">{label}</span>;
}
