'use client';

import { useState } from 'react';
import type { Translations } from '@/lib/types';
import {
  WHATSAPP_NUMBER,
  COUNTRY_CODES,
  EXTRA_COUNTRY_CODES,
} from '@/lib/translations';
import type { Lang } from '@/lib/types';

interface TrialFormProps {
  t: Translations['trial'];
  packs: Translations['pricing']['packs'];
  lang: Lang;
}

export default function TrialForm({ t, packs, lang }: TrialFormProps) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [countryCode, setCountryCode] = useState(COUNTRY_CODES[lang].code);
  const [selectedPack, setSelectedPack] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const packName =
      packs.find((p) => p.id === selectedPack)?.name || t.packPlaceholder;

    const message = [
      t.whatsappIntro,
      '',
      `${t.firstName}: ${firstName}`,
      `${t.lastName}: ${lastName}`,
      `${t.phone}: ${countryCode}${phone}`,
      `${t.pack}: ${packName}`,
    ].join('\n');

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="trial" className="px-4 py-16 md:px-8">
      <div className="mx-auto max-w-xl">
        <div className="glass-card p-8">
          <h2 className="text-2xl font-bold text-zinc-100">{t.title}</h2>
          <p className="mt-2 text-sm text-zinc-400">{t.subtitle}</p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="firstName" className="mb-1.5 block text-sm text-zinc-400">
                  {t.firstName}
                </label>
                <input
                  id="firstName"
                  type="text"
                  required
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-zinc-100 outline-none transition-colors focus:border-primary/50 focus:ring-1 focus:ring-primary/30"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="mb-1.5 block text-sm text-zinc-400">
                  {t.lastName}
                </label>
                <input
                  id="lastName"
                  type="text"
                  required
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-zinc-100 outline-none transition-colors focus:border-primary/50 focus:ring-1 focus:ring-primary/30"
                />
              </div>
            </div>

            <div>
              <label htmlFor="phone" className="mb-1.5 block text-sm text-zinc-400">
                {t.phone}
              </label>
              <div className="flex gap-2">
                <select
                  value={countryCode}
                  onChange={(e) => setCountryCode(e.target.value)}
                  className="rounded-xl border border-white/10 bg-white/5 px-3 py-3 text-zinc-100 outline-none focus:border-primary/50"
                  aria-label="Indicatif pays"
                >
                  {[COUNTRY_CODES[lang], ...EXTRA_COUNTRY_CODES.filter((c) => c.code !== COUNTRY_CODES[lang].code)].map(
                    (c) => (
                      <option key={c.code} value={c.code} className="bg-zinc-900">
                        {c.label}
                      </option>
                    ),
                  )}
                </select>
                <input
                  id="phone"
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
                  placeholder="6XX XXX XXX"
                  className="flex-1 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-zinc-100 outline-none transition-colors focus:border-primary/50 focus:ring-1 focus:ring-primary/30"
                />
              </div>
            </div>

            <div>
              <label htmlFor="pack" className="mb-1.5 block text-sm text-zinc-400">
                {t.pack}
              </label>
              <select
                id="pack"
                required
                value={selectedPack}
                onChange={(e) => setSelectedPack(e.target.value)}
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-zinc-100 outline-none focus:border-primary/50"
              >
                <option value="" disabled className="bg-zinc-900">
                  {t.packPlaceholder}
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
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] py-4 font-semibold text-white transition-all hover:bg-[#20bd5a] hover:shadow-lg hover:shadow-[#25D366]/25"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.881 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              {t.submit}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
