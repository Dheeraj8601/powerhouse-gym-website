import { useTranslation } from 'react-i18next';
import { CONTACT } from '../assets/config/contact';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer>
      <img
        src="/assets/logo.png"
        alt="Power House Gym"
      />

      <p>
        {t('footer.hours')}
        <br />
        {t('footer.sunday')}
      </p>

      <p>
        {t('footer.copy')}
        <br />
        {t('footer.motto')}
      </p>

      <p className="developer-credit">
        Developed by{' '}
        <a
          href={CONTACT.developerLinkedIn}
          target="_blank"
          rel="noopener noreferrer"
        >
          {CONTACT.developer}
        </a>
      </p>
    </footer>
  );
}