import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, "Too Short!")
        .max(50, "Too Long!")
        .required("Required"),
    phone: Yup.string()
        .min(2, "Too Short!")
        .max(50, "Too Long!")
        .required("Required"),
    email: Yup.string()
        .email("Invalid email")
        .required("Required")
});

export const ValidationSchemaExample = () => (
    <div>
        <h1>Signup</h1>
        <Formik
            initialValues={{
                name: "",
                phone: "",
                email: ""
            }}
            validationSchema={SignupSchema}
            onSubmit={values => {
                console.log(values);
            }}
        >
            {({ errors, touched }) => (
                <Form>
                    <label htmlFor="name"> Name</label>
                    <Field name="name" />
                    {errors.name && touched.name ? (
                        <div>{errors.name}</div>
                    ) : null}
                    <label htmlFor="phone">Phone</label>

                    <Field name="phone" />
                    {errors.phone && touched.phone ? (
                        <div>{errors.phone}</div>
                    ) : null}
                    <label htmlFor="email">Email</label>

                    <Field name="email" type="email" />
                    {errors.email && touched.email ? <div>{errors.email}</div> : null}
                    <button type="submit">Submit</button>
                </Form>
            )}
        </Formik>
    </div>
);