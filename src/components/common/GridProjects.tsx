import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import { Project } from "../../assets/data/projects";
import { Icon } from "../icons";
import useScreen from "../../hooks/useScreen";
import { ProjectLightbox } from "./ProjectLightbox";

import '../../styles/components/common/GridProjects.css';

type Props = {
  area: string;
  projects: Project[],
  /** Changes when the parent tab changes: the carousel goes back to the first card. */
  resetKey?: string;
  /** Accessible name of the mobile carousel region. */
  label?: string;
}

// The "UX/UI" prefix is shown as a category chip, so it is dropped from the visible title.
const displayTitle = (title: string) => title.replace(/^UX\/UI\s+/i, '');

// Rendered card width per breakpoint (mirrors GridProjects.css + Bootstrap's .container max-widths):
// mobile carousel cards are 85% of the padded grid; 2 columns from 640px, 3 from 992px.
const CARD_IMG_SIZES = [
  '(min-width: 1400px) 405px',
  '(min-width: 1200px) 345px',
  '(min-width: 992px) 285px',
  '(min-width: 768px) 328px',
  '(min-width: 640px) 238px',
  '(min-width: 576px) 425px',
  'calc(85vw - 34px)',
].join(', ');

export const GridProjects = ({ area, projects, resetKey, label }: Props): JSX.Element => {
  const { width } = useScreen();
  const isCarousel = width < 640;
  const gridRef = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filterProjects = useMemo(() => {
    if (projects.length === 0) return [];

    if (area === 'all') {
      return projects
    } else {
      const data = projects.filter((project) => project.area === area)
      return data;
    }
  }, [area, projects])

  // Current card = the one whose left edge is closest to the scroll position
  const updateCurrent = useCallback(() => {
    const grid = gridRef.current;
    if (!grid) return;
    const cards = Array.from(grid.children) as HTMLElement[];
    if (cards.length === 0) return;
    const atEnd = grid.scrollLeft + grid.clientWidth >= grid.scrollWidth - 4;
    if (atEnd) return setCurrent(cards.length - 1);
    let best = 0;
    let min = Infinity;
    cards.forEach((card, i) => {
      const d = Math.abs(card.offsetLeft - grid.scrollLeft - grid.clientLeft - parseFloat(getComputedStyle(grid).paddingLeft));
      if (d < min) { min = d; best = i; }
    });
    setCurrent(best);
  }, []);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid || !isCarousel) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(updateCurrent);
    };
    grid.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      grid.removeEventListener('scroll', onScroll);
    };
  }, [isCarousel, updateCurrent]);

  // Tab switch: back to the first card
  useEffect(() => {
    const grid = gridRef.current;
    if (grid) grid.scrollLeft = 0;
    setCurrent(0);
  }, [resetKey, area]);

  const goTo = (index: number) => {
    const grid = gridRef.current;
    const card = grid?.children[index] as HTMLElement | undefined;
    if (!grid || !card) return;
    const gutter = parseFloat(getComputedStyle(grid).paddingLeft);
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    grid.scrollTo({ left: card.offsetLeft - gutter, behavior: reduce ? 'auto' : 'smooth' });
  };

  return (
    <>
      <div
        ref={gridRef}
        className='project-grid'
        {...(isCarousel ? { role: 'region', 'aria-roledescription': 'carrusel', 'aria-label': label, tabIndex: 0 } : {})}
      >
        {filterProjects?.length > 0 ?
          filterProjects.map((item: Project) => {
            const { title, img, imgSm, url, web } = item;
            const isBranding = item.area === 'branding';
            const name = displayTitle(title);

            const actions = (
              <>
                {isBranding ? (
                  <button
                    type="button"
                    className="pcard-btn pcard-btn--primary"
                    aria-haspopup="dialog"
                    aria-label={`Ver proyecto: ${name} (en grande)`}
                    onClick={() => setLightboxIndex(filterProjects.indexOf(item))}
                  >
                    <Icon iconName="ExpandIcon" size={18} height={18} color="currentColor" />
                    Ver proyecto
                  </button>
                ) : (
                  <a
                    className="pcard-btn pcard-btn--primary"
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Ver en Figma: ${name} (se abre en una pestaña nueva)`}
                  >
                    <Icon iconName="FigmaIcon" size={18} height={18} color="currentColor" />
                    Ver en Figma
                    <span className="pcard-ext"><Icon iconName="ExternalLinkIcon" size={14} height={14} color="currentColor" /></span>
                  </a>
                )}

                {web && (
                  <a
                    className="pcard-btn pcard-btn--ghost"
                    href={web}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Ver sitio web: ${name} (se abre en una pestaña nueva)`}
                  >
                    <Icon iconName="GlobeIcon" size={18} height={18} color="currentColor" />
                    Ver sitio web
                    <span className="pcard-ext"><Icon iconName="ExternalLinkIcon" size={14} height={14} color="currentColor" /></span>
                  </a>
                )}
              </>
            );

            /* The same actions render in two places, and CSS shows only one of them:
               - hover-capable devices: inside the image overlay (revealed on hover / focus-within)
               - touch devices: in a row under the title
               The hidden one is display:none, so screen readers never get duplicates. */
            return (
              <article key={`${item.area}-${title}`} className={`pcard pcard--${item.area}`}>
                <div className="pcard-media">
                  <img
                    alt={isBranding ? `Identidad de marca ${name}` : `Diseño UX/UI ${name}`}
                    className="pcard-img"
                    src={img}
                    {...(imgSm ? { srcSet: `${imgSm} 400w, ${img} 800w`, sizes: CARD_IMG_SIZES } : {})}
                    width={800}
                    height={800}
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="pcard-overlay">{actions}</div>
                </div>

                <div className="pcard-body">
                  <span className="pcard-chip">{isBranding ? 'Branding' : 'UX/UI'}</span>
                  <h3 className="pcard-title">{name}</h3>
                  <div className="pcard-actions">{actions}</div>
                </div>
              </article>
            )
          }) :
          <div>No projects</div>
        }
      </div>
      {isCarousel && filterProjects.length > 1 && (
        <div className="pgrid-dots">
          {filterProjects.map((item, i) => (
            <button
              key={item.title}
              type="button"
              className={`pgrid-dot${i === current ? ' is-active' : ''}`}
              aria-label={`Ir al proyecto ${i + 1} de ${filterProjects.length}: ${displayTitle(item.title)}`}
              aria-current={i === current ? 'true' : undefined}
              onClick={() => goTo(i)}
            />
          ))}
        </div>
      )}
      <ProjectLightbox
        items={filterProjects}
        index={lightboxIndex}
        onIndexChange={setLightboxIndex}
        onClose={() => setLightboxIndex(null)}
      />
    </>
  )
}
