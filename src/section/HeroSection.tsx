import { Fragment } from 'react';

import '../styles/sections/HeroSection.css';
import FileCV from '../assets/files/CV-Laura-Martinez.pdf';

import { Icon } from '../components/icons';

interface Props {
  id: string;
}

// The name is typed in with pure CSS: every letter is in the DOM from the first render (SEO, no layout
// shift) and is revealed with a staggered animation-delay.
const NAME_WORDS = ['Laura', 'Martínez'];
const LETTER_COUNT = NAME_WORDS.join('').length;
let letterIndex = 0;
const nameLetters = NAME_WORDS.map((word) => [...word].map((char) => ({ char, i: letterIndex++ })));

// Kept in sync with the <link rel="preload"> in index.html. The <img> is 186.5% of the portrait frame
// (15.5rem on mobile, clamp(17rem, 24vw, 21rem) from 992px).
const HERO_IMG_SIZES = '(min-width: 992px) min(627px, max(507px, 44.8vw)), 463px';

const specialties = ['UX/UI', 'Diseño web', 'Branding', 'Edición de video'];

export const HeroSection = ({ id }: Props) => {
  return (
    <section className="hero" id={id}>
      <div className="container">
        <div className="information">
          <p className="hero-role">Diseñadora UX/UI &amp; Gráfica</p>

          <h1 className="hero-title text-upper" aria-label="¡Hola! Soy Laura Martínez">
            <span className="hero-greeting" aria-hidden="true">¡Hola! Soy</span>
            <span className="hero-name" aria-hidden="true" style={{ '--tw-count': LETTER_COUNT } as React.CSSProperties}>
              <mark>
                {nameLetters.map((letters, w) => (
                  <Fragment key={NAME_WORDS[w]}>
                    {w > 0 && ' '}
                    <span className="tw-word">
                      {letters.map(({ char, i }) => (
                        <span
                          key={i}
                          className="tw"
                          data-last={i === LETTER_COUNT - 1 ? '' : undefined}
                          style={{ '--i': i } as React.CSSProperties}
                        >
                          {char}
                        </span>
                      ))}
                    </span>
                  </Fragment>
                ))}
              </mark>
            </span>
          </h1>

          <div className="hero-text">
            <p>
              Diseñadora UX/UI y gráfica con más de dos años de experiencia creando interfaces web y móviles centradas en las personas, identidades visuales y piezas de video. Mi objetivo es transformar tus ideas en experiencias digitales atractivas, funcionales y efectivas que conecten con tu audiencia.
            </p>
            <p>
              Disfruto de cada proceso de creación y doy paso a oportunidades donde puedo explorar como profesional y crecer como persona.
            </p>
          </div>

          <ul className="hero-tags" aria-label="Especialidades">
            {specialties.map((item, i) => (
              <li key={item} className={i === 0 ? 'is-primary' : undefined}>{item}</li>
            ))}
          </ul>

          <div className="hero-cta">
            <a className="hero-btn hero-btn--primary" href={FileCV} download="Laura Martínez CV.pdf">
              <span className="hero-btn-download"><Icon iconName="DownloadIcon" size={18} height={18} color="currentColor" /></span>
              Descargar CV
            </a>
            <a className="hero-btn hero-btn--ghost" href="#projects">
              Ver proyectos
              <span className="hero-btn-arrow"><Icon iconName="ArrowRightIcon" size={18} height={18} color="currentColor" /></span>
            </a>
          </div>
        </div>

        <div className="image">
          <div className="portrait">
            {/* Brand shapes, rebuilt as layers behind the portrait */}
            <span className="portrait-shape portrait-shape--peach" aria-hidden="true" />
            <span className="portrait-shape portrait-shape--cream" aria-hidden="true" />

            <svg className="portrait-rings portrait-rings--a" viewBox="-2 -2 124 124" overflow="visible" aria-hidden="true" focusable="false">
              <g fill="none" stroke="currentColor" strokeWidth="1.75">
                <circle cx="60" cy="60" r="56" />
                <circle cx="60" cy="60" r="43" />
                <circle cx="60" cy="60" r="30" />
                <circle cx="60" cy="60" r="17" />
              </g>
            </svg>
            <svg className="portrait-rings portrait-rings--b" viewBox="-2 -2 124 124" overflow="visible" aria-hidden="true" focusable="false">
              <g fill="none" stroke="currentColor" strokeWidth="1.75">
                <circle cx="60" cy="60" r="56" />
                <circle cx="60" cy="60" r="43" />
                <circle cx="60" cy="60" r="30" />
                <circle cx="60" cy="60" r="17" />
              </g>
            </svg>

            <figure className="portrait-frame">
              <img
                src="/img/hero-733.webp"
                srcSet="/img/hero-480.webp 480w, /img/hero-733.webp 733w"
                sizes={HERO_IMG_SIZES}
                alt="Retrato de Laura Martínez, diseñadora UX/UI y gráfica"
                width={733}
                height={501}
                decoding="async"
                {...{ fetchpriority: 'high' }}
              />
            </figure>

            <span className="portrait-badge portrait-badge--ux" aria-hidden="true">
              <Icon iconName="FigmaIcon" size={16} height={16} color="currentColor" />
              UX/UI
            </span>
            <span className="portrait-badge portrait-badge--web" aria-hidden="true">
              <Icon iconName="BrowserIcon" size={16} height={16} color="currentColor" />
              Diseño web
            </span>
            <span className="portrait-badge portrait-badge--brand" aria-hidden="true">
              <Icon iconName="PenNibIcon" size={16} height={16} color="currentColor" />
              Branding
            </span>
            <span className="portrait-badge portrait-badge--years" aria-hidden="true">
              <strong>+2</strong> años de experiencia
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
