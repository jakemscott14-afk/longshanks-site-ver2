import { motion } from 'framer-motion';
import { SectionDivider } from './ui/SectionDivider';
import { customMod } from '../data/listing';

export function CustomMod() {
  return (
    <section className="bg-cream py-20">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="text-center mb-10"
        >
          <SectionDivider />
          <p className="text-brass text-xs font-medium tracking-[0.2em] uppercase mb-3">
            Refit & custom
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-navy">
            {customMod.title}
          </h2>
        </motion.div>

        {/* Body copy — full width, centered, capped for readability */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
          className="max-w-3xl mx-auto text-center mb-14"
        >
          <p className="text-slate leading-relaxed text-base mb-4">
            {customMod.body}
          </p>
          <p className="text-slate/70 text-sm italic">{customMod.attribution}</p>
        </motion.div>

        {/* Photo grid: large featured on top, 4 thumbnails in a row below */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
          className="flex flex-col gap-3"
        >
          {/* Large featured photo */}
          <div className="border border-mist rounded-sm overflow-hidden">
            <img
              src={customMod.photos[0].src}
              alt={customMod.photos[0].alt}
              className="w-full h-auto block rounded-sm"
              loading="lazy"
            />
          </div>

          {/* 4 thumbnails: single row on sm+, 2×2 on mobile */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {customMod.photos.slice(1).map((photo, i) => (
              <div key={i} className="overflow-hidden border border-mist rounded-sm">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full object-cover rounded-sm"
                  style={{ aspectRatio: '4/3' }}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
