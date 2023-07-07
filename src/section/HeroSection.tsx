import useScreen from '../hooks/useScreen';

import { Button } from '../components/common';

import '../styles/sections/HeroSection.css';
import ImgProfile from '../assets/imgs/img-hero.png';
import FileCV from '../assets/files/sebastian-cv.pdf';
import ImgProfileDesktop from '../assets/imgs/img-hero-desktop.png';

interface Props {
  id: string;
}

export const HeroSection = ({ id }: Props) => {
  const { width } = useScreen();

  return (
    <section className="hero" id={id}>
      <div className="container">
        <div className="information">
          <h1 className="text-upper">
            <span>¡Hola!</span>
            <br />
            <span>Soy Laura Martínez</span>
          </h1>
          <h4 className="text-upper">Diseñadora Gráfica</h4>
          <p>
            Soy estudiante de Diseño Gráfico de la UDI, actualmente trabajo en el desarrollo de proyectos personales y académicos,
            mis intereses van dirigidos a el Diseño Web, fotografía y branding.
            <br/><br/>
            Disfruto de cada proceso de creacion y doy paso a oportunidades donde puedo explorar como profesional y crecer como persona.
          </p>
          <Button type='button'>
            <a href={FileCV} download="Sebastian CV.pdf">Descargar CV</a>            
          </Button>
        </div>

        <div className="image">
          <figure className="image-content">
            <img src={width > 992 ? ImgProfileDesktop : ImgProfile} alt="Imagen de laura" />
          </figure>
        </div>        
      </div>
    </section>
  )
}
