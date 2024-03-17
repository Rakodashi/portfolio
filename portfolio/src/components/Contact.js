import { useTranslation } from 'react-i18next';
import '../lib/i18n';

const Contact = () => {
  const { t } = useTranslation()
  
  return ( 
    <section id="contact">
        <h1>{t('Contact Me')}</h1>
            <form action="https://formspree.io/f/xrgvyjgz" method="POST">
                <input type="text" id="name" name={t('Name')} placeholder={t('Name')} required />
                <input type="email" id="email" name="email" placeholder="E-mail" required />
                <textarea id="message" name={t('Message')} placeholder={t('Message')} required />
                <button type="submit">{t('Send')}</button>
            </form>
    </section>
   );
}
 
export default Contact;