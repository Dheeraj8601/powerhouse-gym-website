import { useTranslation } from 'react-i18next';
import SectionHeading from './SectionHeading';

const icons = ['🏋️', '💪', '♥', '◎', '↘', '↗', '⚡'];

export default function Programs() {
    const { t } = useTranslation();
    const items = t('programs.items', { returnObjects: true });

    return (
        <section id="programs" className="section panel">
            <SectionHeading tag={t('programs.tag')} title={t('programs.title')} />
            <div className="card-grid programs">
                {items.map((x, i) =>
                    <article key={x.title}>
                        <i>{icons[i]}</i>
                        <h3>{x.title}</h3>
                        <p>{x.text}</p>
                    </article>
                )}
            </div>
        </section>
    );
}
