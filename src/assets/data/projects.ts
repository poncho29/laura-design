import Branding1 from '../imgs/branding/legado.jpg';
import Branding2 from '../imgs/branding/integra180.jpg';
import Branding3 from '../imgs/branding/kiyomi.jpg';
import Branding4 from '../imgs/branding/menu-online.jpg';
import Branding5 from '../imgs/branding/merkemass.jpg';
import Branding6 from '../imgs/branding/andy-postres.jpg';

import AntojappImg from '../imgs/design/antojapp.jpg';
import FundacionVincentImg from '../imgs/design/fundacion-vincent.jpg';
import MenuOnlineImg from '../imgs/design/menu-online.jpg';
import RediseñoTrasHomeImg from '../imgs/design/rediseno.jpg';
import LegadoImg from '../imgs/design/legado.jpg';
import VaseprintImg from '../imgs/design/img-design-1.jpg';

export type Project = {
  area:       string;
  text:       string;
  title:      string;
  img:        string;
  url:        string;
}

export const projects: Project[] = [
  {
    title: 'Legado Inmobiliaria',
    text: 'Description',
    area: 'branding',
    img: Branding1,
    url: ''
  },
  {
    title: 'Integra 180',
    text: 'Description',
    area: 'branding',
    img: Branding2,
    url: ''
  },
  {
    title: 'Kiyomi',
    text: 'Description',
    area: 'branding',
    img: Branding3,
    url: ''
  },
  {
    title: 'Menu Online',
    text: 'Description',
    area: 'branding',
    img: Branding4,
    url: ''
  },
  {
    title: 'Merkemass',
    text: 'Description',
    area: 'branding',
    img: Branding5,
    url: ''
  },
  {
    title: 'Andy Postres',
    text: 'Description',
    area: 'branding',
    img: Branding6,
    url: ''
  },
  {
    title: 'UX/UI Legado Inmobiliaria',
    text: 'Description',
    area: 'design',
    img: LegadoImg,
    url: 'https://www.figma.com/design/4izgLpm68TTOokx83eCwPG/Legado?node-id=0-1&t=n8TPZVM5HaoALG68-1'
  },
  {
    title: 'UX/UI Rediseño Tras Home',
    text: 'Description',
    area: 'design',
    img: RediseñoTrasHomeImg,
    url: 'https://www.figma.com/design/b89wxed6KQ70VAgJK5MIj2/Redise%C3%B1o-Tras-home?node-id=2002-2&t=p2ichNZl1WSTxsUf-1'
  },
  {
    title: 'UX/UI VASEprint',
    text: 'Description',
    area: 'design',
    img: VaseprintImg,
    url: 'https://www.figma.com/file/Xa8jrORVmYF5UYLqSBvHQZ/Tienda-Mobile-Vaseprint?type=design&node-id=303%3A226&mode=design&t=dFaSQGnTgub82jVT-1'
  },
  {
    title: 'UX/UI MenuOnline',
    text: 'Description',
    area: 'design',
    img: MenuOnlineImg,
    url: 'https://www.figma.com/design/CNO281TSsZqxiHgMMtRA4d/Menu-online?node-id=2213-33&t=gemM9uvqpFptbHnP-1'
  },
  {
    title: 'UX/UI Fundación Vincent',
    text: 'Description',
    area: 'design',
    img: FundacionVincentImg,
    url: 'https://www.figma.com/design/tWirlGwoaaZu7oY6aiYkK0/Fundaci%C3%B3n-vincent?node-id=0-1&t=uym7dPPSH2Il2p1b-1'
  },
  {
    title: 'UX/UI Antojapp',
    text: 'Description',
    area: 'design',
    img: AntojappImg,
    url: 'https://www.figma.com/design/JzpGp3MwZ6jc3W5aZXczyj/Antojapp?node-id=0-1&t=kOo8OAnNZ4xpCZnK-1'
  },
  // {
  //   title: 'UX/UI Portafolio',
  //   text: 'Description',
  //   area: 'design',
  //   img: Design2,
  //   url: 'https://www.figma.com/file/ePxNoxCn1jSAPXh7ptk6Za/Portafolio?type=design&node-id=0%3A1&mode=design&t=zjInzz0b3CqM26ZQ-1'
  // },
]