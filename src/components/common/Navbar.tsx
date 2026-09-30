import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';

import { Icon } from '../icons';

import useScreen from '../../hooks/useScreen';
import { useActiveSection } from '../../hooks/useActiveSection';

import '../../styles/components/common/Navbar.css';

const WHATSAPP = 'https://wa.me/573042119022';
const EMAIL = 'mailto:lauram.1001@outlook.es';
const BEHANCE = 'https://www.behance.net/lauravmartine3';
const LINKEDIN = 'https://www.linkedin.com/in/laura-valentina-martinez-guevara-b577ba25a/';

const links = [
  { href: '#hero', label: 'Sobre Mi' },
  { href: '#projects', label: 'Portafolio' },
  { href: '#contact', label: 'Contacto' },
];

// Page order; the profile section counts as part of "Sobre Mi" (there is no top-nav link for it)
const SECTION_IDS = ['hero', 'profile', 'projects', 'contact'];
const toNavId = (id: string) => (id === 'profile' ? 'hero' : id);

export const Navbar = () => {
  const { width } = useScreen();
  const isDesktop = width >= 1024;

  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { active, lock } = useActiveSection(SECTION_IDS);
  const activeNav = toNavId(active);

  const navRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  const close = useCallback((returnFocus = false) => {
    setOpen(false);
    if (returnFocus) toggleRef.current?.focus();
  }, []);

  // Elevated header once the page is scrolled
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // A desktop-sized viewport never needs the drawer
  useEffect(() => {
    if (isDesktop) setOpen(false);
  }, [isDesktop]);

  // Open drawer: lock scroll, make the page inert, close on Esc, move focus in
  useEffect(() => {
    if (!open) return;

    const main = document.querySelector('main');
    const footer = document.querySelector('footer');
    document.body.style.overflow = 'hidden';
    main?.setAttribute('inert', '');
    footer?.setAttribute('inert', '');
    firstLinkRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close(true);
    };
    document.addEventListener('keydown', onKey);

    return () => {
      document.body.style.overflow = '';
      main?.removeAttribute('inert');
      footer?.removeAttribute('inert');
      document.removeEventListener('keydown', onKey);
    };
  }, [open, close]);

  // Sliding indicator (desktop): follow the active link's offset and width
  useLayoutEffect(() => {
    const nav = navRef.current;
    if (!nav) return;

    const measure = () => {
      const link = nav.querySelector<HTMLElement>('a[aria-current]');
      if (!link || link.offsetWidth === 0) return;
      nav.style.setProperty('--ind-x', `${link.offsetLeft}px`);
      nav.style.setProperty('--ind-w', `${link.offsetWidth}px`);
    };

    measure();
    const raf = requestAnimationFrame(() => nav.classList.add('has-indicator'));
    const observer = new ResizeObserver(measure);
    observer.observe(nav);
    nav.querySelectorAll(':scope > a').forEach((el) => observer.observe(el));
    document.fonts?.ready.then(measure);
    return () => { cancelAnimationFrame(raf); observer.disconnect(); };
  }, [activeNav, isDesktop]);

  return (
    <header className={`header${scrolled ? ' is-scrolled' : ''}${open ? ' menu-open' : ''}`}>
      <div className='container header-bar'>
        <nav
          ref={navRef}
          id='primary-nav'
          className='menu'
          aria-label='Principal'
          onClick={(e) => { if (e.target === e.currentTarget) close(true); }}
        >
          {links.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              ref={i === 0 ? firstLinkRef : undefined}
              style={{ '--i': i } as React.CSSProperties}
              aria-current={activeNav === link.href.slice(1) ? 'location' : undefined}
              onClick={() => { lock(link.href.slice(1)); close(); }}
            >
              {link.label}
            </a>
          ))}
          <span className='menu-indicator' aria-hidden='true'>
            <span key={activeNav} className='menu-indicator-fill' />
          </span>

          <div className='menu-social' style={{ '--i': links.length } as React.CSSProperties}>
            <a href={WHATSAPP} target='_blank' rel='noopener noreferrer' aria-label='WhatsApp (se abre en una pestaña nueva)'>
              <Icon size={20} iconName='WhatsappIcon' />
            </a>
            <a href={EMAIL} aria-label='Enviar correo'>
              <Icon size={20} height={17} iconName='MailIcon' />
            </a>
            <a href={BEHANCE} target='_blank' rel='noopener noreferrer' aria-label='Behance (se abre en una pestaña nueva)'>
              <Icon size={26} height={16} iconName='BehindIncon' />
            </a>
            <a href={LINKEDIN} target='_blank' rel='noopener noreferrer' aria-label='LinkedIn (se abre en una pestaña nueva)'>
              <Icon size={20} iconName='LinkedinIcon' />
            </a>
          </div>
        </nav>

        <a href='#hero' className='logo' aria-label='Laura Martínez, ir al inicio' onClick={() => close()}>
          <Icon
            iconName='LogoIcon'
            size={isDesktop ? 139 : 100}
            height={isDesktop ? 50 : 35}
          />
        </a>

        <ul className='social'>
          <li>
            <a href={WHATSAPP} target='_blank' rel='noopener noreferrer' aria-label='WhatsApp (se abre en una pestaña nueva)'>
              <Icon size={20} iconName='WhatsappIcon' />
            </a>
          </li>
          <li>
            <a href={EMAIL} aria-label='Enviar correo'>
              <Icon size={20} height={17} iconName='MailIcon' />
            </a>
          </li>
          <li>
            <a href={BEHANCE} target='_blank' rel='noopener noreferrer' aria-label='Behance (se abre en una pestaña nueva)'>
              <Icon size={28} height={17} iconName='BehindIncon' />
            </a>
          </li>
          <li>
            <a href={LINKEDIN} target='_blank' rel='noopener noreferrer' aria-label='LinkedIn (se abre en una pestaña nueva)'>
              <Icon size={20} iconName='LinkedinIcon' />
            </a>
          </li>
        </ul>

        <button
          ref={toggleRef}
          type='button'
          className='menu-toggle'
          aria-expanded={open}
          aria-controls='primary-nav'
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          onClick={() => setOpen((v) => !v)}
        >
          <span className='menu-toggle-bars' aria-hidden='true'>
            <span /><span /><span />
          </span>
        </button>
      </div>
    </header>
  )
}
