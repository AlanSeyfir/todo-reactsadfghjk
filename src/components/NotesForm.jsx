import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { useContext } from 'react';
import { NotesContext } from '../Context/NotesContext';

// ! Uncaught TypeError: Cannot destructure property 'add' of 'useContext(...)' as it is undefined.
const NotesForm = () => {
  const { add } = useContext(NotesContext);
  return (
    <Formik
      initialValues={{ title: '', message: '' }}
      validate={(values) => {
        const errors = {};
        if (!values.title) {
          errors.title = 'El titulo es requerido';
        } else if (!values.message) {
          errors.message = 'El mensaje es requerido';
        }

        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        add(values.title, values.message);
        setSubmitting(false);
        values.title = '';
        values.message = '';
      }}
    >
      {(isSubmitting) => (
        <Form className="form">
          <div>
            <label htmlFor="title">Titulo</label>
            <Field type="text" name="title" />
            <ErrorMessage
              className="error-message"
              name="title"
              component="p"
            />
          </div>
          <div>
            <label htmlFor="message">¿Que quieres aprender?</label>
            <Field as="textarea" name="message" />
            <ErrorMessage
              className="error-message"
              name="message"
              component="p"
            />
          </div>
          <button type="submit">Enviar</button>
        </Form>
      )}
    </Formik>
  );
};

export default NotesForm;
