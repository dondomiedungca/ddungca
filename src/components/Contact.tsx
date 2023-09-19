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
  const handleClick = async (values: any, resetForm: any) => {
    animate.start("animate");
    setSending(true);

    setTimeout(() => {
      resetForm();
      setSending(false);
      animate.start("initial");
    }, 1000);
  };
  return (
    <section ref={ref} className="bg-caramel w-full mt-28">
      <div className="w-3/4 lg:w-1/2 mx-auto min-h-300 pt-24 pb-14">
        <p className="text-brown-3 text-lg font-semibold">GET IN TOUCH</p>
        <p className="text-brown-3 text-md font-normal">
          FEEL FREE TO SEND ME A MESSAGE OR JUST WANNA SAY HELLO
        </p>
        <div className="flex flex-row gap-5 mt-10">
          <div className="w-full sm:w-1/2 flex flex-col">
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
                  <div className="relative mt-10">
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
                      className={`absolute z-20 px-5 py-2 h-10 w-36 ${
                        sending
                          ? "bg-caramel-11 cursor-not-allowed"
                          : "bg-caramel-5"
                      }`}
                    >
                      <p
                        className={`${
                          sending ? "text-gray-400" : "text-brown-4"
                        } text-xs font-semibold`}
                      >
                        {sending ? "SENDING ..." : "SEND MESSAGE"}
                      </p>
                    </motion.button>
                    <div className="absolute z-10 h-10 top-2 bg-brown-11 w-36"></div>
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
