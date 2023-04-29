import { Icon } from '../icons';

import '../../styles/components/common/Footer.css';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="icons-group">
          <a href="mailto:lauram.1001@outlook.es">
            <Icon size={20.78} height={17} iconName='MailIcon' className='pointer' />
          </a>
          <Icon size={18} height={18} iconName='WhatsappIcon' className='pointer' />
          <a href="https://www.behance.net/lauravmartine3" target='_blank' rel="noopener noreferrer">
            <Icon size={29.17} height={18} iconName='BehindIncon' className='pointer' />
          </a>
          <a href="https://www.linkedin.com/in/laura-valentina-martinez-guevara-b577ba25a/" target='_blank' rel="noopener noreferrer">
            <Icon size={18.84} height={18} iconName='LinkedinIcon' className='pointer' />
          </a>
        </div>

        <span className='developer'>
          Desarrollado por {" "}
          <a href="https://poncho29.github.io/Portafolio/" target='_blank' rel="noopener noreferrer">
            Sebastian Meneses
          </a>          
        </span>
      </div>
    </footer>
  )
}
