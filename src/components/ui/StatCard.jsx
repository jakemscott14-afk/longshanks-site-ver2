export function StatCard({ label, value }) {
  return (
    <div className="flex flex-col items-center text-center py-8 px-4">
      <span className="text-brass text-xs font-sans font-medium tracking-[0.2em] uppercase mb-3">
        {label}
      </span>
      <span className={`font-serif font-medium text-navy leading-tight mb-3 ${value.length > 20 ? 'text-xl' : 'text-3xl'}`}>
        {value}
      </span>
      <div className="h-px w-8 bg-brass" />
    </div>
  );
}
