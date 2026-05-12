import { motion } from 'framer-motion';
import { ShieldCheck, Settings2, Layers, Radar, Wrench, Anchor } from 'lucide-react';
import { SectionDivider } from './ui/SectionDivider';
import { highlights } from '../data/listing';

const iconMap = { ShieldCheck, Settings2, Layers, Radar, Wrench, Anchor };

export function Highlights() {
  return (
    <section className="bg-cream py-20">
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
            Highlights
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-navy">
            Why Longshanks
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-mist border border-mist">
          {highlights.map((item, i) => {
            const Icon = iconMap[item.icon];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.08 }}
                className="bg-cream p-8"
              >
                <div className="text-brass mb-4">
                  {Icon && <Icon size={22} strokeWidth={1.5} />}
                </div>
                <h3 className="font-serif text-lg font-medium text-navy mb-2">{item.title}</h3>
                <p className="text-slate text-sm leading-relaxed">{item.body}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}