import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'Czy mogę zmienić pojazd po decyzji?',
    answer:
      'Tak, jest to możliwe. Omawiamy to na etapie procesowania.',
  },
  {
    question: 'Czy można wziąć leasing na nową firmę?',
    answer:
      'Oczywiście, mamy procedury dedykowane dla nowych działalności.',
  },
  {
    question: 'Czy wszystko muszę załatwiać osobiście?',
    answer:
      'Nie, większość procesu możemy przeprowadzić zdalnie.',
  },
  {
    question: 'Jakie są koszty na start?',
    answer:
      'Zależą od przedmiotu leasingu i procedury, zazwyczaj to opłata wstępna oraz ubezpieczenie.',
  },
];

function AccordionItem({
  question,
  answer,
  isOpen,
  onToggle,
  index,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="border-b border-gray-100"
    >
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between py-5 text-left transition-colors hover:text-accent"
        aria-expanded={isOpen}
      >
        <span className="pr-4 text-lg font-semibold text-primary">
          {question}
        </span>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-secondary transition-transform duration-300 ${
            isOpen ? 'rotate-180 text-accent' : ''
          }`}
        />
      </button>
      <div
        className={`grid transition-all duration-300 ${
          isOpen ? 'grid-rows-[1fr] pb-5' : 'grid-rows-[0fr]'
        }`}
      >
        <div className="overflow-hidden">
          <p className="leading-relaxed text-secondary">{answer}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });

  return (
    <section id="faq" className="bg-muted py-16 lg:py-24">
      <div ref={sectionRef} className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-accent">
            FAQ
          </span>
          <h2 className="mt-3 text-3xl font-bold text-primary sm:text-4xl">
            Często zadawane pytania
          </h2>
        </motion.div>

        <div className="mt-12">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
