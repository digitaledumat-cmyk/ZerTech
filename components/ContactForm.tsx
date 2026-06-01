'use client';

import { useState } from 'react';
import type { ContactContent } from '@/lib/pages-content';
import {
  WHATSAPP_NUMBER,
  DEFAULT_COUNTRY,
  EXTRA_COUNTRY_CODES,
} from '@/lib/translations';

interface ContactFormProps {
  t: ContactContent;
}

export default function ContactForm({ t }: ContactFormProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [countryCode, setCountryCode] = useState(DEFAULT_COUNTRY.code);
  const [subject, setSubject] = useState(t.form.subjects[0]);
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const body = [
      t.form.whatsappIntro,
      '',
      `${t.form.name}: ${name}`,
      `${t.form.email}: ${email}`,
      `${t.form.phone}: ${countryCode}${phone}`,
      `${t.form.subject}: ${subject}`,
      '',
      message,
    ].join('\n');

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(body)}`,
      '_blank',
      'noopener,noreferrer',
    );
  };

  const inputClass =
    'w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-zinc-100 outline-none transition-colors focus:border-primary/50 focus:ring-1 focus:ring-primary/30';

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="contact-name" className="mb-1.5 block text-sm text-zinc-400">
          {t.form.name}
        </label>
        <input
          id="contact-name"
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="contact-email" className="mb-1.5 block text-sm text-zinc-400">
          {t.form.email}
        </label>
        <input
          id="contact-email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="contact-phone" className="mb-1.5 block text-sm text-zinc-400">
          {t.form.phone}
        </label>
        <div className="flex gap-2">
          <select
            value={countryCode}
            onChange={(e) => setCountryCode(e.target.value)}
            className="rounded-xl border border-white/10 bg-white/5 px-3 py-3 text-zinc-100 outline-none focus:border-primary/50"
            aria-label="Indicatif"
          >
            {[DEFAULT_COUNTRY, ...EXTRA_COUNTRY_CODES.filter((c) => c.code !== DEFAULT_COUNTRY.code)].map(
              (c) => (
                <option key={c.code} value={c.code} className="bg-zinc-900">
                  {c.label}
                </option>
              ),
            )}
          </select>
          <input
            id="contact-phone"
            type="tel"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
            className={`flex-1 ${inputClass}`}
          />
        </div>
      </div>

      <div>
        <label htmlFor="contact-subject" className="mb-1.5 block text-sm text-zinc-400">
          {t.form.subject}
        </label>
        <select
          id="contact-subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className={inputClass}
        >
          {t.form.subjects.map((s) => (
            <option key={s} value={s} className="bg-zinc-900">
              {s}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="contact-message" className="mb-1.5 block text-sm text-zinc-400">
          {t.form.message}
        </label>
        <textarea
          id="contact-message"
          required
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={`${inputClass} resize-y`}
        />
      </div>

      <button
        type="submit"
        className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] py-4 font-semibold text-white transition-all hover:bg-[#20bd5a]"
      >
        {t.form.submit}
      </button>
    </form>
  );
}
