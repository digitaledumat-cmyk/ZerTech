'use client';

import { useState } from 'react';
import type { HomeContent } from '@/lib/home-content';
import { DEFAULT_COUNTRY, EXTRA_COUNTRY_CODES, WHATSAPP_NUMBER } from '@/lib/translations';
import { WhatsAppIcon } from './HomeIcons';

interface Props {
  trial: HomeContent['trial'];
  packs: HomeContent['pricing']['packs'];
}

export default function HomeTrialForm({ trial, packs }: Props) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [countryCode, setCountryCode] = useState(DEFAULT_COUNTRY.code);
  const [selectedPack, setSelectedPack] = useState('');

  const inputClass =
    'w-full rounded-xl border border-white/15 bg-gradient-to-br from-white/10 to-transparent px-4 py-3 text-zinc-100 outline-none backdrop-blur-xl transition-colors focus:border-blue-600/50 focus:ring-1 focus:ring-blue-600/30';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const packName = packs.find((p) => p.id === selectedPack)?.name ?? trial.packPlaceholder;
    const message = [
      trial.whatsappIntro,
      '',
      `${trial.firstName}: ${firstName}`,
      `${trial.lastName}: ${lastName}`,
      `${trial.phone}: ${countryCode}${phone}`,
      `${trial.pack}: ${packName}`,
    ].join('\n');

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
      '_blank',
      'noopener,noreferrer',
    );
  };

  const countryOptions = [
    DEFAULT_COUNTRY,
    ...EXTRA_COUNTRY_CODES.filter((c) => c.code !== DEFAULT_COUNTRY.code),
  ];

  return (
    <section id="trial" className="px-4 py-16 md:px-8 md:py-20">
      <div className="mx-auto max-w-3xl">
        <div className="pricing-card mb-8 p-6 md:p-8">
          <h2 className="title-gradient text-xl font-bold md:text-2xl">{trial.guideTitle}</h2>
          <div className="mt-5 space-y-4">
            {trial.guideParagraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 40)} className="text-sm leading-relaxed text-zinc-400 md:text-base">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <div className="pricing-card p-6 md:p-8">
          <h2 className="title-gradient text-2xl font-bold">{trial.title}</h2>
          <p className="mt-2 text-sm leading-relaxed text-zinc-400">{trial.subtitle}</p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="firstName" className="mb-1.5 block text-sm text-zinc-400">
                  {trial.firstName}
                </label>
                <input
                  id="firstName"
                  type="text"
                  required
                  autoComplete="given-name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="lastName" className="mb-1.5 block text-sm text-zinc-400">
                  {trial.lastName}
                </label>
                <input
                  id="lastName"
                  type="text"
                  required
                  autoComplete="family-name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className={inputClass}
                />
              </div>
            </div>

            <div>
              <label htmlFor="phone" className="mb-1.5 block text-sm text-zinc-400">
                {trial.phone}
              </label>
              <div className="flex gap-2">
                <select
                  value={countryCode}
                  onChange={(e) => setCountryCode(e.target.value)}
                  className="rounded-xl border border-white/15 bg-gradient-to-br from-white/10 to-transparent px-3 py-3 text-sm text-zinc-100 outline-none backdrop-blur-xl focus:border-blue-600/50"
                  aria-label="Country code"
                >
                  {countryOptions.map((c) => (
                    <option key={c.code} value={c.code} className="bg-zinc-900">
                      {c.label}
                    </option>
                  ))}
                </select>
                <input
                  id="phone"
                  type="tel"
                  required
                  autoComplete="tel-national"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
                  placeholder="6XX XXX XXX"
                  className={`flex-1 ${inputClass}`}
                />
              </div>
            </div>

            <div>
              <label htmlFor="pack" className="mb-1.5 block text-sm text-zinc-400">
                {trial.pack}
              </label>
              <select
                id="pack"
                required
                value={selectedPack}
                onChange={(e) => setSelectedPack(e.target.value)}
                className={inputClass}
              >
                <option value="" disabled className="bg-zinc-900">
                  {trial.packPlaceholder}
                </option>
                {packs.map((pack) => (
                  <option key={pack.id} value={pack.id} className="bg-zinc-900">
                    {pack.name} — {pack.price} {pack.currency}
                  </option>
                ))}
              </select>
            </div>

            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2.5 rounded-xl bg-emerald-600 py-4 font-semibold text-white shadow-[0_4px_24px_rgba(5,150,105,0.4)] transition-all hover:bg-emerald-700 hover:shadow-[0_6px_32px_rgba(5,150,105,0.5)]"
            >
              <WhatsAppIcon />
              {trial.submit}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
