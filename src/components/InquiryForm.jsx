import { useState } from 'react';
import { useForm } from 'react-hook-form';

export function InquiryForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const formData = new URLSearchParams();
      formData.append('form-name', 'inquiry');
      Object.entries(data).forEach(([key, value]) => {
        formData.append(key, value);
      });

      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: formData.toString(),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        alert('Something went wrong. Please try again or call directly.');
      }
    } catch (error) {
      alert('Something went wrong. Please try again or call directly.');
    }
  };

  const inputClass =
    'w-full border border-mist bg-bone text-navy text-sm px-4 py-3 outline-none focus:border-brass transition-colors placeholder:text-slate/50 rounded-sm';
  const labelClass = 'block text-xs font-medium text-slate tracking-wide uppercase mb-1.5';
  const errorClass = 'text-red-500 text-xs mt-1';

  if (submitted) {
    return (
      <div className="flex items-center justify-center py-16 px-8 border border-mist bg-bone text-center">
        <div>
          <div className="w-10 h-10 rounded-full bg-brass/15 flex items-center justify-center mx-auto mb-4">
            <div className="w-5 h-0.5 bg-brass rotate-45 translate-x-0.5" />
          </div>
          <p className="font-serif text-xl font-medium text-navy mb-2">Message received</p>
          <p className="text-slate text-sm">Thanks — we'll be in touch within 24 hours.</p>
        </div>
      </div>
    );
  }

  return (
    <form
      name="inquiry"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-5"
    >
      <input type="hidden" name="form-name" value="inquiry" />
      <p hidden>
        <label>Don't fill this out: <input name="bot-field" /></label>
      </p>
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className={labelClass}>Name *</label>
          <input
            {...register('name', { required: 'Name is required' })}
            placeholder="Your full name"
            className={inputClass}
          />
          {errors.name && <p className={errorClass}>{errors.name.message}</p>}
        </div>
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
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className={labelClass}>Phone</label>
          <input
            {...register('phone')}
            type="tel"
            placeholder="(optional)"
            className={inputClass}
          />
        </div>
        <div>
          <label className={labelClass}>Best time to call</label>
          <select {...register('callTime')} className={inputClass}>
            <option value="">Select a time</option>
            <option value="morning">Morning</option>
            <option value="afternoon">Afternoon</option>
            <option value="evening">Evening</option>
            <option value="anytime">Anytime</option>
          </select>
        </div>
      </div>

      <div>
        <label className={labelClass}>Message *</label>
        <textarea
          {...register('message', { required: 'Message is required' })}
          rows={5}
          placeholder="I'd like to learn more about Longshanks..."
          className={`${inputClass} resize-none`}
        />
        {errors.message && <p className={errorClass}>{errors.message.message}</p>}
      </div>

      <button
        type="submit"
        className="w-full bg-brass text-navy text-sm font-medium py-3.5 hover:bg-brass-dark transition-colors rounded-sm cursor-pointer"
      >
        Send inquiry
      </button>
    </form>
  );
}
