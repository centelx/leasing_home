import { motion } from 'framer-motion';
import { Calculator as CalcIcon, ArrowRight } from 'lucide-react';

export default function Calculator() {
  const scrollToCalc = () => {
    document.querySelector('#kalkulator-embed')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Hero header */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 pt-28 pb-16 lg:pt-36 lg:pb-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-accent/5 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-[400px] w-[400px] rounded-full bg-blue-100/40 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-accent/10"
          >
            <CalcIcon className="h-8 w-8 text-accent" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 text-4xl font-bold tracking-tight text-primary sm:text-5xl"
          >
            Kalkulator{' '}
            <span className="text-accent">Leasingowy</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-secondary"
          >
            Sprawdź orientacyjną ratę leasingu w kilka sekund. Wybierz typ pojazdu,
            określ wartość i okres finansowania — kalkulator poda Ci wstępną wycenę.
            Dokładną ofertę przygotuję osobiście po konsultacji.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8"
          >
            <button
              onClick={scrollToCalc}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-8 py-4 text-base font-semibold text-white shadow-lg shadow-accent/25 transition-all hover:bg-blue-700 hover:shadow-xl hover:shadow-accent/30 active:scale-[0.98]"
            >
              Oblicz ratę
              <ArrowRight className="h-5 w-5" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Calculator embed */}
      <section id="kalkulator-embed" className="w-full bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-xl"
          >
            <iframe
              id="v-embed"
              src="https://embed.vehis.pl/?embed_client_token=884a3a68-b713-405a-8561-1ad21b721703"
              style={{ width: '100%', minHeight: '700px', border: 'none' }}
              title="Kalkulator VEHIS"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-8 text-center text-sm text-secondary/70"
          >
            * Wyniki kalkulatora mają charakter orientacyjny. Ostateczne warunki leasingu są ustalane indywidualnie.
          </motion.p>
        </div>
      </section>
    </>
  );
}
