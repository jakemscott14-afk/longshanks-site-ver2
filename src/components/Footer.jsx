import { ExternalLink } from 'lucide-react';
import { broker, meta } from '../data/listing';

const links = [
  { label: 'Overview', href: '#overview' },
  { label: 'Specs', href: '#specs' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Survey', href: '#survey' },
  { label: 'Contact', href: '#contact' },
];

export function Footer() {
  return (
    <footer className="bg-navy text-cream">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <p className="font-serif text-xl font-medium tracking-[0.08em] mb-3">Longshanks</p>
            <p className="text-cream/60 text-sm leading-relaxed">
              1972 Hatteras 42 Convertible<br />
              Hull #319 · {meta.location}
            </p>
          </div>

          {/* Quick links */}
          <div>
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-brass mb-4">Navigation</p>
            <ul className="space-y-2">
              {links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-cream/70 hover:text-cream text-sm transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-brass mb-4">Contact</p>
            <p className="text-cream/80 text-sm font-medium mb-1">{broker.brokerage}</p>
            <p className="text-cream/60 text-sm leading-relaxed mb-5">
              {broker.blurb}
            </p>
            <a
              href={broker.profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-brass hover:text-brass-dark text-sm transition-colors"
            >
              {broker.buttonLabel}
              <ExternalLink size={12} />
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between gap-4">
          <p className="text-cream/40 text-xs">
            &copy; {new Date().getFullYear()} {broker.brokerage}. All rights reserved.
          </p>
          <p className="text-cream/40 text-xs md:text-right max-w-md">
            Listing information believed accurate but not warranted. Vessel sold as-is. Subject to prior sale.
          </p>
        </div>
      </div>
    </footer>
  );
}
