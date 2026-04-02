import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-primary py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {/* Company info */}
          <div>
            <span className="text-lg font-bold text-white">
              Perfect Leasing
            </span>
            <p className="mt-2 text-sm text-gray-400">
              OCHNIO Consulting Mateusz Ochnio
            </p>
            <p className="mt-1 text-sm text-gray-400">
              NIP: 5381858454 &middot; REGON: 380984364
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-gray-300">
              Kontakt
            </h3>
            <ul className="mt-3 space-y-2">
              <li>
                <a
                  href="mailto:kontakt@perfect-leasing.pl"
                  className="flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-white"
                >
                  <Mail className="h-4 w-4" />
                  kontakt@perfect-leasing.pl
                </a>
              </li>
              <li>
                <a
                  href="tel:+48665317035"
                  className="flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-white"
                >
                  <Phone className="h-4 w-4" />
                  +48 665 317 035
                </a>
              </li>
              <li>
                <span className="flex items-center gap-2 text-sm text-gray-400">
                  <MapPin className="h-4 w-4 shrink-0" />
                  ul. Wyszyńskiego 38, 21-400 Łuków
                </span>
              </li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-gray-300">
              Informacje
            </h3>
            <ul className="mt-3 space-y-2">
              <li>
                <Link
                  to="/privacy-policy"
                  className="text-sm text-gray-400 transition-colors hover:text-white"
                >
                  Polityka Prywatności
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-800 pt-8 text-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Perfect Leasing — OCHNIO
            Consulting Mateusz Ochnio. Wszelkie prawa zastrzeżone.
          </p>
        </div>
      </div>
    </footer>
  );
}
