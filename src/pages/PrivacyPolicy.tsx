import { motion } from 'framer-motion';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-muted pt-28 pb-16 lg:pt-36 lg:pb-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8"
      >
        <article className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm sm:p-10">
          <h1 className="text-3xl font-bold text-primary sm:text-4xl">
            Polityka Prywatności
          </h1>

          <div className="mt-8 space-y-8 text-secondary leading-relaxed">
            <section>
              <h2 className="text-xl font-semibold text-primary">
                1. Administrator Danych
              </h2>
              <p className="mt-3">
                Administratorem jest OCHNIO Consulting Mateusz Ochnio z siedzibą
                przy ul. Świderska 58 lok. 9, 21-400 Łuków, NIP: 5381858454,
                REGON: 380984364.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primary">
                2. Cel przetwarzania
              </h2>
              <p className="mt-3">
                Przetwarzamy dane (imię, nazwisko, email, telefon) w celu:
                odpowiedzi na zapytania, realizacji usługi, obowiązków prawnych.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primary">
                3. Nagrywanie rozmów
              </h2>
              <p className="mt-3">
                Rozmowy mogą być nagrywane. Brak zgody = prosimy o kontakt
                mailowy: kontakt@perfect-leasing.pl.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primary">4. Prawa</h2>
              <p className="mt-3">
                Masz prawo dostępu do danych, sprostowania, usunięcia.
              </p>
            </section>

            <hr className="border-gray-200" />

            <h2 className="text-2xl font-bold text-primary">
              Regulamin Serwisu
            </h2>

            <section>
              <h2 className="text-xl font-semibold text-primary">
                1. Ogólne
              </h2>
              <p className="mt-3">
                Strona Perfect Leasing ma charakter informacyjny.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primary">
                2. Wymagania
              </h2>
              <p className="mt-3">
                Wymagane urządzenie z dostępem do Internetu i przeglądarką.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primary">
                3. Formularz
              </h2>
              <p className="mt-3">
                Użytkownik podaje tylko prawdziwe dane. Zakaz treści bezprawnych.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primary">
                4. Odpowiedzialność
              </h2>
              <p className="mt-3">
                Treści na stronie to zaproszenie do zawarcia umowy, nie oferta w
                rozumieniu KC.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primary">
                5. Reklamacje
              </h2>
              <p className="mt-3">
                Zgłoszenia na email, rozpatrzenie w 14 dni.
              </p>
            </section>

            <p className="mt-6 font-medium text-primary">
              Działamy zgodnie z RODO.
            </p>
          </div>
        </article>
      </motion.div>
    </div>
  );
}
