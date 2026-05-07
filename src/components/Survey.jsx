import { motion } from 'framer-motion';
import { FileText, Download } from 'lucide-react';
import { SectionDivider } from './ui/SectionDivider';
import { Button } from './ui/Button';
import { survey } from '../data/listing';

export function Survey() {
  return (
    <section id="survey" className="bg-cream py-20">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="text-center mb-12"
        >
          <SectionDivider />
          <p className="text-brass text-xs font-medium tracking-[0.2em] uppercase mb-3">
            Documentation
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-navy mb-6">
            Independent marine survey
          </h2>
          <p className="text-slate leading-relaxed max-w-2xl mx-auto mb-8">
            {survey.description}
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href={survey.pdfPath} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="gap-2">
                <FileText size={16} />
                View survey (PDF)
              </Button>
            </a>
            <a href={survey.pdfPath} download>
              <Button variant="primary" className="gap-2">
                <Download size={16} />
                Download survey
              </Button>
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.15 }}
          className="border border-mist"
        >
          <iframe
            src={survey.pdfPath}
            title="Longshanks Marine Survey Report"
            className="w-full"
            style={{ height: '700px' }}
          />
        </motion.div>
      </div>
    </section>
  );
}
