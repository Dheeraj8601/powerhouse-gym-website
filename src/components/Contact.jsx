import { useTranslation } from 'react-i18next';
import SectionHeading from './SectionHeading';
import { CONTACT } from '../assets/config/contact';

export default function Contact() {
    const { t } = useTranslation();


    return (
        <section id="contact" className="section contact">
            <div>
                <SectionHeading tag={t('contact.tag')} title={t('contact.title')} />
                <p>{t('contact.address')}</p>
                <div className="contact-links">
                    <a href={`tel:${CONTACT.callNumber}`}>☎ {t('contact.phone')}</a>
                    <a href={`mailto:${CONTACT.email}`}>✉ {t('contact.email')}</a>
                    <a
                        href={CONTACT.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {t('contact.instagram')}
                    </a>

                    <a
                        href={CONTACT.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {t('contact.facebook')}
                    </a>
                </div>
            </div>
            <iframe title="Power House Gym map" src={CONTACT.mapUrl} loading="lazy" />
        </section>
    );
}
