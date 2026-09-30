import { Icon } from '../icons';
import { useActiveSection } from '../../hooks/useActiveSection';

import '../../styles/components/common/Footer.css';

const EMAIL = 'lauram.1001@outlook.es';

const navLinks = [
  { href: '#hero', label: 'Sobre Mi' },
  { href: '#profile', label: 'Perfil' },
  { href: '#projects', label: 'Portafolio' },
  { href: '#contact', label: 'Contacto' },
];

const SECTION_IDS = navLinks.map((l) => l.href.slice(1));

export const Footer = () => {
  const { active, lock } = useActiveSection(SECTION_IDS);
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <a href="#hero" className="footer-logo" aria-label="Laura Martínez, ir al inicio">
            <Icon iconName="LogoIcon" size={139} height={50} />
          </a>
          <p className="footer-tagline">Diseño UX/UI, branding y diseño gráfico. Ideas que conectan.</p>

          <ul className="footer-social">
            <li>
              <a href="https://wa.me/573042119022" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp (se abre en una pestaña nueva)">
                <Icon size={20} iconName="WhatsappIcon" />
              </a>
            </li>
            <li>
              <a href={`mailto:${EMAIL}`} aria-label="Enviar correo">
                <Icon size={20} height={17} iconName="MailIcon" />
              </a>
            </li>
            <li>
              <a href="https://www.behance.net/lauravmartine3" target="_blank" rel="noopener noreferrer" aria-label="Behance (se abre en una pestaña nueva)">
                <Icon size={26} height={16} iconName="BehindIncon" />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/laura-valentina-martinez-guevara-b577ba25a/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn (se abre en una pestaña nueva)">
                <Icon size={20} iconName="LinkedinIcon" />
              </a>
            </li>
          </ul>
        </div>

        <nav className="footer-col" aria-label="Pie de página">
          <h2 className="footer-heading">Navegación</h2>
          <ul>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  aria-current={active === link.href.slice(1) ? 'location' : undefined}
                  onClick={() => lock(link.href.slice(1))}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="footer-col">
          <h2 className="footer-heading">Contacto</h2>
          <ul>
            <li><a href={`mailto:${EMAIL}`}>{EMAIL}</a></li>
            <li>
              <a href="https://wa.me/573042119022" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp +57 304 211 9022 (se abre en una pestaña nueva)">
                +57 304 211 9022
              </a>
            </li>
            <li>Socorro, Santander - Colombia</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <small>© {year} Laura Martínez. Todos los derechos reservados.</small>
        </div>
      </div>
    </footer>
  )
}
