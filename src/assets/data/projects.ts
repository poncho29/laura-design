import Fotografia1 from '../imgs/fotografia/img-fotografia-1.jpg'
import Fotografia2 from '../imgs/fotografia/img-fotografia-2.jpg'
import Fotografia3 from '../imgs/fotografia/img-fotografia-3.jpg'
import Fotografia4 from '../imgs/fotografia/img-fotografia-4.jpg'
import Fotografia5 from '../imgs/fotografia/img-fotografia-5.jpg'
import Fotografia6 from '../imgs/fotografia/img-fotografia-6.jpg'
// import Fotografia7 from '../imgs/fotografia/img-fotografia-7.jpg'
import Fotografia8 from '../imgs/fotografia/img-fotografia-8.jpg'

import Branding1 from '../imgs/branding/branding-1.jpg';
import Branding2 from '../imgs/branding/branding-2.jpg';
import Branding3 from '../imgs/branding/branding-3.jpg';
import Branding4 from '../imgs/branding/branding-4.jpg';
import Branding5 from '../imgs/branding/branding-5.jpg';

import Design1 from '../imgs/design/img-design-1.jpg';
import Design2 from '../imgs/design/img-design-2.jpg';

export type Project = {
  area:       string;
  text:       string;
  title:      string;
  img:        string;
  url:        string;
}

export const projects: Project[] = [
  {
    title: 'Primera exposición',
    text: 'Description',
    area: 'photography',
    img: Fotografia1,
    url: 'https://drive.google.com/file/d/1abzb-SxPlgkvyjpgJOBQASJuB-D9nBB0/view?usp=drive_link'
  },
  {
    title: 'Producto detalle',
    text: 'Description',
    area: 'photography',
    img: Fotografia2,
    url: 'https://drive.google.com/file/d/1pMwVNUUOnqJtXT-W24fA588uhmwoS5Ph/view?usp=drive_link'
  },
  {
    title: 'Detalle',
    text: 'Description',
    area: 'photography',
    img: Fotografia3,
    url: 'https://drive.google.com/file/d/150IRu7eJTUSV8uzcu2Pu3hj8XDSUiAX0/view?usp=drive_link'
  },
  {
    title: 'Producto enfocado',
    text: 'Description',
    area: 'photography',
    img: Fotografia4,
    url: 'https://drive.google.com/file/d/1mHu7WZtDipUrjipkEbEoLVNv9YfXUeBe/view?usp=drive_link'
  },
  {
    title: 'Sombras',
    text: 'Description',
    area: 'photography',
    img: Fotografia5,
    url: 'https://drive.google.com/file/d/1kIdtg-00kKk22zGY6vBHqsBtovO2wUME/view?usp=drive_link'
  },
  {
    title: 'Contraste',
    text: 'Description',
    area: 'photography',
    img: Fotografia6,
    url: 'https://drive.google.com/file/d/1U5HVQAbSqxOU86aUM_RkNHv7WOjl68Hu/view?usp=drive_link'
  },
  // {
  //   title: 'project 7',
  //   text: 'Description',
  //   area: 'photography',
  //   img: Fotografia7,
  // },
  {
    title: 'Retrato',
    text: 'Description',
    area: 'photography',
    img: Fotografia8,
    url: 'https://drive.google.com/file/d/1qbrZmSrqNhcNm5gGMG-PhyvUGOMkY5PQ/view?usp=drive_link'
  },
  {
    title: 'Selau',
    text: 'Description',
    area: 'branding',
    img: Branding1,
    url: 'https://drive.google.com/file/d/1ziwK8UIU1VL0z9hmORpTM4IctQgmesOF/view?usp=drive_link'
  },
  {
    title: 'Laura Martínez',
    text: 'Description',
    area: 'branding',
    img: Branding2,
    url: 'https://drive.google.com/file/d/1nYnvurSbx3ppRkOp6zrz_Jv4JuOqOW_Z/view?usp=drive_link'
  },
  {
    title: 'Papelería chispitas',
    text: 'Description',
    area: 'branding',
    img: Branding3,
    url: 'https://drive.google.com/file/d/1f56-SJdkZCYChCv86S5kTTl8JHJWyVUC/view?usp=drive_link'
  },
  {
    title: 'Graphic code',
    text: 'Description',
    area: 'branding',
    img: Branding4,
    url: 'https://drive.google.com/file/d/18lZa8kPnchlEA_12_RfH3I2fUxWqY1K4/view?usp=drive_link'
  },
  {
    title: 'Trocha Verde',
    text: 'Description',
    area: 'branding',
    img: Branding5,
    url: 'https://drive.google.com/file/d/1zU87s5gxFXqYVZkS19AVjo-KBUj-o1HD/view?usp=drive_link'
  },
  {
    title: 'UX/UI VASEprint',
    text: 'Description',
    area: 'design',
    img: Design1,
    url: 'https://www.figma.com/file/Xa8jrORVmYF5UYLqSBvHQZ/Tienda-Mobile-Vaseprint?type=design&node-id=303%3A226&mode=design&t=dFaSQGnTgub82jVT-1'
  },
  {
    title: 'UX/UI Portafolio',
    text: 'Description',
    area: 'design',
    img: Design2,
    url: 'https://www.figma.com/file/ePxNoxCn1jSAPXh7ptk6Za/Portafolio?type=design&node-id=0%3A1&mode=design&t=zjInzz0b3CqM26ZQ-1'
  },
]