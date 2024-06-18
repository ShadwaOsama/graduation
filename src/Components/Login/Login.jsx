import React, { useContext, useState } from 'react';
import styles from './login.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { authContext } from '../../Contexts/AuthContext';
import axios from 'axios';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export default function Login() {
  const { setUserIsLoggedIn } = useContext(authContext);
  const [errorMsg, setErrorMsg] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    email: Yup.string().required("Email is required").matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, "Enter valid Email"),
    password: Yup.string().required("Password is required").matches(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/, "Password must contain special character, number more than 8 characters and less than 18 characters"),
  });

  const { values, handleSubmit, handleChange, errors, touched, handleBlur, isValid } = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: async () => {
      setErrorMsg('');
      try {
        setIsLoading(true);
        let { data } = await axios.post('http://localhost:4029/api/users/login', values);
        setUserIsLoggedIn(true);
        localStorage.setItem('token', data.token);

        if (window.location.pathname === '/login') {
          navigate('/home');
        }

      } catch (error) {
        setErrorMsg(error.response.data);
      }
      setIsLoading(false);
    },
    validationSchema
  });

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <div className={styles.heading}>
          Welcome <span className={styles.spanI}>Back!</span>
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formRow}>
            <div className={styles.inputGroup}>
              <label className={styles.label} htmlFor="email"> Email </label>
              <input
                className={styles.input}
                id="email"
                type="email"
                name="email"
                onChange={handleChange} onBlur={handleBlur} value={values.email}
              />
              {errors.email && touched.email && <p className='alert alert-danger mt-1 p-1'>{errors.email}</p>}
            </div>
          </div>

          <div className={styles.formRow}>
            <div className={styles.inputGroup}>
              <label className={styles.label} htmlFor="password"> Password </label>
              <input
                className={styles.input}
                id="password"
                type="password"
                name="password"
                onChange={handleChange} onBlur={handleBlur} value={values.password}
              />
              {errors.password && touched.password && <p className='alert alert-danger w-100 p-1 m-0'>{errors.password}</p>}
            </div>
          </div>

          <div className={styles.forgotPasswordContainer}>
            <Link className={styles.forgotPasswordLink} to="/ForgetPassword">Forget Password?</Link>
          </div>

          {isLoading ?
            <button disabled type='button' className='btn bg-main px-4 text-white ms-auto d-block '> <i className='fas fa-spin fa-spinner px-3'></i> </button>
            :
            <div className={styles.buttonContainer}>
              <button type='submit' disabled={!isValid || isLoading} className={styles.buttonlogin}>Login</button>
            </div>
          }
          
          {errorMsg && <div className="alert alert-danger">{errorMsg}</div>}

         

          <div className={styles.loginPrompt}>
            Don't have account? <Link className={styles.loginLink} to="/signup"> Create an account</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
