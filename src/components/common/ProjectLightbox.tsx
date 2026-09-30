import { useCallback, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

import { Project } from '../../assets/data/projects';
import { Icon } from '../icons';

import '../../styles/components/common/ProjectLightbox.css';

type Props = {
  /** Projects that can be browsed (all of the same tab). */
  items: Project[];
  /** Index of the open project, or null when closed. */
  index: number | null;
  onIndexChange: (index: number) => void;
  onClose: () => void;
}

const SWIPE_THRESHOLD = 50;
const EXIT_MS = 180;

const displayTitle = (title: string) => title.replace(/^UX\/UI\s+/i, '');
const prefersReducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export const ProjectLightbox = ({ items, index, onIndexChange, onClose }: Props): JSX.Element | null => {
  const isOpen = index !== null && items[index] !== undefined;

  const [closing, setClosing] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLElement | null>(null);
  const swipeStart = useRef<number | null>(null);

  const total = items.length;

  const requestClose = useCallback(() => {
    if (prefersReducedMotion()) return onClose();
    setClosing(true);
    window.setTimeout(onClose, EXIT_MS);
  }, [onClose]);

  const go = useCallback((delta: number) => {
    if (index === null || total < 2) return;
    setLoaded(false);
    onIndexChange((index + delta + total) % total);
  }, [index, total, onIndexChange]);

  // Open: remember the trigger, lock scroll, focus in. Close: give focus back.
  useEffect(() => {
    if (!isOpen) return;
    triggerRef.current = document.activeElement as HTMLElement | null;
    setClosing(false);
    setLoaded(false);
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();

    return () => {
      document.body.style.overflow = '';
      triggerRef.current?.focus();
    };
  }, [isOpen]);

  // Preload the neighbours so navigating feels instant (each file is ~50 KB)
  useEffect(() => {
    if (!isOpen || index === null || total < 2) return;
    [1, -1].forEach((d) => {
      const item = items[(index + d + total) % total];
      const img = new Image();
      img.src = item.imgFull ?? item.img;
    });
  }, [isOpen, index, items, total]);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      e.stopPropagation();
      requestClose();
    } else if (e.key === 'ArrowLeft') {
      go(-1);
    } else if (e.key === 'ArrowRight') {
      go(1);
    } else if (e.key === 'Tab') {
      // Focus trap
      const focusables = dialogRef.current?.querySelectorAll<HTMLElement>('button, a[href]');
      if (!focusables || focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && (document.activeElement === first || document.activeElement === dialogRef.current)) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  };

  const onPointerDown = (e: React.PointerEvent) => { swipeStart.current = e.clientX; };
  const onPointerUp = (e: React.PointerEvent) => {
    if (swipeStart.current === null) return;
    const dx = e.clientX - swipeStart.current;
    swipeStart.current = null;
    if (Math.abs(dx) > SWIPE_THRESHOLD) go(dx < 0 ? 1 : -1);
  };

  if (!isOpen || index === null) return null;

  const item = items[index];
  const name = displayTitle(item.title);
  const src = item.imgFull ?? item.img;

  return createPortal(
    <div
      className={`lb-backdrop${closing ? ' is-closing' : ''}`}
      onMouseDown={(e) => { if (e.target === e.currentTarget) requestClose(); }}
    >
      <div
        ref={dialogRef}
        className="lb-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="lb-title"
        tabIndex={-1}
        onKeyDown={onKeyDown}
      >
        <button
          ref={closeRef}
          type="button"
          className="lb-close"
          aria-label="Cerrar"
          onClick={requestClose}
        >
          <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" focusable="false">
            <path d="M6 6l12 12M18 6L6 18" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
          </svg>
        </button>

        <figure
          className="lb-figure"
          style={{ backgroundImage: `url(${item.img})` }}
          onPointerDown={onPointerDown}
          onPointerUp={onPointerUp}
          onPointerCancel={() => { swipeStart.current = null; }}
        >
          <img
            key={src}
            className={`lb-image${loaded ? ' is-loaded' : ''}`}
            src={src}
            alt={`Identidad de marca ${name}`}
            draggable={false}
            onLoad={() => setLoaded(true)}
          />
        </figure>

        <div className="lb-bar">
          <div className="lb-info" aria-live="polite">
            <span className="lb-chip">Branding</span>
            <h2 id="lb-title" className="lb-title">{name}</h2>
          </div>

          <div className="lb-actions">
            {item.web && (
              <a
                className="lb-web"
                href={item.web}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Ver sitio web de ${name} (se abre en una pestaña nueva)`}
              >
                <Icon iconName="GlobeIcon" size={16} height={16} color="currentColor" />
                Ver sitio web
                <Icon iconName="ExternalLinkIcon" size={14} height={14} color="currentColor" />
              </a>
            )}

            {total > 1 && (
              <div className="lb-nav">
                <button type="button" className="lb-arrow" aria-label="Proyecto anterior" onClick={() => go(-1)}>
                  <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" focusable="false">
                    <path d="M15 5l-7 7 7 7" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <span className="lb-counter" aria-live="polite">
                  <span className="visually-hidden">Proyecto </span>{index + 1} / {total}
                </span>
                <button type="button" className="lb-arrow" aria-label="Proyecto siguiente" onClick={() => go(1)}>
                  <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" focusable="false">
                    <path d="M9 5l7 7-7 7" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};
