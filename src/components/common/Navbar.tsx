import { Icon } from '../icons';

import useScreen from '../../hooks/useScreen';

import '../../styles/components/common/Navbar.css';
import { useNavigate } from 'react-router-dom';

export const Navbar = () => {
  const navigate = useNavigate();
  const { width } = useScreen();

  return (
    <header className='header'>
      <div className='container'>
        <nav className='menu'>
          <a href='/'>Sobre Mi</a>
          <a href='/portafolio'>Portafolio</a>
          <a href='/contact'>Contacto</a>
        </nav>

        <figure className='logo'>
          <Icon
            iconName='LogoIcon'
            className='pointer'
            size={width > 768 ? 139 : 80}
            height={width > 768 ? 50 : 27}
            onPress={() => navigate('/')}
          />     
        </figure>

        <ul className='social'>
          <li><Icon size={20} iconName='MailIcon' className='pointer' /></li>
          <li><Icon size={20} iconName='WhatsappIcon' className='pointer' /></li>
          <li><Icon size={20} iconName='InstragramIcon' className='pointer' /></li>
          <li><Icon size={28} iconName='BehindIncon' className='pointer' /></li>
          <li><Icon size={20} iconName='LinkedinIcon' className='pointer' /></li>
        </ul>

        <button className='menu-mobile'>
          <Icon size={14} iconName='MenuIcon' className='pointer'/>
        </button>
      </div>
    </header>
  )
}
