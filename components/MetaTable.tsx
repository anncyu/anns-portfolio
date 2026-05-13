interface MetaItem {
  label: string;
  value: string;
}

interface MetaTableProps {
  items: MetaItem[];
}

export default function MetaTable({ items }: MetaTableProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 border-y border-border my-10">
      {items.map((item) => (
        <div key={item.label}>
          <p className="label-tag text-ink-faint mb-2">{item.label}</p>
          <p className="text-sm text-ink font-medium font-body leading-relaxed">
            {item.value}
          </p>
        </div>
      ))}
    </div>
  );
}
