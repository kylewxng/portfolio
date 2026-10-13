export default function Chips({ items, className = "" }: { items: string[]; className?: string }) {
  return (
    <ul className={`flex flex-wrap gap-1.5 ${className}`}>
      {items.map((item) => (
        <li
          key={item}
          className="rounded border border-border bg-surface-2 px-2 py-0.5 font-mono text-[11px] text-muted"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
