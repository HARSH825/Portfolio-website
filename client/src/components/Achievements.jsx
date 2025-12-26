import SectionHeading from './common/SectionHeading';
import Card from './common/Card';
import { achievements } from '../data/achievements';

const Achievements = () => {
    return (
        <section id="achievements" className="py-20">
            <div className="max-w-7xl mx-auto px-6">
                <SectionHeading
                    subtitle="Recognition at national-level hackathons and competitions"
                >
                    Achievements
                </SectionHeading>

                <div className="grid md:grid-cols-2 gap-8">
                    {achievements.map((achievement) => (
                        <Card key={achievement.id} className="flex items-start gap-6">
                            <div className="text-5xl shrink-0">
                                {achievement.icon}
                            </div>

                            <div className="grow">
                                <h3 className="text-2xl font-bold text-textPrimary mb-2">
                                    {achievement.title}
                                </h3>
                                <p className="text-accent font-semibold text-lg mb-2">
                                    {achievement.rank}
                                </p>
                                <p className="text-textSecondary">
                                    {achievement.total}
                                </p>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Achievements;
