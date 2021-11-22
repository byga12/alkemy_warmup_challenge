import { Formik } from 'formik';
// import axios from 'axios';

//api
import { login } from '../../services/api';

//redux
import {setToken} from '../../store/slices/user'
import { useDispatch } from "react-redux";

import { useLocation } from 'wouter';

//STYLES
import s from './LoginPage.module.css'

const validate = values => {
  const errors = {};

  if (!values.email) {
    errors.email = '*campo obligatorio';
  }
  if (!values.password) {
    errors.password = '*campo obligatorio';
  } 
  return errors;
};




export default function LoginPage() {
  const setLocation = useLocation()[1];
  const dispatch = useDispatch()

  return (
    <div className={s.container}>
      <Formik
      initialValues={{ email: '', password: '' }}
      validate={validate}
      validateOnBlur={false}
      validateOnChange={false}
      onSubmit={(values, actions) => {
        
        login(values.email, values.password)
        .then(res => {
          // const token = res.data.token;
          const token = res.token;
          dispatch(setToken(token));
        })
        .catch(() => {
          actions.setFieldError("submitError", "El email y/o la contraseña ingresados no son válidos")
        })
        .finally(()=> {
          actions.setSubmitting(false);
          setLocation('/');
        })

      }}

      >
      {props =>
        //el atributo noValidate desactiva la validación de HTML5 (ya que esto lo voy a manejar con Formik)
        <form className={s.form} onSubmit={props.handleSubmit} noValidate> 

          <div className={s.inputContainer}>
            <label htmlFor="email">Email address</label>
            <input className={s.formInput} type="email" id="email" {...props.getFieldProps('email')} />
            {props.touched.email && props.errors.email ? <div className={s.error}>{props.errors.email}</div> : null}
          </div>

          <div className={s.inputContainer}>
            <label htmlFor="password">Password</label>
            <input className={s.formInput} type="password" id="password" {...props.getFieldProps('password')} />
            {props.touched.password && props.errors.password ? <div className={s.error}>{props.errors.password}</div> : null}
          </div>
          <button className={s.submitButton} type="submit">Login</button>

          {props.errors.submitError? <div className={s.error}>{props.errors.submitError}</div> : null}

        </form>
      }
      </Formik>
    </div>
  )


}



