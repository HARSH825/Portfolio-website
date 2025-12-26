import SectionHeading from './common/SectionHeading';
import Card from './common/Card';
import Button from './common/Button';
import { codingProfiles } from '../data/codingProfiles';
import { SiLeetcode, SiCodeforces, SiCodechef } from 'react-icons/si';

const ProblemSolving = () => {
    const getIcon = (iconName) => {
        const icons = {
            SiLeetcode: <SiLeetcode size={40} />,
            SiCodeforces: <SiCodeforces size={40} />,
            SiCodechef: <SiCodechef size={40} />,
        };
        return icons[iconName] || null;
    };

    return (
        <section id="coding" className="py-20 bg-secondary/30">
            <div className="max-w-7xl mx-auto px-6">
                <SectionHeading
                    subtitle="1000+ problems solved across competitive programming platforms"
                >
                    Competitive Programming
                </SectionHeading>

                <div className="grid md:grid-cols-3 gap-8">
                    {codingProfiles.map((profile) => (
                        <Card key={profile.id} className="text-center">
                            {/* Platform Icon */}
                            <div className="flex justify-center mb-4" style={{ color: profile.color }}>
                                {getIcon(profile.icon)}
                            </div>

                            {/* Platform Name */}
                            <h3 className="text-2xl font-bold text-textPrimary mb-6">
                                {profile.platform}
                            </h3>

                            {/* Stats */}
                            <div className="space-y-3 mb-6">
                                <div>
                                    <p className="text-textSecondary text-sm mb-1">Problems Solved</p>
                                    <p className="text-3xl font-bold text-accent">{profile.problemsSolved}</p>
                                </div>
                                <div>
                                    <p className="text-textSecondary text-sm mb-1">Rating</p>
                                    <p className="text-xl font-semibold text-textPrimary">{profile.rating}</p>
                                </div>
                                {profile.rank && (
                                    <div>
                                        <p className="text-textSecondary text-sm mb-1">Level</p>
                                        <p className="text-lg font-medium text-accent">{profile.rank}</p>
                                    </div>
                                )}
                            </div>

                            {/* Profile Button */}
                            <Button
                                variant="secondary"
                                href={profile.profileLink}
                                className="w-full"
                            >
                                View Profile
                            </Button>
                        </Card>
                    ))}
                </div>

                {/* Additional Note */}
                <div className="text-center mt-12">
                    <p className="text-textSecondary text-lg">
                        Focused on <span className="text-accent font-semibold">data structures, algorithms</span> and <span className="text-accent font-semibold">system design fundamentals</span>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ProblemSolving;
