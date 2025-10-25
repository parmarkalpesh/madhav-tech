import { projectsData } from '@/lib/data';
import { SectionWrapper } from './section-wrapper';
import { SectionHeading } from './section-heading';
import { ProjectGrid } from './project-grid';

const Projects = () => {
  return (
    <SectionWrapper id="projects">
      <SectionHeading title="Latest Projects" subtitle="Our Work" />
      <ProjectGrid projects={projectsData} />
    </SectionWrapper>
  );
};

export default Projects;
