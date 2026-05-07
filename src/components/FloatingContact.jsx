import { MessageCircle } from 'lucide-react';
import { broker } from '../data/listing';

export function FloatingContact() {
  return (
    <a
      href={broker.profileUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact the broker"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-brass hover:bg-brass-dark text-navy font-medium rounded-full px-5 py-3 transition-colors duration-200 hover:scale-105 shadow-none"
      style={{ transform: 'translateZ(0)' }}
    >
      <MessageCircle size={18} strokeWidth={2} />
      <span className="hidden sm:inline text-sm">Contact broker</span>
    </a>
  );
}
