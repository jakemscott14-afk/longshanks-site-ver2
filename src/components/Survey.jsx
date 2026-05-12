import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { SectionDivider } from './ui/SectionDivider';

export function Survey() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const formData = new URLSearchParams();
      formData.append('form-name', 'survey-request');
      Object.entries(data).forEach(([key, value]) => {
        formData.append(key, value);
      });

      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: formData.toString(),
      });

      if (response.ok) {
        const link = document.createElement('a');
        link.href = '/Survey_Report_for_LONGSHANKS.pdf';
        link.download = 'Survey_Report_for_LONGSHANKS.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        setSubmitted(true);
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch (error) {
      alert('Something went wrong. Please try again.');
    }
  };

  const inputClass =
    'w-full border border-mist bg-bone text-navy text-sm px-4 py-3 outline-none focus:border-brass transition-colors placeholder:text-slate/50 rounded-sm';
  const labelClass = 'block text-xs font-medium text-slate tracking-wide uppercase mb-1.5';
  const errorClass = 'text-red-500 text-xs mt-1';

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
            Get the survey report
          </h2>
          <p className="text-slate leading-relaxed max-w-2xl mx-auto">
            An independent condition and value survey was completed in August 2024 by Ronald E. Varg, SAMS AMS.
            The full report is available to qualified buyers. Provide your email and phone and we'll send the PDF immediately.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.15 }}
          className="max-w-lg mx-auto"
        >
          {submitted ? (
            <div className="flex items-center justify-center py-16 px-8 border border-mist bg-bone text-center">
              <div>
                <p className="font-serif text-xl font-medium text-navy mb-2">Survey on its way</p>
                <p className="text-slate text-sm">Thanks — the survey is downloading now. We'll be in touch shortly.</p>
              </div>
            </div>
          ) : (
            <form
              name="survey-request"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-5 border border-mist bg-bone p-8"
            >
              <input type="hidden" name="form-name" value="survey-request" />
              <p hidden>
                <label>Don't fill this out: <input name="bot-field" /></label>
              </p>

              <div>
                <label className={labelClass}>Email *</label>
                <input
                  {...register('email', {
                    required: 'Email is required',
                    pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Invalid email' },
                  })}
                  type="email"
                  placeholder="you@example.com"
                  className={inputClass}
                />
                {errors.email && <p className={errorClass}>{errors.email.message}</p>}
              </div>

              <div>
                <label className={labelClass}>Phone *</label>
                <input
                  {...register('phone', { required: 'Phone is required' })}
                  type="tel"
                  placeholder="(843) 555-0100"
                  className={inputClass}
                />
                {errors.phone && <p className={errorClass}>{errors.phone.message}</p>}
              </div>

              <button
                type="submit"
                className="w-full bg-brass text-navy text-sm font-medium py-3.5 hover:bg-brass-dark transition-colors rounded-sm cursor-pointer"
              >
                Send me the survey
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
