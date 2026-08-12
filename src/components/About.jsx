import { useTranslation } from 'react-i18next';
import SectionHeading from './SectionHeading';
import { CONTACT } from '../assets/config/contact';
const MAP = 'https://www.google.com/maps/search/powerhouse+gym+mudarangadi/@13.1661005,74.7670068,11.25z?entry=ttu';
export default function About() {

    const { t } = useTranslation();
    return (
        <section id="about" className="section about">
            <div>
                <SectionHeading tag={t('about.tag')} title={t('about.title')} />
                <p>{t('about.text')}</p>
                <a className="text-link" href={MAP} target="_blank" rel="noreferrer">
                    {t('about.map')} ↗
                </a>
            </div>
            <img src="/assets/gym-floor.png" alt="Power House Gym interior" />
            <aside>
                <h3>
                    {t('about.hours')}</h3>
                <strong>{t('about.weekdays')}</strong>
                <p>{t('about.morning')}</p>
                <p>{t('about.evening')}</p>
                <hr />
                <p>{t('about.sunday')}</p>
                <a href={`tel:${CONTACT.callNumber}`}>
                    {CONTACT.phoneNumber}
                </a>

                <a href={`mailto:${CONTACT.email}`}>
                    {CONTACT.email}
                </a>
            </aside>
        </section>
    );
}
