import React, { useState, useEffect, useContext } from "react";
import toast from "react-hot-toast";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import AuthContext from "../../contexts/auth-context";
import { updateUserProfileInfo } from "../../services/userAuthService";
import Input from "../UI/Input";

const formInitialValues = {
  name: "",
  email: "",
};

const ProfileForm = (props) => {
  const AuthCtx = useContext(AuthContext);
  const [formValues, setFormValues] = useState(null);

  const validate = Yup.object({
    name: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Name is required"),
    email: Yup.string().email().required("Email is required"),
  });

  useEffect(() => {
    const { name, email } = props.userProfileData;
    setFormValues({ name, email });
  }, [props.userProfileData, setFormValues]);

  const logoutHandler = () => {
    AuthCtx.setAccount(null);
  };

  const submitHandler = async (values) => {
    try {
      const { data } = await updateUserProfileInfo(values);
      if (!data?.errors) {
        toast.success(data.message);
        const { user, token } = data;
        AuthCtx.setAccount({ user, token });
      } else if (data?.errors) {
        for (let error of data.errors) {
          toast.error(error.msg);
        }
        props.onRandomNumber(Math.random());
      }
    } catch (error) {
      if (error.response.data.message) {
        toast.error(error.response.data.message);
      }
      props.onRandomNumber(Math.random());
    }
  };

  return (
    <Formik
      initialValues={formValues || formInitialValues}
      validationSchema={validate}
      onSubmit={submitHandler}
      validateOnMount={true}
      enableReinitialize={true}
    >
      {(formik) => (
        <Form>
          <div className="space-y-4">
            <Input name="name" label="Name" />
            <Input name="email" label="Email" />
            <div className="pt-1 space-y-4">
              <button
                disabled={!formik.isValid}
                className="disabled:opacity-75 font-medium w-full bg-palette-luckyPoint rounded-md text-white px-6 py-3"
                type="submit"
              >
                Update profile
              </button>
              <button
                onClick={logoutHandler}
                className="font-medium w-full border border-palette-mediumRedViolet rounded-md text-palette-mediumRedViolet px-6 py-3"
                type="button"
              >
                Logout
              </button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default ProfileForm;
