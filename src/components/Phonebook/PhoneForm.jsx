import { Formik } from 'formik';
import { StyledForm, StyledField, StyledError } from './PhoneForm.styled';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { newContact } from './PhoneSlice';
import { useState } from 'react';

const schema = Yup.object().shape({
  name: Yup.string()
    .matches(/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/)
    .required('Required!')
    .min(2, 'Too Short!')
    .max(50, 'Too Long!'),
  number: Yup.string()
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/
    )
    .required('Required!')
    .min(2, 'Too Short!')
    .max(50, 'Too Long!'),
});

export const PhoneForm = ({  }) => {
  const [value, setValue]= useState('')
  const dispatch =useDispatch()
  return (
    <Formik
      initialValues={{
        name: '', 
        number: '',
      }}
      validationSchema={schema}
      onSubmit={(actions,evt) => {
        setValue(evt.target.values);
        actions.resetForm();
      }}
    >
      <StyledForm>
        <label>
          Name
          <StyledField name="name" />
          <StyledError name="name" component="div" />
        </label>
        <label>
          Number
          <StyledField name="number" />
          <StyledError name="number" component="div" />
        </label>

        <button type="submit" onClick={() => dispatch(newContact(value))}>Add contact</button>
      </StyledForm>
    </Formik>
  );
};
