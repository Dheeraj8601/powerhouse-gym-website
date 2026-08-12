import { useTranslation } from 'react-i18next';

export default function QuoteStrip() {
    const { t } = useTranslation();
    const quotes = t('quotes', { returnObjects: true });

    return (
        <section className="quote-strip">
            {quotes.map((q, i) =>
                <article key={q}>
                    <b>0{i + 1}</b>
                    <p>{q}</p>
                </article>
            )}
        </section>
    );
}
