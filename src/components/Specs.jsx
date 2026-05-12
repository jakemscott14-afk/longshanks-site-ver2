import { motion } from 'framer-motion';
import { SectionDivider } from './ui/SectionDivider';
import { specs } from '../data/listing';

export function Specs() {
  return (
    <section id="specs" className="bg-bone py-20">
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
            Full details
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-navy">
            Specifications
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-1 gap-12 max-w-3xl mx-auto">
          {specs.map((group, gi) => (
            <motion.div
              key={group.group}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: gi * 0.1 }}
            >
              {group.group && (
                <h3 className="font-serif text-xl font-medium text-navy mb-4 pb-3 border-b border-brass/40">
                  {group.group}
                </h3>
              )}
              <table className="w-full">
                <tbody>
                  {group.rows.map((row, ri) => (
                    <tr key={row.label} className={ri < group.rows.length - 1 ? 'border-b border-mist' : ''}>
                      <td className="py-3 pr-6 text-sm text-slate w-2/5 align-top">
                        {row.label}
                      </td>
                      <td className="py-3 text-sm text-navy font-medium align-top">
                        {row.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
