import { useLayoutEffect, useRef } from 'react';

import '../../styles/components/common/SectionTitle.css';

type Props = {
  title: string;
  id?: string;
  align?: 'center' | 'left';
}

export const SectionTitle = ({ title, id, align = 'center' }: Props) => {
  const ref = useRef<HTMLDivElement>(null);

  // Bar fills left to right (and the title rises a little) once, when it scrolls into view.
  useLayoutEffect(() => {
    const el = ref.current;
    if (!el || !('IntersectionObserver' in window)) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    el.dataset.reveal = 'pending';
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      el.dataset.reveal = 'done';
      observer.disconnect();
    }, { threshold: 0.6 });
    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return (
  <div ref={ref} className={`section-title section-title--${align}`}>
    <h2 id={id} className="section-heading">{title}</h2>
    <span className="section-bar" aria-hidden="true" />
  </div>
);
};
