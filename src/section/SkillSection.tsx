import useScreen from '../hooks/useScreen';

import '../styles/sections/SkillSection.css';

import Figma from '../assets/imgs/img-figma.png';
import Desing from '../assets/imgs/img-design.jpg';
import Photoshopt from '../assets/imgs/img-photoshop.jpg';
import Ligthroom from '../assets/imgs/img-ilustrator.jpg';
import Ilustrator from '../assets/imgs/img-ilustrator.jpg';

import FigmaDesktop from '../assets/imgs/img-figma-desktop.png';
import DesingDesktop from '../assets/imgs/img-desing-desktop.png';
import PhotoshoptDesktop from '../assets/imgs/img-photoshop-desktop.png';
import LigthroomDesktop from '../assets/imgs/img-ligthroom.desktop.png';
import IlustratorDesktop from '../assets/imgs/img-ilustrator-desktop.png';

type Program = {
  alt: string;
  imgMobile: string;
  imgDesktop: string;
}

const programs: Program[] = [
  {alt: 'logo ilustrator', imgMobile: Ilustrator, imgDesktop: IlustratorDesktop},
  {alt: 'logo photoshop', imgMobile: Photoshopt, imgDesktop: PhotoshoptDesktop},
  {alt: 'logo ligthroom', imgMobile: Ligthroom, imgDesktop: LigthroomDesktop},
  {alt: 'logo indesign', imgMobile: Desing, imgDesktop: DesingDesktop},
  {alt: 'logo figma', imgMobile: Figma, imgDesktop: FigmaDesktop},
]

export const SkillSection = () => {
  const { width } = useScreen();

  return (
    <section className="skills">
      <div className="container">
        <div className='skills-group'>
          <div className="title-content">
            <h2 className="title">Habilidades</h2>
            <span className="underline"></span>
          </div>
          
          <ul className="programs">
            {programs.map((item: Program) => (
              <li>
                <img
                  alt={item.alt}
                  src={width >= 992 ? item.imgDesktop : item.imgMobile}
                />
              </li>
            ))}
          </ul>
        </div>

        <div className='studies-group'>
          <div className="title-content">
            <h2 className="title">Educación</h2>
            <span className="underline"></span>
          </div>

          <div className="studies">
            <h3>Diseño Gráfico</h3>
            <p>Universidad de investigación y desarrollo UDI</p>
            <p>2020 - Actual</p>
          </div>
        </div>
      </div>
    </section>
  )
}
