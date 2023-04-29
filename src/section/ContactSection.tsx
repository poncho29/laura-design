import { useFormik } from "formik";
import * as Yup from 'yup';

import { Button } from "../components/common";
import { Input, Textarea } from "../components/form";

import '../styles/sections/ContactSection.css';
import { Icon } from "../components/icons";

export const ContactSection = () => {
  const formik = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      message: ''
    },
    validationSchema: Yup.object({
      fullName: Yup.string().required('El nombre es requerido'),
      email: Yup.string().email('Correo electronico invalido').required('El correo es requerido'),
      message: Yup.string().required('El mensaje es requerido'),
    }),
    onSubmit: values => {
      console.log(values)
    },
  });

  return (
    <section className="contact">
      <div className="container">
        <h2 className="title">Contacto</h2>
        <h3 className="subtitle">Envía tú mensaje</h3>

        <form className="form" onSubmit={formik.handleSubmit}>
          <Input
            type="text"
            id="fullName"
            name="fullName"
            label="Nombre completo *"
            value={formik.values.fullName}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
          {formik.touched.fullName && formik.errors.fullName ? (
            <span className="error">{formik.errors.fullName}</span>
          ) : null}

          <Input
            type="email"
            id="email"
            name="email"
            label="Correo electronico *"
            value={formik.values.email}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
          {formik.touched.email && formik.errors.email ? (
            <span className="error">{formik.errors.email}</span>
          ) : null}

          <Textarea
            id="message"
            name="message"
            label="Mensaje *"
            value={formik.values.message}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
          {formik.touched.message && formik.errors.message ? (
            <span className="error">{formik.errors.message}</span>
          ) : null}

          <Button type="submit">Enviar</Button>
        </form>

        <div className="info-contact">
          <h2 className="subtitle">Información de contacto</h2>

          <div className="options">
            <div className="option-group location">
              <Icon iconName="LocationIcon" />
              <span>Colombia - Socorro, Santander</span>
            </div>

            <div className="option-group phone">
              <Icon iconName="PhoneIcon" />
              <span>304 211 9022 - 315 636 5735</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
