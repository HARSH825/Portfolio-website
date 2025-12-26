import { useState } from 'react';
import SectionHeading from './common/SectionHeading';
import { FiMail, FiGithub, FiLinkedin, FiCheck } from 'react-icons/fi';
import { SiLeetcode } from 'react-icons/si';

const Contact = () => {
    const [copied, setCopied] = useState(false);

    const copyEmail = () => {
        navigator.clipboard.writeText('harshchhallani3@gmail.com');
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const socialLinks = [
        {
            name: 'GitHub',
            icon: <FiGithub size={32} />,
            url: 'https://github.com/HARSH825',
        },
        {
            name: 'LinkedIn',
            icon: <FiLinkedin size={32} />,
            url: 'https://linkedin.com/in/harsh-chhallani1937',
        },
        {
            name: 'LeetCode',
            icon: <SiLeetcode size={32} />,
            url: 'https://leetcode.com/u/harsh1937',
        },
    ];

    return (
        <section id="contact" className="py-20 bg-primary">
            <div className="max-w-7xl mx-auto px-6">
                <SectionHeading>Let's Build Something</SectionHeading>

                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <button
                            onClick={copyEmail}
                            className="inline-flex items-center gap-3 text-2xl md:text-3xl font-bold text-accent hover:text-accent-hover transition-colors mb-4"
                        >
                            <FiMail />
                            harshchhallani3@gmail.com
                            {copied && <FiCheck className="text-accent" />}
                        </button>
                        <p className="text-text-secondary">
                            {copied ? 'Email copied to clipboard!' : 'Click to copy email address'}
                        </p>
                    </div>

                    {/* Links */}
                    <div className="flex justify-center gap-8">
                        {socialLinks.map((social) => (
                            <a
                                key={social.name}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-text-primary hover:text-accent transition-colors transform hover:scale-110 duration-300"
                                aria-label={social.name}
                            >
                                {social.icon}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
