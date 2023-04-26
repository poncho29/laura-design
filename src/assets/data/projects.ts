import ProjectOne from '../imgs/img-project-1.jpg';
import ProjectTwo from '../imgs/img-project-2.jpg';
import ProjectThree from '../imgs/img-project-3.jpg';
import ProjectFour from '../imgs/img-project-4.jpg';
import ProjectFive from '../imgs/img-project-5.jpg';
import ProjectSix from '../imgs/img-project-6.jpg';
import ProjectOneDesktop from '../imgs/img-project-1-desktop.jpg';
import ProjectTwoDesktop from '../imgs/img-project-2-desktop.jpg';
import ProjectThreeDesktop from '../imgs/img-project-3-desktop.jpg';
import ProjectFourDesktop from '../imgs/img-project-1-desktop.jpg';
import ProjectFiveDesktop from '../imgs/img-project-1-desktop.jpg';
import ProjectSixDesktop from '../imgs/img-project-1-desktop.jpg';

export type Project = {
  area:       string;
  text:       string;
  title:      string;
  imgMobile:  string;
  imgDesktop: string;
}

export const projects: Project[] = [
  {
    title: 'project 1',
    text: 'Description',
    area: 'photography',
    imgMobile: ProjectOne,
    imgDesktop: ProjectOneDesktop
  },
  {
    title: 'project 2',
    text: 'Description',
    area: 'branding',
    imgMobile: ProjectTwo,
    imgDesktop: ProjectTwoDesktop
  },
  {
    title: 'project 3',
    text: 'Description',
    area: 'photography',
    imgMobile: ProjectThree,
    imgDesktop: ProjectThreeDesktop
  },
  {
    title: 'project 4',
    text: 'Description',
    area: 'branding',
    imgMobile: ProjectFour,
    imgDesktop: ProjectFourDesktop
  },
  {
    title: 'project 5',
    text: 'Description',
    area: 'photography',
    imgMobile: ProjectFive,
    imgDesktop: ProjectFiveDesktop
  },
  {
    title: 'project 6',
    text: 'Description',
    area: 'branding',
    imgMobile: ProjectSix,
    imgDesktop: ProjectSixDesktop
  },
]