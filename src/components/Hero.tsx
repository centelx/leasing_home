import { motion } from 'framer-motion';
import { ArrowRight, Shield, Clock, Handshake } from 'lucide-react';

export default function Hero() {
  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-accent/5 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-[400px] w-[400px] rounded-full bg-blue-100/40 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-32 sm:px-6 lg:flex lg:min-h-screen lg:items-center lg:gap-16 lg:px-8 lg:pt-24">
        <div className="text-center lg:text-left lg:w-1/2">


          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 text-4xl font-bold leading-tight tracking-tight text-primary sm:text-5xl lg:text-6xl"
          >
            Leasing bez korporacyjnej biurokracji.{' '}
            <span className="text-accent">
              Twój osobisty doradca biznesowy.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 mx-auto lg:mx-0 max-w-xl text-lg leading-relaxed text-secondary"
          >
            Zapomnij o masowych infoliniach. Przeprowadzę Cię przez cały proces
            – od doboru finansowania po odbiór sprzętu. Szybko, konkretnie i na
            Twoich warunkach.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-col items-center lg:items-start gap-4 sm:flex-row sm:justify-center lg:justify-start"
          >
            <button
              onClick={scrollToContact}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-8 py-4 text-base font-semibold text-white shadow-lg shadow-accent/25 transition-all hover:bg-blue-700 hover:shadow-xl hover:shadow-accent/30 active:scale-[0.98]"
            >
              Darmowa Konsultacja
              <ArrowRight className="h-5 w-5" />
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 flex flex-wrap justify-center lg:justify-start gap-8"
          >
            {[
              { icon: Clock, text: 'Decyzja nawet w 24h' },
              { icon: Shield, text: 'Bezpieczeństwo danych' },
              { icon: Handshake, text: 'Osobiste podejście' },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                  <Icon className="h-5 w-5 text-accent" />
                </div>
                <span className="text-sm font-medium text-secondary">
                  {text}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-12 lg:mt-0 lg:w-1/2"
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-accent/20 to-transparent blur-2xl" />
            <img
              src="https://plus.unsplash.com/premium_photo-1661908759956-93c29efea72b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bGVhc2luZ3xlbnwwfHwwfHx8MA%3D%3D"
              alt="Doradztwo leasingowe"
              className="relative rounded-2xl object-cover shadow-2xl"
              width={960}
              height={640}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
