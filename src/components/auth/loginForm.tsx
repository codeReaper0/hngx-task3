"use client";
import React, {CSSProperties, useState, useEffect} from "react";
import {Formik, Form} from "formik";
import * as yup from "yup";
import Input from "./input";
import InputPassword from "./inputPassword";
import Link from "next/link";
import {EnvelopeIcon, LockClosedIcon} from "@heroicons/react/24/outline";
import {useRouter} from "next/navigation";
import ClipLoader from "react-spinners/ClipLoader";

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
    // try {
    //   setShowAnimation(true);
    //   setTimeout(() => {
    //     router.push("/dashboard");
    //   }, 4000);
    // } catch (error: any) {
    //   if (error && error.response) {
    //       position: "top-right",
    //     });
    //   } else {
    //     cogoToast.error("Something went wrong!", {
    //       position: "top-right",
    //     });
    //   }
    //   setSubmitting(false);
    // }
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

                <div className="flex justify-end">
                  <Link
                    href="/auth/forgot_password"
                    className="text-white font-medium"
                  >
                    Forgot password?
                  </Link>
                </div>
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
    </>
  );
}
