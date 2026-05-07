import { motion } from 'framer-motion';
import { SectionDivider } from './ui/SectionDivider';
import { survey } from '../data/listing';

export function Overview() {
  return (
    <section id="overview" className="bg-bone py-20">
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
            Overview
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-navy">
            About Longshanks
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
          >
            <p className="text-slate leading-relaxed mb-5">
              Longshanks is a 1972 Hatteras 42 Convertible, hull #319, built in New Bern, North Carolina — during what many consider the golden era of American sportfishing yacht construction. Hatteras Yachts had not yet been absorbed into larger conglomerates, and the craftsmanship shows in every laminate, every frame, every fitting.
            </p>
            <p className="text-slate leading-relaxed mb-5">
              In 2004 she was extensively rebuilt and upgraded — a top-to-bottom refit that included repowering with Detroit Diesel J&T Naturals at 310 HP each, system overhauls, and a number of thoughtful custom modifications. The classic Jimmys are the stuff of legend: simple, rebuildable, and nearly indestructible with proper care. At 3,300 and 3,800 hours respectively, they are well within a normal working life for this engine family.
            </p>
            <p className="text-slate leading-relaxed">
              Currently berthed in Beaufort, South Carolina, Longshanks is ready for inspection and sea trial. A full independent survey was completed August 2024 and is available without restriction to qualified buyers.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
          >
            <div className="aspect-4/3 overflow-hidden border border-mist mb-10">
              <img
                src="/images/overview.jpg"
                alt="Longshanks at dock"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Pull quote */}
            <blockquote className="border-l-2 border-brass pl-6">
              <p className="font-serif text-xl md:text-2xl font-medium text-navy leading-snug mb-3">
                "{survey.pullQuote}"
              </p>
              <cite className="text-slate text-sm not-italic">
                — {survey.pullQuoteAttribution}
              </cite>
            </blockquote>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
