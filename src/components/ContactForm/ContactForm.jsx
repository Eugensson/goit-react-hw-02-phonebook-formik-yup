import { Formik, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import PropTypes from 'prop-types';

import { FormContainer, Label, FormBtn, ErrMsg } from './ContactForm.styled';

const ContactForm = () => {
  const initialValues = {
    name: '',
    number: '',
  };

  const schema = yup.object().shape({
    name: yup.string().required('*Name is a required field'),
    number: yup
      .string()
      .matches(
        /^\+38-\d{3}-\d{3}-\d{2}-\d{2}$/,
        '*Incorrect format. Insert +38-000-000-00-00'
      )
      .required('*Phone number is a required field'),
  });

  const handleSubmit = (values, { resetForm }) => {
    console.log('values in component', values);
    this.props.onSubmit(values);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <FormContainer>
        <Label>
          Name
          <Field type="text" name="name" required />
          <ErrorMessage component={ErrMsg} name="name" />
        </Label>
        <Label>
          Number
          <Field type="tel" name="number" required />
          <ErrorMessage component={ErrMsg} name="number" />
        </Label>
        <FormBtn type="submit">Add Contact</FormBtn>
      </FormContainer>
    </Formik>
  );
};

ContactForm.propTypes = {
  handleSubmit: PropTypes.func,
  resetForm: PropTypes.func,
};

export default ContactForm;
