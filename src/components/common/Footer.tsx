import { Icon } from '../icons';

import '../../styles/components/common/Footer.css';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="icons-group">
          <Icon size={20.78} height={17} iconName='MailIcon' className='pointer' />
          <Icon size={18} height={18} iconName='WhatsappIcon' className='pointer' />
          <Icon size={18} height={18} iconName='InstragramIcon' className='pointer' />
          <Icon size={29.17} height={18} iconName='BehindIncon' className='pointer' />
          <Icon size={18.84} height={18} iconName='LinkedinIcon' className='pointer' />
        </div>

        <span className='developer'>
          Desarrollado por {" "}
          <a href="https://poncho29.github.io/Portafolio/" target='_blank'>
            Sebastian Meneses
          </a>          
        </span>
      </div>
    </footer>
  )
}
