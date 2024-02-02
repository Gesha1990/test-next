import React from "react";
import { Formik } from "formik";
import classNames from "classnames";
import * as Yup from "yup";

const FormValidationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  comment: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
});
interface IProps {
  setComments: Function;
}
const Form = ({ setComments }: IProps) => (
  <div>
    <Formik
      initialValues={{ email: "", name: "", comment: "", phone: undefined }}
      validationSchema={FormValidationSchema}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          setComments((prevComments:any) =>{
            return [...prevComments, values]
          })
          setSubmitting(false);
          alert("Comment successfully created")
        }, 400);
      }}
    >
      {({
        values,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
        touched,
      }) => {
        console.log(touched,111)
      return (
        <form onSubmit={handleSubmit}>
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            <div className="col-span-2">
              <input
                type="text"
                name="comment"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.comment}
                className={classNames(
                  "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
                  {
                    "border-red-500":  touched.comment && errors.comment,
                  }
                )}
                placeholder="Comment *"
              />
              <span className="text-red-500">
                {errors.comment && touched.comment && errors.comment}
              </span>
            </div>
            <div>
              <input
                type="text"
                name="name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                className={classNames(
                  "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
                  {
                    "border-red-500": errors.name && touched.name,
                  }
                )}
                placeholder="Name *"
              />
              <span className="text-red-500">{errors.name && touched.name  && errors.name}</span>
            </div>
            <div>
              <input
                type="text"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                className={classNames(
                  "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
                  {
                    "border-red-500": errors.email && touched.email,
                  }
                )}
                placeholder="Email *"
              />
              <span className="text-red-500">
                {errors.email &&  touched.email && errors.email}
              </span>
            </div>
            <div className="col-span-2">
              <input
                type="text"
                id="phone"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.phone}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Phone (optional)"
              />
            </div>
            <div>
              <button
                type="submit"
                className="text-white bg-blue-700 !important hover:bg-blue-800"
              >
                POST REVIEW
              </button>
            </div>
          </div>
        </form>
      )}
    }
    </Formik>
  </div>
);

export default Form;
