import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from 'yup';
import Spinner from 'react-bootstrap/Spinner';

import { Icon } from "../components/icons";
import { Button, MyModal } from "../components/common";
import { Input, Textarea } from "../components/form";

import '../styles/sections/ContactSection.css';

interface Props {
  id: string;
}

export const ContactSection = ({ id }: Props) => {
  const [loading, setLoading] = useState(false);
  const [modalSucces, setModalSucces] = useState(false);

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
    onSubmit: (values) => {
      setLoading(true);

      fetch("https://formsubmit.co/ajax/lauram.1001@outlook.es", {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(values)
      })
        .then(response => response.json())
        .then(() => {
          formik.handleReset({
            fullName: '',
            email: '',
            message: ''
          });
          setLoading(false);
          setModalSucces(true);
        })
        .catch(error => {
          console.log(error);
          setLoading(false);
        });
    },
  });

  return (
    <section className="contact" id={id}>
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

          <Button
            type="submit"
            disabled={loading}
          >
            { !loading ? 'Enviar' : <Spinner animation="grow" variant="dark" size="sm" /> }            
          </Button>
        </form>

        <div className="info-contact">
          {/* <h2 className="subtitle">Información de contacto</h2> */}

          <div className="options">
            <div className="option-group location">
              <Icon iconName="LocationIcon" />
              <span>Colombia - Socorro, Santander</span>
            </div>

            <div className="option-group phone">
              <Icon iconName="PhoneIcon" />
              <a href="tel:+573042119022">+57 304 211 9022</a>
            </div>
          </div>
        </div>
      </div>

      <MyModal
        showModal={modalSucces}
        onCloseModal={() => setModalSucces(false)}
      />
    </section>
  )
}
