import { useState } from 'react';
import { motion } from 'framer-motion';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import { SectionDivider } from './ui/SectionDivider';
import { gallery } from '../data/listing';

export function Gallery() {
  const [index, setIndex] = useState(-1);

  const slides = gallery.map((img) => ({
    src: img.src,
    alt: img.alt,
    description: img.caption,
  }));

  return (
    <section id="gallery" className="bg-bone py-20">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <SectionDivider />
          <p className="text-brass text-xs font-medium tracking-[0.2em] uppercase mb-3">
            Photos
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-navy">
            Gallery
          </h2>
        </motion.div>

        {/* CSS columns masonry */}
        <div className="columns-2 md:columns-3 gap-3">
          {gallery.map((img, i) => (
            <motion.button
              key={img.src}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: (i % 6) * 0.06 }}
              className="break-inside-avoid mb-3 w-full block overflow-hidden border border-mist cursor-zoom-in group"
              onClick={() => setIndex(i)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-auto block transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </motion.button>
          ))}
        </div>
      </div>

      <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={slides}
        on={{ view: ({ index: i }) => setIndex(i) }}
        styles={{
          container: { backgroundColor: 'rgba(15, 37, 64, 0.97)' },
        }}
      />
    </section>
  );
}
