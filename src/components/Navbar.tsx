import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'O mnie', href: '#about' },
  { label: 'Proces', href: '#process' },
  { label: 'Kalkulator', href: '/kalkulator' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Kontakt', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();



  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const handleAnchorClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    setIsOpen(false);

    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const el = document.querySelector(href);
        el?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.querySelector(href);
      el?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm border-b border-gray-100"
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between lg:h-20">
          <Link to="/" className="flex items-center">
            <img
              src="/leasing-logo.jpg"
              alt="Perfect Leasing"
              className="h-12 w-auto lg:h-[54px]"
            />
          </Link>

          <div className="hidden md:flex md:items-center md:gap-8">
            {navLinks.map((link) =>
              link.href.startsWith('/') ? (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-sm font-medium text-secondary transition-colors hover:text-accent"
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleAnchorClick(e, link.href)}
                  className="text-sm font-medium text-secondary transition-colors hover:text-accent"
                >
                  {link.label}
                </a>
              )
            )}
            <a
              href="#contact"
              onClick={(e) => handleAnchorClick(e, '#contact')}
              className="rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-blue-700"
            >
              Darmowa Konsultacja
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-lg p-2 text-primary transition-colors hover:bg-gray-100 md:hidden"
            aria-label={isOpen ? 'Zamknij menu' : 'Otwórz menu'}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="border-t border-gray-100 bg-white/95 backdrop-blur-lg md:hidden">
            <div className="space-y-1 px-2 pb-4 pt-2">
              {navLinks.map((link) =>
                link.href.startsWith('/') ? (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="block rounded-lg px-3 py-2.5 text-base font-medium text-secondary transition-colors hover:bg-muted hover:text-accent"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleAnchorClick(e, link.href)}
                    className="block rounded-lg px-3 py-2.5 text-base font-medium text-secondary transition-colors hover:bg-muted hover:text-accent"
                  >
                    {link.label}
                  </a>
                )
              )}
              <a
                href="#contact"
                onClick={(e) => handleAnchorClick(e, '#contact')}
                className="mt-2 block rounded-lg bg-accent px-3 py-2.5 text-center text-base font-semibold text-white transition-all hover:bg-blue-700"
              >
                Darmowa Konsultacja
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
