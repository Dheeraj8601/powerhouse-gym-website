import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export default function SplashScreen({ onFinish }) {
  const { t } = useTranslation();

  useEffect(() => {
    const timer = window.setTimeout(onFinish, 2400);
    return () => window.clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="splash" role="status" aria-live="polite">
      <div className="splash-glow" />
      <img src="/assets/logo.png" alt="Power House Gym" />
      <p>{t('splash.loading')}</p>
      <span className="loader" />
    </div>
  );
}
