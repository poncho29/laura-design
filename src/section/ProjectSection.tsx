import { useLayoutEffect, useRef, useState } from 'react';
import Tab from 'react-bootstrap/esm/Tab';
import Tabs from 'react-bootstrap/esm/Tabs';

import { GridProjects, SectionTitle } from '../components/common';

import '../styles/sections/ProjectSection.css';
import { projects } from '../assets/data/projects';

interface Props {
  id: string;
}

export const ProjectSection = ({ id }: Props) => {
  const [key, setKey] = useState('design');
  const groupRef = useRef<HTMLDivElement>(null);

  // Sliding indicator: measure the active tab and expose its offset/width as CSS variables.
  useLayoutEffect(() => {
    const nav = groupRef.current?.querySelector<HTMLElement>('.nav-tabs');
    if (!nav) return;

    const measure = () => {
      const active = nav.querySelector<HTMLElement>('.nav-link.active');
      if (!active) return;
      nav.style.setProperty('--ind-x', `${active.offsetLeft}px`);
      nav.style.setProperty('--ind-w', `${active.offsetWidth}px`);
    };

    measure();
    // Enable the transition only after the first measurement, so it does not slide in from 0.
    const raf = requestAnimationFrame(() => nav.classList.add('has-indicator'));

    const observer = new ResizeObserver(measure);
    observer.observe(nav);
    nav.querySelectorAll('.nav-link').forEach((el) => observer.observe(el));
    document.fonts?.ready.then(measure);

    return () => {
      cancelAnimationFrame(raf);
      observer.disconnect();
    };
  }, [key]);

  return (
    <section className="projects" id={id}>
      <div className="container">
        <SectionTitle title="Portafolio" />

        <div className='projects-group' ref={groupRef}>
          <Tabs
            className="mb-4"
            activeKey={key}
            onSelect={(k) => setKey(k!)}
          >
            <Tab eventKey="design" title="Diseño Web">
              <GridProjects projects={projects} area="design" resetKey={key} label="Proyectos de diseño web" />
            </Tab>
            <Tab eventKey="branding" title="Branding">
              <GridProjects projects={projects} area="branding" resetKey={key} label="Proyectos de branding" />
            </Tab>
          </Tabs>
        </div>
      </div>
    </section>
  )
}
