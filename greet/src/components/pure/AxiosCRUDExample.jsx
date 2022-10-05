import React from 'react';
import { login, getAllUsers, allPagedUsers, getSingleUser, createUser, updateUser, deleteUser } from '../../services/axiosCRUDService';
import {Formik, Field, Form, ErrorMessage} from 'formik';
import * as Yup from 'yup';


const AxiosCRUDExample = () => {

    const initialCredencial= {
        email: '',
        password: ''
    }

    const loginSchema = Yup.object().shape(
        {
            email: Yup.string().email('Invalid Email').required('Email is required'),
            password: Yup.string().required('Password is required')
        }
    );

    const authUser = (values) =>{
        login(values.email,values.password)
            .then((response)=>{

                if(response.data.token){
                    alert(JSON.stringify(response.data));
                    sessionStorage.setItem('token', response.data.token)
                }else{
                    sessionStorage.removeItem('token', response.data.token);
                    throw new Error('login failure')
                }
                
            })
            .catch((error) => {
                alert(`There has been an error:${error}`)
            })
            .finally(()=> {
                console.log('Login done')
            })
    }

    //CRUD EXAMPLES
    const obtainAllUsers = () => {
        getAllUsers()
            .then((response)=> {
                alert(JSON.stringify(response.data.data))
            })
            .catch((error) => {
                alert(`Somehting went wrong: ${error}`)
            })
    }

    const obtainPagedUsers = (page) => {
        allPagedUsers(page)
            .then((response) => {
                alert(JSON.stringify(response.data.data))
            })
            .catch((error) => {
                alert(`Somehting went wrong: ${error}`)
            })
    }

    const obtainUserById = (id) => {
        getSingleUser(id)
            .then((response) => {
                alert(JSON.stringify(response.data.data))
            })
            .catch((error) => {
                alert(`Somehting went wrong: ${error}`)
            })
    }

    const createNewUser = (name, job) => {
        createUser(name, job)
            .then((response)=> {
                console.log(response.status, response.data)
                if(response.data && response.status === 201){
                    console.log('new user created')
                }else{
                    throw Error('not created')
                }
            })
            .catch((error)=> {
                alert(`Soemthing went wrond ${error}`)
            })
    }

    const updateUserById = (id) => {
        updateUser(id)
            .then((response) => {
                alert(JSON.stringify(response.data))
            })
            .catch((error) => {
                alert(`Somehting went wrong: ${error}`)
            })
    }

   

    return (
        <div>
            <Formik
            initialValues={initialCredencial}
            validationSchema = {loginSchema}
            onSubmit={async (values) => {
                authUser(values)
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
            <div>
                <button onClick={()=>obtainAllUsers()}>Test API response: Get all users with axios</button>
                <button onClick={()=>obtainPagedUsers(2)}>Test API response: Get all paged users from page 2</button>
                <button onClick={()=>obtainUserById(4)}>Test API response: Get BY ID 4</button>
                <button onClick={()=>createNewUser('morpheus', 'leader')}>new user</button>
            </div>
            
        </div>
    );
};

export default AxiosCRUDExample;