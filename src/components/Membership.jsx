import { useTranslation } from 'react-i18next';
import SectionHeading from './SectionHeading';

export default function Membership() {
    const { t } = useTranslation();
    const plans = t('membership.plans', { returnObjects: true });

    return(
        <section id="membership" className="section">
            <SectionHeading tag={t('membership.tag')} title={t('membership.title')} />
            <div className="plans">
                {plans.map((x, i) =>
                    <article className={i === 0 ? 'featured' : ''} key={x}>
                        <span>0{i + 1}</span>
                        <h3>{x}</h3>
                        <p>{t('membership.pricing')}</p>
                        <a href="#enquiry">{t('membership.cta')}</a>
                    </article>
                )}
            </div>
        </section>
    );
}
