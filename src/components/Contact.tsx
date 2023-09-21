import React, { forwardRef, useState } from "react";
import { Formik } from "formik";
import { motion, useAnimation } from "framer-motion";
import * as Yup from "yup";

interface InputProps {
  name: string;
  placeholder: string;
  type?: string;
  value: any;
  onChange?: (val: any) => void;
  error: any;
  className: any;
}

const Input = ({
  placeholder,
  name,
  type,
  value,
  onChange,
  error,
  className,
}: InputProps) => {
  return (
    <input
      name={name}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`py-2 text-xs w-full p-4 text-brown-6 placeholder:text-brown-1 outline-none rounded-sm bg-caramel sm:text-md ${className} ${
        !!error
          ? "focus:border-red-300 border-2 border-red-300"
          : "focus:border-brown-7 border-1 border-brown-10"
      }`}
    />
  );
};

const Contact = (props: any, ref: any) => {
  const animate = useAnimation();
  const [sending, setSending] = useState<boolean>(false);
  const [emailStatus, setEmailStatus] = useState<"hide" | "error" | "success">(
    "hide"
  );

  const handleClick = async (values: any, resetForm: any) => {
    animate.start("animate");
    setSending(true);

    fetch(`/api/mail`, {
      method: "POST",
      body: JSON.stringify({
        email: values.email,
        name: values.name,
        message: values.message,
      }),
    }).then(async (res) => {
      const response = await res.json();

      setEmailStatus(response.success ? "success" : "error");
      resetForm();
      setSending(false);
      animate.start("initial");
    });
  };

  return (
    <section ref={ref} className="bg-caramel w-full mt-14 sm:mt-28">
      <div className="w-3/4 lg:w-1/2 mx-auto min-h-300 pt-10 sm:pt-24 pb-8 sm:pb-14">
        <p className="text-brown-3 text-md sm:text-lg font-semibold">
          GET IN TOUCH
        </p>
        <p className="text-brown-3 text-xs sm:text-md font-normal">
          FEEL FREE TO SEND ME A MESSAGE OR JUST WANT TO SAY HELLO
        </p>
        <div className="flex relative flex-row gap-5 mt-7 sm:mt-10">
          <div className="w-full sm:w-1/2 flex flex-col">
            {emailStatus != "hide" && (
              <div
                className={`${
                  emailStatus === "success"
                    ? "bg-teal-100 border-teal-500 text-teal-900"
                    : "bg-red-100 border-red-500 text-red-900"
                } border-t-4 rounded-b  px-4 py-3 shadow-md`}
                role="alert"
              >
                <div className="flex">
                  <div className="py-1">
                    <svg
                      className={`fill-current h-6 w-6 ${
                        emailStatus === "success"
                          ? "text-teal-500"
                          : "text-red-600"
                      } mr-4`}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm sm:text-md font-semibold">
                      {emailStatus === "success"
                        ? "Email Sent"
                        : "Something went wrong"}
                    </p>
                    <p className="text-xs sm:text-sm">
                      {emailStatus === "success"
                        ? "I appreciate your time. I will get back to you as soon as possibe."
                        : "There's something wrong sending an email. Please try again later."}
                    </p>
                  </div>
                </div>
              </div>
            )}
            <Formik
              validationSchema={Yup.object().shape({
                email: Yup.string()
                  .email("Please use a valid email.")
                  .required("This field is required."),
                name: Yup.string()
                  .min(5, "Your name is too short.")
                  .required("This field is required."),
                message: Yup.string()
                  .min(5, "Your message is too short.")
                  .required("This field is required."),
              })}
              initialValues={{ email: "", name: "", message: "" }}
              onSubmit={(values, { resetForm }) => {
                handleClick(values, resetForm);
              }}
            >
              {({ values, errors, touched, handleChange, handleSubmit }) => (
                <>
                  <Input
                    className="mt-5"
                    error={touched?.email && errors?.email}
                    name="email"
                    placeholder="EMAIL"
                    value={values.email}
                    onChange={handleChange}
                  />
                  {touched?.email && errors?.email && (
                    <p className="text-red-400 text-2xs font-semibold mt-1">
                      {errors?.email}
                    </p>
                  )}
                  <Input
                    className="mt-5"
                    error={touched?.name && errors?.name}
                    name="name"
                    placeholder="NAME"
                    value={values.name}
                    onChange={handleChange}
                  />
                  {touched?.name && errors?.name && (
                    <p className="text-red-400 text-2xs font-semibold mt-1">
                      {errors?.name}
                    </p>
                  )}
                  <textarea
                    name="message"
                    value={values.message}
                    onChange={handleChange}
                    placeholder="MESSAGE"
                    className={`mt-5 min-h-100 py-2 text-xs w-full p-4 text-brown-6 placeholder:text-brown-1 outline-none rounded-sm bg-caramel sm:text-md ${
                      !!touched?.message && errors?.message
                        ? "focus:border-red-300 border-2 border-red-300"
                        : "focus:border-brown-7 border-1 border-brown-10"
                    }`}
                    rows={4}
                  />
                  {touched?.message && errors?.message && (
                    <p className="text-red-400 text-2xs font-semibold mt-1">
                      {errors?.message}
                    </p>
                  )}
                  <div className="select-none relative mt-10">
                    <motion.button
                      type="submit"
                      disabled={sending}
                      variants={{
                        initial: {
                          left: -6,
                          top: 0,
                        },
                        animate: {
                          top: 8,
                          left: 0,
                        },
                      }}
                      transition={{ duration: 0.1 }}
                      initial="initial"
                      animate={animate}
                      onClick={() => {
                        handleSubmit();
                      }}
                      className={`absolute z-20 px-5 py-2 h-10 w-28 sm:w-36 ${
                        sending
                          ? "bg-caramel-11 cursor-not-allowed"
                          : "bg-caramel-5"
                      }`}
                    >
                      <p
                        className={`${
                          sending ? "text-gray-400" : "text-brown-4"
                        } text-2xs sm:text-xs font-bold sm:font-semibold`}
                      >
                        {sending ? "SENDING ..." : "SEND MESSAGE"}
                      </p>
                    </motion.button>
                    <div className="absolute z-10 h-10 top-2 bg-brown-11 w-28 sm:w-36"></div>
                  </div>
                </>
              )}
            </Formik>
          </div>
          <div className="hidden sm:block w-1/2 h-auto">
            <div className="flex flex-row justify-end items-center w-full h-full">
              <img src="/contact-me.svg" className="w-1/2" alt="" />
            </div>
          </div>
        </div>
        <div className="w-full mt-32 flex flex-row justify-between items-center ">
          <div className="flex flex-row items-center gap-3">
            <p className="text-brown-4 text-xs font-semibold">MADE FROM</p>
            <a href="https://nextjs.org/" target="_blank">
              <img src="/nextjs.png" className="w-8" alt="" />
            </a>
          </div>
          <div className="flex flex-row gap-3 items-center">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/dondomie-d-6025b7207/"
            >
              <img src="/linkedin.png" className="w-8" alt="" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default forwardRef(Contact);
