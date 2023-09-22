"use client";
import React, {CSSProperties} from "react";
import {Formik, Form} from "formik";
import * as yup from "yup";
import Input from "./input";
import InputPassword from "./inputPassword";
import {EnvelopeIcon, LockClosedIcon} from "@heroicons/react/24/outline";
import {useRouter} from "next/navigation";
import ClipLoader from "react-spinners/ClipLoader";
import {ToastContainer, toast} from "react-toastify";
import {signInAuthUserWithEmailAndPassword} from "@/lib/firebase.utils";
import "react-toastify/dist/ReactToastify.css";

const initialValues = {
  email: "",
  password: "",
};
const validationSchema = yup.object().shape({
  email: yup.string().email("Invalid Email").required("Email is required"),
  password: yup.string().required("Password is required"),
});

const override: CSSProperties = {
  borderWidth: "3px",
};

export default function LoginForm() {
  const router = useRouter();
  const onSubmit = async (values: typeof initialValues, setSubmitting: any) => {
    try {
      const response = await signInAuthUserWithEmailAndPassword(
        values.email,
        values.password
      );
      toast.success("Login successful", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        theme: "dark",
      });
      const user = response.user;
      router.push("/");
    } catch (error: any) {
      toast.error("Invalid Credentials", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        theme: "dark",
      });
    }
  };
  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(formik) => {
          return (
            <Form action="" autoComplete="off">
              <div className="grid grid-cols-1 gap-6">
                {/* Email */}
                <Input
                  name="email"
                  label="Email"
                  type="email"
                  placeholder="Enter your email address"
                  icon={EnvelopeIcon}
                />

                {/* Password */}
                <InputPassword
                  name="password"
                  label="Password"
                  placeholder="Enter your password"
                  icon={LockClosedIcon}
                />

                <div className="w-full">
                  <button
                    type="submit"
                    disabled={formik.isSubmitting}
                    className="block w-full bg-gradient-to-r from-[#376BF6] to-[#3E94FF] text-white rounded-lg py-3 font-semibold max-h-12"
                  >
                    {formik.isSubmitting ? (
                      <ClipLoader
                        color="white"
                        size={23}
                        cssOverride={override}
                      />
                    ) : (
                      "Login"
                    )}
                  </button>
                </div>
              </div>
            </Form>
          );
        }}
      </Formik>
      <ToastContainer />
    </>
  );
}
