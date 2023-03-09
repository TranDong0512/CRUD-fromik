import React, {useState} from 'react';
import { useLocation } from "react-router-dom";

import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";

function CrudFormik(props) {
    const { state } = useLocation()
    const [list, setList] = useState([
        {id: 1, name: "Con mua ngang qua", author: "Son Tung"},
        {id: 2, name: "Duoi nhung con mua", author: "Son Tung"},
        {id: 3, name: "Noi dau xot xa", author: "Minh Vuong"},
    ])
    const [data, setData] = useState({
        id: '',
        name: '',
        author: ''
    })
    const SignupSchema = Yup.object().shape({
        id: Yup.string()
            .min(1)
            .max(100)
            .required("Required"),
        name: Yup.string()
            .min(1)
            .max(100)
            .required("Required"),
        author: Yup.string()
            .min(1)
            .max(100)
            .required("Required")
    })


    const [indexEdit, setIndexEdit] = useState(-1)

    const save = (data) => {
        if (indexEdit === -1) {
            setList([...list, data])
        } else {
            let newList = [...list]
            newList.splice(indexEdit, 1, data)
            setList(newList)
            setData({
                id: '',
                name: '',
                author: ''
            })
        }
        setIndexEdit(-1)
    }
    const handleDelete = (index) => {
        let newList = [...list]
        newList.splice(index, 1)
        setList(newList)
    }
    const handleEdit = (i) => {
        let newData = {...list[i]};
        setData(newData)
        setIndexEdit(i)
    }
    console.log(state)
    return (
        <div>
            {/**/}
            <h1>Signup</h1>
            <h3>Hello {state.nameUser}</h3>
            <Formik
                initialValues={
                  data
                }
                validationSchema={SignupSchema}
                onSubmit={(values,{resetForm}) => {
                    save(values)
                    resetForm()
                }}
                enableReinitialize={true}
            >
                {({errors, touched}) => (
                    <Form>
                        <label htmlFor="id"> Id</label>
                        <Field name="id" type="number"/>
                        <ErrorMessage name={"id"}/>
                        <label htmlFor="name">Name</label>

                        <Field name="name"/>
                        <ErrorMessage name={"name"}/>

                        <label htmlFor="author">Author</label>

                        <Field name="author" type="text"/>
                        <ErrorMessage name={"author"}/>
                        <button type="submit">Submit</button>
                    </Form>
                )}
            </Formik>
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Author</th>
                </tr>
                </thead>
                <tbody>

                {list.map((e, index) => (
                    <tr>
                        <th>{e.id}</th>
                        <td>{e.name}</td>
                        <td>{e.author}</td>
                        <button onClick={() => {
                            handleDelete(index)
                        }}>Delete
                        </button>
                        <button onClick={() => {
                            handleEdit(index)
                        }}>Edit
                        </button>
                    </tr>

                ))}
                </tbody>
            </table>
        </div>
    );
}

export default CrudFormik;
