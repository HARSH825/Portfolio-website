const Button = ({ children, variant = "primary", onClick, href, className = "", icon }) => {
    const baseStyles = "px-6 py-3 font-medium transition-all duration-300 flex items-center gap-2 justify-center border";

    const variants = {
        primary: "border-2 border-accent text-accent hover:bg-accent hover:text-primary",
        secondary: "border border-text-secondary text-text-secondary hover:border-text-primary hover:text-text-primary",
        ghost: "border-none text-text-primary hover:text-accent",
    };

    const combinedStyles = `${baseStyles} ${variants[variant]} ${className}`;

    if (href) {
        return (
            <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={combinedStyles}
            >
                {icon && <span>{icon}</span>}
                {children}
            </a>
        );
    }

    return (
        <button onClick={onClick} className={combinedStyles}>
            {icon && <span>{icon}</span>}
            {children}
        </button>
    );
};

export default Button;
