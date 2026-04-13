import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Calculator, ArrowRight, TrendingDown, Clock, BadgePercent } from 'lucide-react';

export default function CalculatorTeaser() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="kalkulator" className="relative overflow-hidden bg-gradient-to-b from-white to-slate-50 py-16 lg:py-24">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-accent/[0.03] blur-3xl" />
      </div>

      <div ref={ref} className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-center lg:gap-16">
          {/* Left — text content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2"
          >
            <span className="text-sm font-semibold uppercase tracking-widest text-accent">
              Kalkulator leasingowy
            </span>
            <h2 className="mt-3 text-3xl font-bold text-primary sm:text-4xl">
              Oblicz swoją ratę{' '}
              <span className="text-accent">w kilka chwil</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-secondary">
              Skorzystaj z naszego kalkulatora, aby szybko poznać orientacyjną
              wysokość miesięcznej raty leasingu. Wystarczy kilka kliknięć, aby
              otrzymać wstępną wycenę — bez zobowiązań.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-secondary">
              Dokładną, spersonalizowaną ofertę przygotuję dla Ciebie osobiście
              po krótkiej konsultacji.
            </p>

            <div className="mt-8">
              <Link
                to="/kalkulator"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-8 py-4 text-base font-semibold text-white shadow-lg shadow-accent/25 transition-all hover:bg-blue-700 hover:shadow-xl hover:shadow-accent/30 active:scale-[0.98]"
              >
                Przejdź do kalkulatora
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </motion.div>

          {/* Right — feature cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-12 grid gap-6 lg:mt-0 lg:w-1/2"
          >
            {[
              {
                icon: Calculator,
                title: 'Szybka symulacja',
                description:
                  'Wstępna kalkulacja raty w kilka sekund. Wybierz parametry i zobacz wynik od razu.',
              },
              {
                icon: TrendingDown,
                title: 'Atrakcyjne warunki',
                description:
                  'Współpracuję z wieloma leasingodawcami, aby znaleźć najlepszą ofertę dla Ciebie.',
              },
              {
                icon: BadgePercent,
                title: 'Bez ukrytych kosztów',
                description:
                  'Pełna przejrzystość. Zobaczysz wszystkie składowe kosztów przed podjęciem decyzji.',
              },
            ].map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="group rounded-xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:border-accent/20 hover:shadow-md"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-accent/10 transition-colors group-hover:bg-accent/20">
                    <Icon className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary">
                      {title}
                    </h3>
                    <p className="mt-1 text-secondary">{description}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
