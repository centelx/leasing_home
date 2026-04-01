import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-primary py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent">
              <span className="text-xs font-bold text-white">PL</span>
            </div>
            <span className="text-lg font-bold text-white">
              Perfect Leasing
            </span>
          </div>

          <div className="flex items-center gap-6">
            <Link
              to="/privacy-policy"
              className="text-sm text-gray-400 transition-colors hover:text-white"
            >
              Polityka Prywatności
            </Link>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-800 pt-8 text-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Perfect Leasing. Wszelkie prawa
            zastrzeżone.
          </p>
        </div>
      </div>
    </footer>
  );
}
