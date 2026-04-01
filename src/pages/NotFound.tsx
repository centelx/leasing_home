import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-muted px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <p className="text-8xl font-black text-accent">404</p>
        <h1 className="mt-4 text-3xl font-bold text-primary">
          Strona nie znaleziona
        </h1>
        <p className="mt-3 text-lg text-secondary">
          Przepraszamy, strona której szukasz nie istnieje.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 font-semibold text-white transition-all hover:bg-blue-700"
        >
          <Home className="h-5 w-5" />
          Wróć na stronę główną
        </Link>
      </motion.div>
    </div>
  );
}
