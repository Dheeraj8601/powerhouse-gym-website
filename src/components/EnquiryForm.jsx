import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import SectionHeading from './SectionHeading';
import { CONTACT } from '../assets/config/contact';

const initial =
{
    name: '',
    phone: '',
    age: '',
    gender: '',
    goal: '',
    time: '',
    duration: '',
    message: ''
};

export default function EnquiryForm() {
    const { t } = useTranslation();
    const [form, setForm] = useState(initial);
    const [error, setError] = useState('');
    const update = e => setForm({ ...form, [e.target.name]: e.target.value });
    const genders = t('form.genders', { returnObjects: true });
    const times = t('form.times', { returnObjects: true });
    const goals = t('programs.items', { returnObjects: true });
    const plans = t('membership.plans', { returnObjects: true });
    const submit = (e) => {
        e.preventDefault();

        if (!form.name.trim() || !form.phone.trim()) {
            setError(t('form.required'));
            return;
        }

        setError('');

        const msg = `
                Power House Gym Enquiry

                Name: ${form.name}
                Phone: ${form.phone}
                Age: ${form.age || '-'}
                Gender: ${form.gender || '-'}
                Goal: ${form.goal || '-'}
                Preferred time: ${form.time || '-'}
                Membership: ${form.duration || '-'}
                Message: ${form.message || '-'}
            `;

        const whatsappUrl =
            `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(msg)}`;

        window.open(
            whatsappUrl,
            '_blank',
            'noopener,noreferrer'
        );
    };

    return (
        <section id="enquiry" className="section enquiry">
            <div className="enquiry-copy">
                <SectionHeading tag={t('form.tag')} title={t('form.title')} />
                <p>{t('form.intro')}</p>
                <div className="form-quote">“Small steps every day create powerful results.”</div>
            </div>
            <form onSubmit={submit}>
                <div className="form-grid">
                    <label>
                        {t('form.name')} *
                        <input name="name" value={form.name} onChange={update} />
                    </label>
                    <label>
                        {t('form.phone')} *
                        <input name="phone" inputMode="tel" value={form.phone} onChange={update} />
                    </label>
                    <label>
                        {t('form.age')}
                        <input name="age" type="number" min="12" max="90" value={form.age} onChange={update} />
                    </label>
                    <label>
                        {t('form.gender')}
                        <select name="gender" value={form.gender} onChange={update}>
                            <option value="">{t('form.select')}</option>
                            {genders.map(x =>
                                <option key={x}>{x}</option>
                            )}
                        </select>
                    </label><label>
                        {t('form.goal')}
                        <select name="goal" value={form.goal} onChange={update}>
                            <option value="">{t('form.select')}</option>
                            {goals.map(x =>
                                <option key={x.title}>{x.title}</option>
                            )}
                        </select>
                    </label>
                    <label>
                        {t('form.time')}
                        <select name="time" value={form.time} onChange={update}>
                            <option value="">{t('form.select')}</option>
                            {times.map(x =>
                                <option key={x}>{x}</option>
                            )}
                        </select>
                    </label>
                    <label>
                        {t('form.duration')}
                        <select name="duration" value={form.duration} onChange={update}>
                            <option value="">{t('form.select')}
                            </option>
                            {plans.map(x =>
                                <option key={x}>{x}</option>
                            )}
                        </select>
                    </label>
                    <label className="wide">{t('form.message')}
                        <textarea name="message" rows="4" value={form.message} onChange={update} />
                    </label>
                </div>
                {error
                    &&
                    <p className="error">
                        {error}</p>
                }
                <button type="submit">
                    {t('form.send')} →
                </button>
            </form>
        </section>
    );
}
