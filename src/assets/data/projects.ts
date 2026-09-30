import Branding1 from '../imgs/branding/legado.webp';
import Branding1Sm from '../imgs/branding/legado-400.webp';
import Branding1Full from '../imgs/branding/legado-full.webp';
import Branding2 from '../imgs/branding/integra180.webp';
import Branding2Sm from '../imgs/branding/integra180-400.webp';
import Branding2Full from '../imgs/branding/integra180-full.webp';
import Branding3 from '../imgs/branding/kiyomi.webp';
import Branding3Sm from '../imgs/branding/kiyomi-400.webp';
import Branding3Full from '../imgs/branding/kiyomi-full.webp';
import Branding4 from '../imgs/branding/menu-online.webp';
import Branding4Sm from '../imgs/branding/menu-online-400.webp';
import Branding4Full from '../imgs/branding/menu-online-full.webp';
import Branding5 from '../imgs/branding/merkemass.webp';
import Branding5Sm from '../imgs/branding/merkemass-400.webp';
import Branding5Full from '../imgs/branding/merkemass-full.webp';
import Branding6 from '../imgs/branding/andy-postres.webp';
import Branding6Sm from '../imgs/branding/andy-postres-400.webp';
import Branding6Full from '../imgs/branding/andy-postres-full.webp';

import AntojappImg from '../imgs/design/antojapp.webp';
import AntojappImgSm from '../imgs/design/antojapp-400.webp';
import FundacionVincentImg from '../imgs/design/fundacion-vincent.webp';
import FundacionVincentImgSm from '../imgs/design/fundacion-vincent-400.webp';
import MenuOnlineImg from '../imgs/design/menu-online.webp';
import MenuOnlineImgSm from '../imgs/design/menu-online-400.webp';
import RediseñoTrasHomeImg from '../imgs/design/rediseno.webp';
import RediseñoTrasHomeImgSm from '../imgs/design/rediseno-400.webp';
import LegadoImg from '../imgs/design/legado.webp';
import LegadoImgSm from '../imgs/design/legado-400.webp';
import VaseprintImg from '../imgs/design/img-design-1.webp';
import VaseprintImgSm from '../imgs/design/img-design-1-400.webp';

export type Project = {
  area:       string;
  text:       string;
  title:      string;
  img:        string;
  /** 400w variant of `img` (800w), used in the card srcset. */
  imgSm?:     string;
  imgFull?:   string;
  url:        string;
  web?:       string;
}

export const projects: Project[] = [
  {
    title: 'Legado Inmobiliaria',
    text: 'Description',
    area: 'branding',
    img: Branding1,
    imgSm: Branding1Sm,
    imgFull: Branding1Full,
    url: '',
    web: 'https://legadogrupoic.com/'
  },
  {
    title: 'Integra 180',
    text: 'Description',
    area: 'branding',
    img: Branding2,
    imgSm: Branding2Sm,
    imgFull: Branding2Full,
    url: ''
  },
  {
    title: 'Kiyomi',
    text: 'Description',
    area: 'branding',
    img: Branding3,
    imgSm: Branding3Sm,
    imgFull: Branding3Full,
    url: ''
  },
  {
    title: 'Menu Online',
    text: 'Description',
    area: 'branding',
    img: Branding4,
    imgSm: Branding4Sm,
    imgFull: Branding4Full,
    url: '',
    web: 'https://vamenu.net/'
  },
  {
    title: 'Merkemass',
    text: 'Description',
    area: 'branding',
    img: Branding5,
    imgSm: Branding5Sm,
    imgFull: Branding5Full,
    url: ''
  },
  {
    title: 'Andy Postres',
    text: 'Description',
    area: 'branding',
    img: Branding6,
    imgSm: Branding6Sm,
    imgFull: Branding6Full,
    url: ''
  },
  {
    title: 'UX/UI Legado Inmobiliaria',
    text: 'Description',
    area: 'design',
    img: LegadoImg,
    imgSm: LegadoImgSm,
    url: 'https://www.figma.com/design/4izgLpm68TTOokx83eCwPG/Legado?node-id=0-1&t=n8TPZVM5HaoALG68-1',
    web: 'https://legadogrupoic.com/'
  },
  {
    title: 'UX/UI Rediseño Tras Home',
    text: 'Description',
    area: 'design',
    img: RediseñoTrasHomeImg,
    imgSm: RediseñoTrasHomeImgSm,
    url: 'https://www.figma.com/design/b89wxed6KQ70VAgJK5MIj2/Redise%C3%B1o-Tras-home?node-id=2002-2&t=p2ichNZl1WSTxsUf-1'
  },
  {
    title: 'UX/UI VASEprint',
    text: 'Description',
    area: 'design',
    img: VaseprintImg,
    imgSm: VaseprintImgSm,
    url: 'https://www.figma.com/file/Xa8jrORVmYF5UYLqSBvHQZ/Tienda-Mobile-Vaseprint?type=design&node-id=303%3A226&mode=design&t=dFaSQGnTgub82jVT-1',
    web: 'https://vaseprint.net/'
  },
  {
    title: 'UX/UI MenuOnline',
    text: 'Description',
    area: 'design',
    img: MenuOnlineImg,
    imgSm: MenuOnlineImgSm,
    url: 'https://www.figma.com/design/CNO281TSsZqxiHgMMtRA4d/Menu-online?node-id=2213-33&t=gemM9uvqpFptbHnP-1',
    web: 'https://vamenu.net/'
  },
  {
    title: 'UX/UI Fundación Vincent',
    text: 'Description',
    area: 'design',
    img: FundacionVincentImg,
    imgSm: FundacionVincentImgSm,
    url: 'https://www.figma.com/design/tWirlGwoaaZu7oY6aiYkK0/Fundaci%C3%B3n-vincent?node-id=0-1&t=uym7dPPSH2Il2p1b-1'
  },
  {
    title: 'UX/UI Antojapp',
    text: 'Description',
    area: 'design',
    img: AntojappImg,
    imgSm: AntojappImgSm,
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