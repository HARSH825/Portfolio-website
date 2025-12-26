const Card = ({ children, className = "", hover = true }) => {
    const hoverEffect = hover ? "hover:border-text-primary transition-all duration-300" : "";

    return (
        <div className={`bg-secondary border border-border ${hoverEffect} ${className}`}>
            {children}
        </div>
    );
};

export default Card;
