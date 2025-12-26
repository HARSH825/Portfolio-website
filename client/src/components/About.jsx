import SectionHeading from './common/SectionHeading';
import { skills } from '../data/skills';

const About = () => {
    return (
        <section id="about" className="py-20 bg-primary">
            <div className="max-w-7xl mx-auto px-6">
                <SectionHeading>About Me</SectionHeading>

                <div className="max-w-4xl mx-auto">
                    <div className="mb-12 space-y-6">
                        <p className="text-lg text-text-primary leading-relaxed">
                            I code, lift, trade, sleep, and endlessly loop.
                        </p>
                        <p className="text-lg text-text-secondary leading-relaxed">
                            Shipped products used by <span className="text-accent font-semibold">200+ real users</span> across AI proctoring, voice interview platforms, and assignment automation systems in production.
                        </p>
                        <p className="text-lg text-text-secondary leading-relaxed">
                            Backend-focused engineer who builds <span className="text-text-primary font-medium">scalable systems</span>.
                            Also good at frontend when needed  i.e. I ship products end-to-end.
                        </p>
                    </div>

                    {/* Tech Stack */}
                    <div>
                        <h3 className="text-2xl font-bold text-text-primary mb-6">
                            Tech Stack
                        </h3>
                        <div className="flex flex-wrap gap-3">
                            {skills.map((skill, index) => (
                                <span
                                    key={index}
                                    className="px-4 py-2 border border-text-secondary text-text-secondary hover:border-text-primary hover:text-text-primary transition-all duration-300 font-medium"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
