export function StatCard({ label, value }) {
  return (
    <div className="flex flex-col items-center text-center py-5 px-3">
      <span className="text-brass text-xs font-sans font-medium tracking-[0.2em] uppercase mb-2">
        {label}
      </span>
      <span className={`font-serif font-medium text-navy leading-tight mb-2 ${value.length > 20 ? 'text-xl' : 'text-3xl'}`}>
        {value}
      </span>
      <div className="h-px w-8 bg-brass" />
    </div>
  );
}
