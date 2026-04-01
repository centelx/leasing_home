import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Phone, Send, FileSearch, Ligature as FileSignature, PartyPopper } from 'lucide-react';

const steps = [
  {
    icon: Phone,
    number: '01',
    title: 'Krótki wywiad i analiza',
    description:
      'Dzwonię, sprawdzamy Twoje potrzeby i dobieramy parametry.',
  },
  {
    icon: Send,
    number: '02',
    title: 'Przekazanie danych',
    description:
      'Wysyłasz dane firmy i wybranego pojazdu/sprzętu.',
  },
  {
    icon: FileSearch,
    number: '03',
    title: 'Złożenie wniosku',
    description:
      'Idziemy tam, gdzie masz największe szanse na pozytywną decyzję.',
  },
  {
    icon: FileSignature,
    number: '04',
    title: 'Decyzja i umowa',
    description:
      'Po decyzji podpisujemy umowę (tradycyjnie lub zdalnie). Wpłacasz opłatę wstępną.',
  },
  {
    icon: PartyPopper,
    number: '05',
    title: 'Ja przejmuję stery',
    description:
      'Kontakt z dostawcą, faktura, ubezpieczenie, rejestracja – to moja praca. Ty odbierasz sprzęt.',
  },
];

export default function Process() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section id="process" className="bg-white py-16 lg:py-24">
      <div ref={ref} className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-accent">
            Jak to działa
          </span>
          <h2 className="mt-3 text-3xl font-bold text-primary sm:text-4xl">
            Jak to wygląda w praktyce
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-secondary">
            Prosty, przejrzysty proces w 5 krokach. Ty decydujesz, ja realizuję.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isLast = index === steps.length - 1;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:border-accent/20 hover:shadow-lg ${
                  isLast ? 'sm:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div className="absolute -right-4 -top-4 text-8xl font-black text-gray-50 transition-colors group-hover:text-accent/5">
                  {step.number}
                </div>
                <div className="relative">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10 transition-colors group-hover:bg-accent group-hover:text-white">
                    <Icon className="h-7 w-7 text-accent group-hover:text-white" />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-primary">
                    {step.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-secondary">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
