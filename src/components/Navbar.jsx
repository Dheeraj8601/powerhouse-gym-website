import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const links = [
  'home',
  'about',
  'facilities',
  'programs',
  'trainer',
  'membership',
  'gallery',
  'contact'
];

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState(false);

  const changeLanguage = (e) => {
    const lang = e.target.value;
    i18n.changeLanguage(lang);
    localStorage.setItem('powerhouse-language', lang);
  };

  return (
    <header className="navbar">
      <a className="brand" href="#home">
        <img src="/assets/logo.png" alt="Power House Gym" />
      </a>

      <button
        className="menu"
        onClick={() => setOpen((v) => !v)}
        aria-label="Menu"
      >
        ☰
      </button>

      <nav className={open ? 'open' : ''}>
        {links.map((x) => (
          <a
            key={x}
            href={`#${x}`}
            onClick={() => setOpen(false)}
          >
            {t(`nav.${x}`)}
          </a>
        ))}
      </nav>

      <div className="nav-actions">
        <select
          value={i18n.resolvedLanguage === 'kn' ? 'kn' : 'en'}
          onChange={changeLanguage}
          aria-label="Language"
        >
          <option value="en">EN</option>
          <option value="kn">ಕನ್ನಡ</option>
        </select>

        <a className="nav-cta" href="#enquiry">
          {t('nav.enquiry')}
        </a>
      </div>
    </header>
  );
}