import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Button } from './ui/Button';
import { meta } from '../data/listing';

export function Hero() {
  return (
    <section
      id="hero"
      className="relative h-screen min-h-[600px] flex items-end overflow-hidden"
    >
      {/* Background video */}
      <video
        ref={(el) => { if (el) el.playbackRate = 0.3; }}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        poster="/images/hero-poster.jpg"
      >
        <source src="/images/hero.mp4" type="video/mp4" />
        {/* Fallback for browsers that don't support video */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/hero.jpg')" }}
        />
      </video>
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-linear-to-t from-navy-deep/90 via-navy-deep/30 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 w-full pb-16 md:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
        >
          <p className="text-brass text-xs font-medium tracking-[0.2em] uppercase mb-3">
            {meta.year} · Rebuilt 2004 · {meta.make} · Hull #{meta.hull}
          </p>
          <h1 className="font-serif text-6xl md:text-8xl font-medium text-white leading-none mb-4">
            {meta.name}
          </h1>
          <p className="text-white/75 text-lg md:text-xl font-light mb-6 max-w-md">
            {meta.tagline}
          </p>
          <div className="inline-block bg-brass/20 border border-brass/50 text-white px-4 py-2 text-sm font-medium rounded-sm mb-8">
            {meta.price}
          </div>
          <div className="flex flex-wrap gap-3">
            <a href="#overview">
              <Button variant="primary">View details</Button>
            </a>
            <a href="#survey">
              <Button variant="ghost">Get the survey</Button>
            </a>
            <a
              href="https://knot10.com/profile/captain-kyle-benvenuto"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="ghost">Contact broker</Button>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/50"
        animate={{ y: [0, 6, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
      >
        <ChevronDown size={24} />
      </motion.div>
    </section>
  );
}