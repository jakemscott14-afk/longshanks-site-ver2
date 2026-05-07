export function Button({ variant = 'primary', children, className = '', ...props }) {
  const base = 'inline-flex items-center gap-2 px-6 py-3 text-sm font-medium transition-colors duration-200 rounded-sm cursor-pointer';
  const variants = {
    primary: 'bg-brass text-navy hover:bg-brass-dark',
    ghost: 'border border-white/60 text-white hover:bg-white/10',
    outline: 'border border-brass text-brass hover:bg-brass hover:text-navy',
  };
  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
