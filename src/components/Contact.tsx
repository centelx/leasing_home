import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import Button from './ui/Button';

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

export default function Contact() {
  const [status, setStatus] = useState<FormStatus>('idle');
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append('access_key', '4343a106-203d-4279-9980-da05e02f360f');

    setStatus('loading');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        form.reset();
        window.location.href = 'https://leasing-alx.pages.dev/';
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="bg-white py-16 lg:py-24">
      <div ref={sectionRef} className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:flex lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="lg:w-1/2"
          >
            <span className="text-sm font-semibold uppercase tracking-widest text-accent">
              Kontakt
            </span>
            <h2 className="mt-3 text-3xl font-bold text-primary sm:text-4xl">
              Porozmawiajmy o Twoich potrzebach
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-secondary">
              Wypełnij formularz, a oddzwonię w ciągu kilku godzin. Pierwsza
              konsultacja jest bezpłatna i niezobowiązująca.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                  <Send className="h-5 w-5 text-accent" />
                </div>
                <span className="text-secondary">
                  Odpowiedź w ciągu kilku godzin
                </span>
              </div>
            </div>

            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80"
              alt="Konsultacja biznesowa"
              className="mt-10 hidden rounded-2xl object-cover shadow-lg lg:block"
              width={600}
              height={400}
              loading="lazy"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-10 lg:mt-0 lg:w-1/2"
          >
            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center rounded-2xl border border-green-100 bg-green-50 p-12 text-center">
                <CheckCircle className="h-16 w-16 text-green-500" />
                <h3 className="mt-4 text-2xl font-bold text-primary">
                  Wiadomość wysłana!
                </h3>
                <p className="mt-2 text-secondary">
                  Dziękuję za kontakt. Odezwę się najszybciej jak to możliwe.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-6 text-sm font-medium text-accent underline-offset-4 hover:underline"
                >
                  Wyślij kolejną wiadomość
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-2xl border border-gray-100 bg-white p-6 shadow-lg sm:p-8"
              >
                <input
                  type="checkbox"
                  name="botcheck"
                  className="hidden"
                  style={{ display: 'none' }}
                />

                <div className="space-y-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-1.5 block text-sm font-medium text-primary"
                    >
                      Imię i nazwisko
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full rounded-lg border border-gray-200 bg-muted px-4 py-3 text-primary outline-none transition-all focus:border-accent focus:ring-2 focus:ring-accent/20"
                      placeholder="Jan Kowalski"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-1.5 block text-sm font-medium text-primary"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full rounded-lg border border-gray-200 bg-muted px-4 py-3 text-primary outline-none transition-all focus:border-accent focus:ring-2 focus:ring-accent/20"
                      placeholder="jan@firma.pl"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-1.5 block text-sm font-medium text-primary"
                    >
                      Telefon
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full rounded-lg border border-gray-200 bg-muted px-4 py-3 text-primary outline-none transition-all focus:border-accent focus:ring-2 focus:ring-accent/20"
                      placeholder="+48 123 456 789"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="mb-1.5 block text-sm font-medium text-primary"
                    >
                      Wiadomość
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      className="w-full resize-none rounded-lg border border-gray-200 bg-muted px-4 py-3 text-primary outline-none transition-all focus:border-accent focus:ring-2 focus:ring-accent/20"
                      placeholder="Opisz krótko czego szukasz..."
                    />
                  </div>
                </div>

                {status === 'error' && (
                  <div className="mt-4 flex items-center gap-2 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-600">
                    <AlertCircle className="h-4 w-4 shrink-0" />
                    Wystąpił błąd. Spróbuj ponownie lub skontaktuj się
                    bezpośrednio.
                  </div>
                )}

                <Button
                  type="submit"
                  isLoading={status === 'loading'}
                  className="mt-6 w-full"
                  size="lg"
                >
                  Wyślij wiadomość
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
