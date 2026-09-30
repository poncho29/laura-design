import useScreen from '../hooks/useScreen';

import { Button } from '../components/common';

import '../styles/sections/HeroSection.css';
import ImgProfile from '../assets/imgs/img-hero.webp';
import FileCV from '../assets/files/CV-Laura-Martinez.pdf';
import ImgProfileDesktop from '../assets/imgs/img-hero-desktop.webp';

interface Props {
  id: string;
}

export const HeroSection = ({ id }: Props) => {
  const { width } = useScreen();
  const isDesktop = width > 992;

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
            Con más de dos años de experiencia en la creación de identidades visuales, diseño páginas web, edición de videos y fotografía. Mi objetivo es transformar tus ideas en diseños visualmente atractivos y efectivos que conecten con tu audiencia.
            <br/><br/>
            Disfruto de cada proceso de creacion y doy paso a oportunidades donde puedo explorar como profesional y crecer como persona.
          </p>
          <Button type='button'>
            <a href={FileCV} download="Laura Martínez CV.pdf">Descargar CV</a>            
          </Button>
        </div>

        <div className="image">
          <figure className="image-content">
            <img
              src={isDesktop ? ImgProfileDesktop : ImgProfile}
              alt="Retrato de Laura Martínez, diseñadora gráfica"
              width={isDesktop ? 733 : 304}
              height={isDesktop ? 501 : 217}
              decoding="async"
              {...{ fetchpriority: 'high' }}
            />
          </figure>
        </div>        
      </div>
    </section>
  )
}
