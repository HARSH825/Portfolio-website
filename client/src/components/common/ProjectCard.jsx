import Card from './Card';
import Button from './Button';
import { FiExternalLink, FiGithub, FiFileText, FiBook } from 'react-icons/fi';

const ProjectCard = ({ project }) => {
    return (
        <Card className="flex flex-col h-full p-6">
            {/* Title */}
            <h3 className="text-2xl font-bold text-text-primary mb-3">
                {project.title}
            </h3>

            {/* Description */}
            <p className="text-text-secondary mb-4 flex-grow">
                {project.description}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, index) => (
                    <span
                        key={index}
                        className="text-xs px-3 py-1 border border-text-secondary text-text-secondary"
                    >
                        {tech}
                    </span>
                ))}
            </div>

            {/* Impact - TEAL ACCENT */}
            <p className="text-accent text-sm font-medium mb-4">
                {project.impact}
            </p>

            {/* Buttons */}
            <div className="grid grid-cols-2 gap-3">
                <Button
                    variant="primary"
                    href={project.liveLink}
                    icon={<FiExternalLink />}
                    className="text-sm py-2"
                >
                    Live
                </Button>
                <Button
                    variant="secondary"
                    href={project.githubLink}
                    icon={<FiGithub />}
                    className="text-sm py-2"
                >
                    Code
                </Button>
                <Button
                    variant="secondary"
                    href={project.docsLink}
                    icon={<FiFileText />}
                    className="text-sm py-2"
                >
                    Docs
                </Button>
                <Button
                    variant="secondary"
                    href={project.storyLink}
                    icon={<FiBook />}
                    className="text-sm py-2"
                >
                    Story
                </Button>
            </div>
        </Card>
    );
};

export default ProjectCard;
