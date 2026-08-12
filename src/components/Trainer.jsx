import { useTranslation } from 'react-i18next';
import SectionHeading from './SectionHeading';

export default function Trainer() {
    const { t } = useTranslation();
    const skills = t('trainer.skills', { returnObjects: true });

    
    return (
        <section id="trainer" className="section trainer">
            <div className="trainer-visual">
                <div className="trainer-silhouette">1</div>
            </div>
            <div>
                <SectionHeading tag={t('trainer.tag')} title={t('trainer.title')} />
                <p>{t('trainer.text')}</p>
                <div className="skills">
                    {skills.map(x =>
                        <span key={x}>✓ {x}</span>
                    )}
                </div>
                <blockquote>“{t('trainer.quote')}”</blockquote>
            </div>
        </section>
    );
}
