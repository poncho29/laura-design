import { useEffect, useRef, useState } from 'react';

import { SectionTitle } from '../components/common';
import { Icon } from '../components/icons';
import { projects } from '../assets/data/projects';

import '../styles/sections/ProfileSection.css';

import Figma from '../assets/imgs/img-figma-desktop.png';
import Desing from '../assets/imgs/img-desing-desktop.png';
import Photoshopt from '../assets/imgs/img-photoshop-desktop.png';
import Ligthroom from '../assets/imgs/img-ligthroom.desktop.png';
import Ilustrator from '../assets/imgs/img-ilustrator-desktop.png';

type Program = {
  name: string;
  img: string;
}

const programs: Program[] = [
  { name: 'Illustrator', img: Ilustrator },
  { name: 'Photoshop', img: Photoshopt },
  { name: 'Lightroom', img: Ligthroom },
  { name: 'InDesign', img: Desing },
  { name: 'Figma', img: Figma },
]

/** Counts from 0 to `value` once, when it first scrolls into view. The final number is always
 *  available to screen readers and reserves its width, so nothing jumps while counting. */
const CountUp = ({ value, prefix = '', duration = 1200 }: { value: number; prefix?: string; duration?: number }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
      setDisplay(value);
      return;
    }

    let raf = 0;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();
      const start = performance.now();
      const tick = (now: number) => {
        const t = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - t, 3);
        setDisplay(Math.round(value * eased));
        if (t < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    }, { threshold: 0.5 });

    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [value, duration]);

  return (
    <span ref={ref} className="count">
      <span className="visually-hidden">{prefix}{value}</span>
      <span className="count-ghost" aria-hidden="true">{prefix}{value}</span>
      <span className="count-live" aria-hidden="true">{prefix}{display}</span>
    </span>
  );
};

interface Props {
  id: string;
}

export const ProfileSection = ({ id }: Props) => {
  return (
    <section className="profile" id={id} aria-labelledby="profile-title">
      <div className="container">
        <SectionTitle id="profile-title" title="Perfil" />

        <div className="bento">
          {/* HERRAMIENTAS */}
          <article className="bento-card bento-tools">
            <h3 className="bento-label">Herramientas</h3>
            <ul className="programs">
              {programs.map((item: Program) => (
                <li key={item.name} className="program">
                  <img
                    alt=""
                    width={48}
                    height={48}
                    loading="lazy"
                    decoding="async"
                    src={item.img}
                  />
                  <span>{item.name}</span>
                </li>
              ))}
            </ul>
          </article>

          {/* EDUCACIÓN */}
          <article className="bento-card bento-edu">
            <svg className="bento-edu-icon" viewBox="0 0 64 64" aria-hidden="true" focusable="false">
              <path d="M32 10 4 24l28 14 22-11v16h4V24L32 10z" fill="currentColor" />
              <path d="M14 36v10c0 5 8 10 18 10s18-5 18-10V36L32 46 14 36z" fill="currentColor" />
            </svg>
            <h3 className="bento-label">Educación</h3>
            <span className="bento-chip">2020 - 2025</span>
            <h4 className="bento-degree">Diseño Gráfico</h4>
            <p>Universidad de investigación y desarrollo UDI</p>
          </article>

          {/* STATS */}
          <article className="bento-card bento-stat bento-stat--peach">
            <svg className="bento-mark" viewBox="0 0 64 64" aria-hidden="true" focusable="false">
              <rect x="8" y="12" width="48" height="44" rx="8" fill="none" stroke="currentColor" strokeWidth="5" />
              <path d="M8 26h48M20 6v12M44 6v12" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
              <path d="M20 38h8M36 38h8M20 47h8" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
            </svg>
            <p className="bento-number"><CountUp value={2} prefix="+" /></p>
            <p className="bento-caption">años de experiencia</p>
          </article>

          <article className="bento-card bento-stat bento-stat--cream">
            <svg className="bento-mark" viewBox="0 0 64 64" aria-hidden="true" focusable="false">
              <path d="M32 6 4 20l28 14 28-14L32 6z" fill="currentColor" />
              <path d="M4 32l28 14 28-14M4 44l28 14 28-14" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <p className="bento-number"><CountUp value={projects.length} prefix="+" /></p>
            <p className="bento-caption">proyectos</p>
          </article>

          {/* ENFOQUE */}
          <article className="bento-card bento-focus">
            <svg className="bento-mark bento-mark--focus" viewBox="0 0 64 64" aria-hidden="true" focusable="false">
              <path d="M14 6l38 26-17 4 10 20-9 4-10-20-12 12L14 6z" fill="currentColor" />
            </svg>
            <span className="bento-focus-icon">
              <Icon iconName="FigmaIcon" size={28} height={28} color="currentColor" />
            </span>
            <div className="bento-focus-body">
              <h3 className="bento-label">Enfoque principal</h3>
              <p className="bento-focus-title">Diseño UX/UI</p>
              <p className="bento-focus-text">
                Diseño interfaces web y móviles intuitivas, pensadas para las personas y los objetivos de cada negocio: de la investigación y el wireframe al prototipo en Figma.
              </p>
              <ul className="bento-focus-chips" aria-label="Proceso">
                <li>Investigación</li>
                <li>Wireframes</li>
                <li>Prototipos</li>
              </ul>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
