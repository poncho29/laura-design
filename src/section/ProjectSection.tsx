import { useState } from 'react';
import Tab from 'react-bootstrap/esm/Tab';
import Tabs from 'react-bootstrap/esm/Tabs';

import { GridProjects } from '../components/common';

import '../styles/sections/ProjectSection.css';
import { projects } from '../assets/data/projects';

interface Props {
  id: string;
}

export const ProjectSection = ({ id }: Props) => {
  const [key, setKey] = useState('all');
  
  return (
    <section className="projects" id={id}>
      <div className="container">
        <div className="title-section">
          <h2 className="title">Portafolio</h2>
        </div>

        <div className='projects-group'>
          <Tabs
            className="mb-3"
            activeKey={key}
            onSelect={(k) => setKey(k!)}
          >
            <Tab eventKey="all" title="Todo">
              <GridProjects projects={projects} area="all" />
            </Tab>
            <Tab eventKey="photography" title="Fotografía">
              <GridProjects projects={projects}  area="photography" />
            </Tab>
            <Tab eventKey="branding" title="Branding">
              <GridProjects projects={projects}  area="branding" />
            </Tab>
            <Tab eventKey="design" title="Diseño Web">
              <GridProjects projects={projects} area="design" />
            </Tab>
          </Tabs>
        </div>

        {/* <Button type='button'>Ver más</Button> */}
      </div>
    </section>
  )
}
