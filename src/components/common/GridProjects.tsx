import { useMemo, useState } from "react";

import { Project } from "../../assets/data/projects";

import '../../styles/components/common/GridProjects.css';

type Props = {
  area: string;
  projects: Project[],
}

export const GridProjects = ({ area, projects }: Props): JSX.Element => {
  const [show, setShow] = useState('');

  const openLink = (url: string) => {
    let link = window.open(url, '_blank');
    link && link.focus()
  }

  const filterProjects = useMemo(() => {
    if (projects.length === 0) return [];

    if (area === 'all') {
      return projects
    } else {
      const data = projects.filter((project) => project.area === area)
      return data;
    }
  }, [area])

  return (
    <div className='project-grid'>
      {filterProjects?.length > 0 ?
        filterProjects.map((item: Project) => {
          const { title, img, url} = item;

          return (
            <div
              key={title}
              className='project-group'
              onMouseEnter={() => setShow(title)}
              onMouseLeave={() => setShow('')}
              onClick={() => openLink(url)}
            >
              <img
                alt={title}
                className="img-project"
                src={img}

              />
              <div className={`
                hover-project animate__animated animate__zoomIn ${(show == title) && 'active'}
              `}>
                <h2>{title}</h2>
                {/* <p>{text}</p> */}
              </div>
            </div>
          )
        }) :
        <div>No projects</div>
      }
    </div>
  )
}
