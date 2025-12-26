import SectionHeading from './common/SectionHeading';
import ProjectCard from './common/ProjectCard';
import { projects } from '../data/projects';

const Projects = () => {
    return (
        <section id="projects" className="py-20">
            <div className="max-w-7xl mx-auto px-6">
                <SectionHeading
                    subtitle="Production-grade applications serving real users with focus on scalability and impact"
                >
                    Featured Projects
                </SectionHeading>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
