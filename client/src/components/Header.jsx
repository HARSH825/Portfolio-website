import { useState, useEffect } from 'react';
import Button from './common/Button';
import { FiDownload, FiMenu, FiX } from 'react-icons/fi';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsMobileMenuOpen(false);
        }
    };

    const navLinks = [
        { name: 'Projects', id: 'projects' },
        { name: 'Coding', id: 'coding' },
        { name: 'Achievements', id: 'achievements' },
        { name: 'Contact', id: 'contact' },
    ];

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-primary border-b border-border' : 'bg-transparent'
                }`}
        >
            <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                {/* Logo */}
                <button
                    onClick={() => scrollToSection('hero')}
                    className="text-2xl font-bold text-text-primary hover:text-accent transition-colors"
                >
                    HC
                </button>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <button
                            key={link.id}
                            onClick={() => scrollToSection(link.id)}
                            className="text-text-primary hover:text-accent transition-colors font-medium"
                        >
                            {link.name}
                        </button>
                    ))}
                    <Button
                        variant="primary"
                        href="https://drive.google.com/file/d/1WzmvSdsjDiLaZYAd6ParBsrO3zS1gLqF/view?usp=sharing"
                        icon={<FiDownload />}
                        className="text-sm"
                    >
                        Resume
                    </Button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="md:hidden text-text-primary text-2xl"
                >
                    {isMobileMenuOpen ? <FiX /> : <FiMenu />}
                </button>
            </nav>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-secondary border-t border-border">
                    <div className="px-6 py-4 flex flex-col gap-4">
                        {navLinks.map((link) => (
                            <button
                                key={link.id}
                                onClick={() => scrollToSection(link.id)}
                                className="text-text-primary hover:text-accent transition-colors font-medium text-left"
                            >
                                {link.name}
                            </button>
                        ))}
                        <Button
                            variant="primary"
                            href="https://drive.google.com/file/d/1WzmvSdsjDiLaZYAd6ParBsrO3zS1gLqF/view?usp=sharing"
                            icon={<FiDownload />}
                            className="text-sm w-full"
                        >
                            Resume
                        </Button>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
