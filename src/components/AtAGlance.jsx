import { motion } from 'framer-motion';
import { StatCard } from './ui/StatCard';
import { SectionDivider } from './ui/SectionDivider';
import { stats } from '../data/listing';

export function AtAGlance() {
  return (
    <section className="bg-cream py-20">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <SectionDivider />
          <p className="text-brass text-xs font-medium tracking-[0.2em] uppercase text-center mb-3">
            At a glance
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-navy text-center mb-8">
            The numbers
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 divide-x divide-y divide-mist border border-mist">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.07 }}
            >
              <StatCard label={stat.label} value={stat.value} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
