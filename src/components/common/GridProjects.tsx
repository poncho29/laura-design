import { useState } from "react";

import useScreen from "../../hooks/useScreen";
import { Project } from "../../assets/data/projects";

import '../../styles/components/common/GridProjects.css';

type Props = {
  projects: Project[],
}

export const GridProjects = ({ projects }: Props): JSX.Element => {
  const { width } = useScreen();
  const [show, setShow] = useState('');


  return (
    <div className='project-grid'>
      {projects.length > 0 ?
        projects.map((item: Project) => {
          const { title, text, imgMobile, imgDesktop} = item;

          return (
            <div
              key={title}
              className='project-group'
              onMouseEnter={() => setShow(title)}
              onMouseLeave={() => setShow('')}
            >
              <img
                alt={title}
                className="img-project"
                src={width >= 992 ? imgDesktop : imgMobile}
              />
              <div className={`
                hover-project animate__animated animate__zoomIn ${(show == title) && 'active'}
              `}>
                <h2>{title}</h2>
                <p>{text}</p>
              </div>
            </div>
          )
        }) :
        <div>No projects</div>
      }
    </div>
  )
}
