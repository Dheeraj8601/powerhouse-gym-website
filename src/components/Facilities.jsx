import { useTranslation } from 'react-i18next';
import SectionHeading from './SectionHeading';
export default function Facilities() {
    const { t } = useTranslation();
    const items = t('facilities.items', { returnObjects: true });

    return
    <section id="facilities" className="section">
        <SectionHeading tag={t('facilities.tag')} title={t('facilities.title')} />
        <div className="card-grid facilities">
            {items.map((x, i) =>
                <article key={x.title}>
                    <span>0{i + 1}</span>
                    <h3>{x.title}</h3>
                    <p>{x.text}</p>
                </article>
            )}
        </div>
    </section>
}
