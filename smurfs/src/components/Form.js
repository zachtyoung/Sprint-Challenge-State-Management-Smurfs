import React from 'react';

import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';


const UserForm = ({ errors, touched, values, sendSmurfs, sent }) => {

  return (
      <>
     
    <div className="user-form">
      <h1>Add a smurf</h1>
      <Form>
        <Field type="text" name="name" placeholder="Name" />
        {touched.name && errors.name && (
          <p className="error">{errors.name}</p>
        )}

        <Field type="text" name="age" placeholder="Age" />
        {touched.age && errors.age && <p className="error">{errors.age}</p>}

        <Field type="text" name="height" placeholder="Height" />
        {touched.height && errors.height && (
          <p className="error">{errors.height}</p>
        )}

        <button type="submit" onClick={() => sendSmurfs(values)}>Add Smurf</button>
        {sent && <p>Smurf Added Sucessfully</p>}
      </Form>
      
    </div>
    
    </>
  );
  
};


const FormikUserForm = withFormik({
  mapPropsToValues({ name, age, height }) {
    return {
      age: age || '',
      height: height || '',
      name: name || ''
    };
  },

  validationSchema: Yup.object().shape({
    name: Yup.string().required('Please enter a name'),
    age: Yup.string().required('Please enter a age'),
    height: Yup.string().required('Please enter a height')
  }),


})(UserForm);

export default FormikUserForm;
