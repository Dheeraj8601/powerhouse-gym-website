import { useTranslation } from 'react-i18next';
import { CONTACT } from '../assets/config/contact';

export default function Hero() {
    const { t } = useTranslation();
    const points = t('hero.points', { returnObjects: true });

    return(
    <section id="home" className="hero">
        <div className="hero-shade" />
        <div className="hero-copy">
            <p className="eyebrow">{t('hero.eyebrow')}</p>
            <h1>{t('hero.line1')}<span>{t('hero.line2')}</span></h1>
            <p>{t('hero.copy')}</p>
            <div className="hero-actions">
                <a className="btn primary" href={`https://wa.me/${CONTACT.whatsappNumber}`} target="_blank" rel="noreferrer">{t('hero.join')}</a>
                <a className="btn outline" href="#programs">{t('hero.explore')}</a>
            </div>
            <div className="hero-points">
                {points.map(x =>
                    <span key={x}>✓ {x}
                    </span>
                )}
            </div>
        </div>
        <blockquote>
            “{t('hero.quote')}”
        </blockquote>
    </section>
    );
}
