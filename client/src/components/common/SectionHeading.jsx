const SectionHeading = ({ children, subtitle }) => {
    return (
        <div className="mb-12 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
                {children}
            </h2>
            {subtitle && (
                <p className="text-text-secondary text-lg max-w-2xl mx-auto">
                    {subtitle}
                </p>
            )}
            {/* Removed teal line */}
        </div>
    );
};

export default SectionHeading;
