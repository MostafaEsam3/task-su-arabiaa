import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import sideImage from "./../../../assets/Side Image.svg";
import google from "./../../../assets/Icon-Google.svg";
import { Link, useNavigate } from 'react-router-dom';
import Api_Dashboard from '../../../Interceptor/Interceotor';
import axios from 'axios';

export default function Login() {
    let [erroralertform, setAlertForm] = useState(false);
    const navigate = useNavigate();


    const loginHandler = async (dataSend) => {
        await Api_Dashboard.post('/login',
            dataSend
        ).then((response) => {
            localStorage.setItem("token-", response.data.token);
            navigate("/");
        }).catch((err) => {
            setAlertForm(true);
            setTimeout(() => setAlertForm(false), 3000);
        })
    }

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email('Invalid email address')
                .required('Email is required'),
            password: Yup.string()
                .min(6, 'Password must be at least 6 characters')
                .required('Password is required'),
        }),
        onSubmit: (values) => {
            loginHandler(values)
        },
    });

    return (
        <>
            <div className=''>
                <div className='pt-4 '>
                    <div className='row p-0 m-0'>
                        {/* Left Section with Image */}
                        <div className='col-12 col-md-6 p-0'>
                            <div className='col-12 col-md-10 ground'>
                                <img
                                    src={sideImage}
                                    alt="sign"
                                    style={{
                                        width: "100%",
                                        objectFit: "cover"
                                    }}
                                />
                            </div>
                        </div>


                        {erroralertform ? (
                            <div
                                class=" alert-primary "
                                style={{
                                    backgroundColor: "#F68C8C",
                                    height: "41px",
                                    display: "flex",
                                    alignItems: "center",
                                    borderRadius: "10px",
                                    width: "299px",
                                    position: "absolute",
                                    right: "18%"
                                }}
                            >
                                <div
                                    className=""
                                    style={{
                                        alignItems: "center",
                                        marginRight: "17px",
                                    }}
                                >
                                    <div>
                                        <span
                                            style={{
                                                margin: "0",
                                                spanadding: "0",
                                                color: "#000000",
                                                fontSize: "14px",
                                                fontWeight: "600px",
                                                marginRight: "10px",
                                            }}
                                        >
                                            يرجي ادخال الايميل و الباسورد بشكل صحيح
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            ""
                        )}
                        {/* Right Section for Login Form */}
                        <div className='col-12 col-md-6 d-flex align-items-center justify-content-center m-0 gx-0 p-0 text-center text-md-start bg-light-subtle border-1 rounded-2  '>
                            <form
                                onSubmit={formik.handleSubmit}
                                style={{ width: "70%" }}
                            >
                                <h2>Login</h2>
                                {/* Email Field */}
                                <div className='mb-3'>
                                    <input
                                        type='email'
                                        id='email'
                                        name="email"
                                        className='form-control'
                                        placeholder='Email'
                                        style={{ border: "none", width: "100%" }}
                                        {...formik.getFieldProps('email')}
                                    />
                                    {formik.touched.email && formik.errors.email ? (
                                        <div className='text-danger'>{formik.errors.email}</div>
                                    ) : null}
                                </div>

                                <div style={{ height: "1px", width: "80%", borderBottom: "1px solid grey" }}></div>

                                {/* Password Field */}
                                <div className='mb-3'>
                                    <input
                                        type='password'
                                        id='password'
                                        name="password"
                                        className='form-control'
                                        placeholder='password'
                                        style={{ border: "none", width: "100%" }}
                                        {...formik.getFieldProps('password')}
                                    />
                                    {formik.touched.password && formik.errors.password ? (
                                        <div className='text-danger'>{formik.errors.password}</div>
                                    ) : null}
                                </div>

                                <div style={{ height: "1px", width: "80%", borderBottom: "1px solid grey" }}></div>

                                {/* Submit and Forget Password */}
                                <div className='d-flex mt-4 justify-content-between align-items-center' style={{ width: "80%" }}>
                                    <button
                                        type='submit'
                                        className='btn'
                                        style={{
                                            backgroundColor: "#DB4444",
                                            color: "white",
                                        }}
                                    >
                                        Log In
                                    </button>
                                    <Link style={{ color: "#DB4444" }} to={"/signup"}>create new account</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
