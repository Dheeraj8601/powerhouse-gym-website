import { useTranslation } from 'react-i18next';
import SectionHeading from './SectionHeading';
import { GALLERY_PHOTOS } from '../assets/config/contact'


export default function Gallery() {
    const { t } = useTranslation();

    return (
        <section id="gallery" className="section">
            <SectionHeading tag={t('gallery.tag')} title={t('gallery.title')} />
            <div className="gallery">
                {GALLERY_PHOTOS.map((src, i) =>
                    <img src={src} alt={`Gym ${i + 1}`} key={src} loading="lazy" />
                )}
            </div>
        </section>
    );
}
