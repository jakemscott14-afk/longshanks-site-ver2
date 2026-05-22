import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { SectionDivider } from './ui/SectionDivider';
import { broker } from '../data/listing';

export function Broker() {
  return (
    <section id="contact" className="bg-bone py-20">
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
            Get in touch
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-navy">
            Get more information
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
          className="max-w-xl mx-auto"
        >
          <div className="bg-cream border border-mist rounded-md p-8 md:p-10">
            <p className="text-brass text-xs font-medium tracking-[0.2em] uppercase mb-3">
              {broker.brokerage}
            </p>
            <h3 className="font-serif text-2xl font-medium text-navy mb-4">
              Speak with Kyle Benvenuto
            </h3>
            <p className="text-slate text-sm leading-relaxed mb-8">
              {broker.blurb}
            </p>
            <a
              href={broker.profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-brass text-navy text-sm font-medium px-6 py-3 rounded-sm hover:bg-brass-dark transition-colors"
            >
              {broker.buttonLabel}
              <ExternalLink size={14} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
