import { useRef, useState } from "react";
import { useFormik } from "formik";
import * as Yup from 'yup';
import Spinner from 'react-bootstrap/Spinner';

import { Icon } from "../components/icons";
import { Button, SectionTitle } from "../components/common";
import { Input, Textarea } from "../components/form";

import '../styles/sections/ContactSection.css';

interface Props {
  id: string;
}

type Status = 'idle' | 'sending' | 'success' | 'error';

const EMAIL = 'lauram.1001@outlook.es';
const FORM_ENDPOINT = 'https://api.web3forms.com/submit';
// Web3Forms access keys are public by design: they only allow sending to the owner's inbox
const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY;
const MESSAGE_MIN = 10;
const MESSAGE_MAX = 1000;

const initialValues = {
  fullName: '',
  email: '',
  subject: '',
  message: '',
};

type Values = typeof initialValues;
const FIELD_ORDER: (keyof Values)[] = ['fullName', 'email', 'subject', 'message'];

const validationSchema = Yup.object({
  fullName: Yup.string().trim().min(2, 'Escribe al menos 2 caracteres').required('Cuéntame cómo te llamas'),
  email: Yup.string().trim().email('Ingresa un correo válido, por ejemplo nombre@correo.com').required('Necesito tu correo para responderte'),
  subject: Yup.string().trim().max(100, 'El asunto puede tener máximo 100 caracteres'),
  message: Yup.string()
    .trim()
    .min(MESSAGE_MIN, `Cuéntame un poco más (mínimo ${MESSAGE_MIN} caracteres)`)
    .max(MESSAGE_MAX, `El mensaje puede tener máximo ${MESSAGE_MAX} caracteres`)
    .required('Escribe tu mensaje'),
});

export const ContactSection = ({ id }: Props) => {
  const [status, setStatus] = useState<Status>('idle');
  const honeypotRef = useRef<HTMLInputElement>(null);

  const formik = useFormik<Values>({
    initialValues,
    validationSchema,
    onSubmit: async (values, helpers) => {
      setStatus('sending');

      try {
        if (!WEB3FORMS_KEY) throw new Error('Missing VITE_WEB3FORMS_KEY');

        // FormData keeps this a CORS "simple request" (no preflight), as Web3Forms recommends
        const body = new FormData();
        body.append('access_key', WEB3FORMS_KEY);
        body.append('name', values.fullName.trim());
        body.append('email', values.email.trim());
        body.append('message', values.message.trim());
        body.append('subject', values.subject.trim()
          ? `Portafolio: ${values.subject.trim()}`
          : `Portafolio: nuevo mensaje de ${values.fullName.trim()}`);
        body.append('from_name', 'Portafolio Laura Martínez');
        body.append('botcheck', honeypotRef.current?.value ?? '');

        const response = await fetch(FORM_ENDPOINT, {
          method: "POST",
          headers: { 'Accept': 'application/json' },
          body,
        });
        const data = await response.json().catch(() => ({}));

        // Web3Forms answers { success: boolean, message }
        if (!response.ok || data?.success !== true) {
          throw new Error(data?.message ?? `HTTP ${response.status}`);
        }

        helpers.resetForm();
        setStatus('success');
      } catch (error) {
        console.error(error);
        setStatus('error');
      }
    },
  });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status === 'sending') return;

    const errors = await formik.validateForm();
    const firstInvalid = FIELD_ORDER.find((field) => errors[field]);

    if (firstInvalid) {
      formik.setTouched({ fullName: true, email: true, subject: true, message: true }, false);
      document.getElementById(firstInvalid)?.focus();
      return;
    }

    formik.submitForm();
  };

  const fieldError = (name: keyof Values) =>
    formik.touched[name] && formik.errors[name] ? formik.errors[name] : undefined;

  const sending = status === 'sending';

  return (
    <section className="contact" id={id}>
      <div className="container">
        <SectionTitle title="Contacto" />

        <div className="contact-card">
          {/* INFO PANEL */}
          <div className="contact-info">
            <h3 className="contact-heading">¿Creamos algo juntos?</h3>
            <p className="contact-copy">
              Cuéntame sobre tu marca o tu proyecto web. Te respondo lo más pronto posible
              para armar una propuesta a tu medida.
            </p>

            <ul className="contact-list">
              <li>
                <a className="contact-item" href={`mailto:${EMAIL}`}>
                  <span className="contact-item-icon"><Icon iconName="MailIcon" size={18} height={15} /></span>
                  <span className="contact-item-text">
                    <span className="contact-item-label">Correo</span>
                    <span className="contact-item-value">{EMAIL}</span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  className="contact-item"
                  href="https://wa.me/573042119022"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp +57 304 211 9022 (se abre en una pestaña nueva)"
                >
                  <span className="contact-item-icon"><Icon iconName="WhatsappIcon" size={18} height={18} /></span>
                  <span className="contact-item-text">
                    <span className="contact-item-label">WhatsApp</span>
                    {' '}
                    <span className="contact-item-value">+57 304 211 9022</span>
                  </span>
                </a>
              </li>
              <li>
                <div className="contact-item">
                  <span className="contact-item-icon"><Icon iconName="LocationIcon" size={16} height={18} /></span>
                  <span className="contact-item-text">
                    <span className="contact-item-label">Ubicación</span>
                    <span className="contact-item-value">Socorro, Santander - Colombia</span>
                  </span>
                </div>
              </li>
            </ul>

            <div className="contact-social">
              <span className="contact-social-label">También en</span>
              <a
                className="contact-social-link"
                href="https://wa.me/573042119022"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp de Laura (se abre en una pestaña nueva)"
              >
                <Icon iconName="WhatsappIcon" size={16} height={16} />
              </a>
              <a
                className="contact-social-link"
                href="https://www.behance.net/lauravmartine3"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Behance de Laura (se abre en una pestaña nueva)"
              >
                <Icon iconName="BehindIncon" size={22} height={14} />
              </a>
              <a
                className="contact-social-link"
                href="https://www.linkedin.com/in/laura-valentina-martinez-guevara-b577ba25a/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn de Laura (se abre en una pestaña nueva)"
              >
                <Icon iconName="LinkedinIcon" size={16} height={16} />
              </a>
            </div>
          </div>

          {/* FORM PANEL */}
          <div className="contact-form-panel">
            <h3 className="contact-form-title">Envíame un mensaje</h3>
            <p className="contact-form-note">Los campos con <span aria-hidden="true">*</span><span className="visually-hidden">asterisco</span> son obligatorios.</p>

            <form className="form" onSubmit={handleSubmit} noValidate aria-label="Formulario de contacto">
              <Input
                type="text"
                id="fullName"
                name="fullName"
                label="Nombre completo"
                placeholder="Tu nombre"
                autoComplete="name"
                required
                value={formik.values.fullName}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                error={fieldError('fullName')}
              />

              <Input
                type="email"
                id="email"
                name="email"
                label="Correo electrónico"
                placeholder="nombre@correo.com"
                autoComplete="email"
                inputMode="email"
                autoCapitalize="none"
                spellCheck={false}
                required
                value={formik.values.email}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                error={fieldError('email')}
              />

              <Input
                type="text"
                id="subject"
                name="subject"
                label="Asunto"
                placeholder="Ej. Logo y branding para mi negocio"
                autoComplete="off"
                maxLength={100}
                value={formik.values.subject}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                error={fieldError('subject')}
              />

              <Textarea
                id="message"
                name="message"
                label="Mensaje"
                placeholder="Cuéntame qué necesitas, plazos o referencias que te gusten..."
                required
                counter
                maxLength={MESSAGE_MAX}
                hint={`Mínimo ${MESSAGE_MIN} caracteres`}
                value={formik.values.message}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                error={fieldError('message')}
              />

              {/* Honeypot: hidden from people, bots tend to fill it */}
              <input ref={honeypotRef} type="text" name="botcheck" tabIndex={-1} autoComplete="off" aria-hidden="true" className="honeypot" />

              <Button
                type="submit"
                size="full"
                className="contact-submit"
                disabled={sending}
                aria-busy={sending}
              >
                {sending ? (
                  <>
                    <Spinner animation="border" variant="dark" size="sm" aria-hidden="true" />
                    <span>Enviando...</span>
                  </>
                ) : 'Enviar mensaje'}
              </Button>

              <div className="contact-status" role="status" aria-live="polite">
                {status === 'success' && (
                  <p className="contact-feedback contact-feedback--success">
                    ¡Mensaje enviado! Gracias por escribirme, te responderé lo más pronto posible.
                  </p>
                )}
                {status === 'error' && (
                  <p className="contact-feedback contact-feedback--error">
                    No pudimos enviar tu mensaje. Inténtalo de nuevo o escríbeme directamente a{' '}
                    <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
