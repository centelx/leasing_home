import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { UserCheck, FileText, ShieldCheck } from 'lucide-react';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="about" className="bg-muted py-16 lg:py-24">
      <div ref={ref} className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-center lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2"
          >
            <span className="text-sm font-semibold uppercase tracking-widest text-accent">
              Dlaczego my
            </span>
            <h2 className="mt-3 text-3xl font-bold text-primary sm:text-4xl">
              Zależy mi na Twoim czasie
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-secondary">
              Nie jestem call center. Nazywam się Mateusz i działam jako Twój
              osobisty doradca. Przeprowadzam Cię od początku do końca,
              dobierając finansowanie do Twojej realnej sytuacji biznesowej,
              abyś czuł się bezpiecznie.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-secondary">
              Najprościej finansuje się zakupy na fakturę VAT 23%. Umowa
              kupna-sprzedaży lub VAT marża to zazwyczaj pożyczka leasingowa.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-12 grid gap-6 lg:mt-0 lg:w-1/2"
          >
            {[
              {
                icon: UserCheck,
                title: 'Osobisty doradca',
                description:
                  'Jeden dedykowany opiekun przez cały proces, bez przekierowań i kolejek.',
              },
              {
                icon: FileText,
                title: 'Minimum formalności',
                description:
                  'Zbieram tylko to, co naprawdę potrzebne. Bez zbędnych dokumentów.',
              },
              {
                icon: ShieldCheck,
                title: 'Transparentne warunki',
                description:
                  'Jasne zasady od początku. Żadnych ukrytych kosztów ani niespodzianek.',
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
