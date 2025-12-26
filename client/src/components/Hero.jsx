import Button from './common/Button';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import { SiLeetcode } from 'react-icons/si';

const Hero = () => {
    const socialLinks = [
        {
            name: 'GitHub',
            icon: <FiGithub size={24} />,
            url: 'https://github.com/HARSH825',
        },
        {
            name: 'LinkedIn',
            icon: <FiLinkedin size={24} />,
            url: 'https://linkedin.com/in/harsh-chhallani1937',
        },
        {
            name: 'LeetCode',
            icon: <SiLeetcode size={24} />,
            url: 'https://leetcode.com/harsh1937',
        },
    ];

    return (
        <section id="hero" className="min-h-screen flex items-center pt-16 bg-primary">
            <div className="max-w-7xl mx-auto px-6 w-full">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left: Cat Image */}
                    <div className="order-2 md:order-1">
                        <div className="relative inline-block">
                            <div className="absolute left-0 top-0 bottom-0 border-l-2 border-text-primary"></div>
                            <img
                                src="/cat.png"
                                alt="Harsh Chhallani"
                                className="w-full h-auto grayscale pl-4"
                            />
                        </div>
                    </div>

                    {/* Right: Content */}
                    <div className="order-1 md:order-2 space-y-6">
                        <div>
                            {/* Greeting */}
                            <p className="text-2xl md:text-3xl text-text-secondary mb-2">
                                Hi,
                            </p>

                            {/* Name */}
                            <h1 className="text-5xl md:text-7xl font-bold text-text-primary mb-6 leading-tight">
                                I am Harsh Chhallani
                            </h1>

                            {/* Description - Bold but smaller */}
                            <p className="text-xl md:text-2xl font-semibold text-text-primary leading-relaxed mb-4">
                                I'm a simple guy who observes problems around and tries to solve them with technology and some logic.
                            </p>

                            {/* User stat - ONLY TEAL USAGE */}
                            <p className="text-lg md:text-xl text-text-secondary">
                                Built products used by <span className="text-accent font-bold">200+ Real Users</span>
                            </p>
                        </div>

                        {/* CTA Buttons - OUTLINED */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button
                                variant="primary"
                                onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
                            >
                                View Projects
                            </Button>
                            <Button
                                variant="secondary"
                                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                            >
                                Get In Touch
                            </Button>
                        </div>

                        {/* Social Links */}
                        <div className="flex gap-6 pt-4">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-text-primary hover:text-accent transition-colors"
                                    aria-label={social.name}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
