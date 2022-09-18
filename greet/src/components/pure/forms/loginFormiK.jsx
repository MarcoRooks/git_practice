import React from 'react';
import {useNavigate} from 'react-router-dom';
import {Formik, Field, Form, ErrorMessage} from 'formik';
import * as Yup from 'yup';

const loginSchema = Yup.object().shape(
    {
        email: Yup.string().email('Invalid Email').required('Email is required'),
        password: Yup.string().required('Password is required')
    }
);



const LoginFormiK = () => {

    const initialCredencial= {
        email: '',
        password: ''
    }

    const navigate = useNavigate();
    const navigateTo = (path) => {
        navigate(path)
    }

    return (
        <div>
            <h4>Login Formik</h4>
            <Formik
            initialValues={initialCredencial}
            validationSchema = {loginSchema}
            onSubmit={async (values) => {
                await new Promise((r) => setTimeout(r, 500));
                alert(JSON.stringify(values, null, 2));
                //save to local storage//
                await localStorage.setItem('credentials', values);
                navigateTo('/profile');
            }}
            >

            {({ values,
                touched,
                errors,
                isSubmitting,
                handleChange,
                handleBlur})=> (
                    <Form>
                    <label htmlFor="email">email</label>
                    <Field id="email" name="email" placeholder="Enter email" />

                    {
                        errors.email && touched.email && (<ErrorMessage name='email' component='div'/>)
                    }

                    <label htmlFor="password">password</label>
                    <Field type= 'password' id='password' placeholder='password' name='password' />

                    {
                        errors.password && touched.password && (<div><ErrorMessage name='password'/></div>)
                    }

                    <button type='submit'>login</button>

                    {
                        isSubmitting? <p>Loading credentials</p> : null
                    }
                </Form>
            )}
                
            </Formik>
        </div>
    );
};

export default LoginFormiK;