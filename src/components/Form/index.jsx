import { useFormik } from "formik";
import React from "react";
import validationSchema from "./validation";
import classNames from "classnames";
import { toast } from "react-toastify";

function Form() {
    const { handleSubmit, handleChange, handleBlur, values, errors, touched } = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            email: "",
            queryType: "",
            message: "",
            requiredField: false,
        },
        onSubmit: () => {
            toast.success(
                <div className="md:p-2">
                    <div className="mb-3 flex items-start gap-2">
                        <img
                            src="src\assets\images\icon-success-check.svg"
                            className="block max-w-full"
                        />
                        <h1>Message Sent!</h1>
                    </div>
                    <p className="text-grey-500">
                        Thanks for completing the form. We'll be in touch soon!
                    </p>
                </div>,
                {
                    className: "bg-grey-900 text-white",
                    icon: false,
                }
            );
        },
        validationSchema,
    });
    return (
        <>
            <div className="mx-4 my-8 overflow-hidden rounded-lg bg-white p-5 md:w-2/5 md:p-8">
                <form onSubmit={handleSubmit}>
                    <h1 className="mb-6 text-3xl font-bold tracking-tight text-grey-900">
                        Contact Us
                    </h1>
                    <div className="mb-6 md:flex md:gap-4">
                        <div className="mb-6 md:mb-0 md:w-full">
                            <label htmlFor="firstName">
                                First Name <span className="text-green-600">*</span>
                            </label>
                            <input
                                tabIndex={1}
                                type="text"
                                name="firstName"
                                id="firstName"
                                onChange={handleChange}
                                value={values.firstName}
                                onBlur={handleBlur}
                                className={classNames(
                                    "border-grey-900 transition-colors hover:border-green-600 focus:border-green-600 focus:outline-none",
                                    {
                                        "border-red": errors.firstName && touched.firstName,
                                    }
                                )}
                            />
                            {errors.firstName && touched.firstName && (
                                <span className="mt-2 inline-block text-red">
                                    {errors.firstName}
                                </span>
                            )}
                        </div>
                        <div className="md:w-full">
                            <label htmlFor="lastName">
                                Last Name <span className="text-green-600">*</span>
                            </label>
                            <input
                                tabIndex={2}
                                type="text"
                                name="lastName"
                                id="lastName"
                                onChange={handleChange}
                                value={values.lastName}
                                onBlur={handleBlur}
                                className={classNames(
                                    "border-grey-900 transition-colors hover:border-green-600 focus:border-green-600 focus:outline-none",
                                    {
                                        "border-red": errors.lastName && touched.lastName,
                                    }
                                )}
                            />
                            {errors.lastName && touched.lastName && (
                                <span className="mt-2 inline-block text-red">
                                    {errors.lastName}
                                </span>
                            )}
                        </div>
                    </div>
                    <div className="mb-6">
                        <label htmlFor="email">
                            Email Address <span className="text-green-600">*</span>
                        </label>
                        <input
                            tabIndex={3}
                            type="text"
                            name="email"
                            id="email"
                            onChange={handleChange}
                            value={values.email}
                            onBlur={handleBlur}
                            className={classNames(
                                "border-grey-900 transition-colors hover:border-green-600 focus:border-green-600 focus:outline-none",
                                {
                                    "border-red": errors.email && touched.email,
                                }
                            )}
                        />
                        {errors.email && touched.email && (
                            <span className="mt-2 inline-block text-red">{errors.email}</span>
                        )}
                    </div>
                    <div className="mb-6">
                        <label htmlFor="queryType">
                            Query Type <span className="text-green-600">*</span>
                        </label>
                        <div className="md:flex md:gap-4">
                            <label
                                htmlFor="generalEnquiry"
                                className={classNames(
                                    "mb-4 flex cursor-pointer items-center rounded-md border p-3 md:mb-0 md:px-8",
                                    {
                                        "border-green-600 bg-green-200":
                                            values.queryType === "generalEnquiry",
                                    }
                                )}
                            >
                                <input
                                    type="radio"
                                    name="queryType"
                                    id="generalEnquiry"
                                    className="peer mr-4 hidden"
                                    onChange={handleChange}
                                    value={"generalEnquiry"}
                                    checked={values.queryType === "generalEnquiry"}
                                />
                                <div
                                    tabIndex={4}
                                    className="border-gray-300 mr-4 flex h-4 w-4 items-center justify-center rounded-full border-[1px] peer-checked:border-0"
                                >
                                    {values.queryType === "generalEnquiry" && (
                                        <img src="src\assets\images\icon-radio-selected.svg" />
                                    )}
                                </div>
                                <span>General Enquiry</span>
                            </label>
                            <label
                                htmlFor="supportRequest"
                                className={classNames(
                                    "mb-4 flex cursor-pointer items-center rounded-md border p-3 md:mb-0 md:px-8",
                                    {
                                        "border-green-600 bg-green-200":
                                            values.queryType === "supportRequest",
                                    }
                                )}
                            >
                                <input
                                    type="radio"
                                    name="queryType"
                                    id="supportRequest"
                                    className="peer mr-4 hidden"
                                    onChange={handleChange}
                                    value={"supportRequest"}
                                    checked={values.queryType === "supportRequest"}
                                />
                                <div
                                    tabIndex={5}
                                    className="border-gray-300 mr-4 flex h-4 w-4 items-center justify-center rounded-full border-[1px] peer-checked:border-0"
                                >
                                    {values.queryType === "supportRequest" && (
                                        <img src="src\assets\images\icon-radio-selected.svg" />
                                    )}
                                </div>
                                <span>Support Request</span>
                            </label>
                        </div>
                        {errors.queryType && touched.queryType && (
                            <span className="mt-2 inline-block text-red">{errors.queryType}</span>
                        )}
                    </div>
                    <div className="mb-6">
                        <label htmlFor="message">
                            Message <span className="text-green-600">*</span>
                        </label>
                        <textarea
                            tabIndex={6}
                            name="message"
                            id="message"
                            onChange={handleChange}
                            rows={8}
                            value={values.message}
                            onBlur={handleBlur}
                            className={classNames(
                                "border-grey-900 transition-colors hover:border-green-600 focus:border-green-600 focus:outline-none",
                                {
                                    "border-red": errors.message && touched.message,
                                }
                            )}
                        ></textarea>
                        {errors.message && touched.message && (
                            <span className="mt-2 inline-block text-red">{errors.message}</span>
                        )}
                    </div>
                    <div className="mb-6">
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                name="requiredField"
                                id="requiredField"
                                className="peer mr-4 hidden"
                                onChange={handleChange}
                                value={true}
                            />
                            <div
                                tabIndex={7}
                                className="border-gray-300 mr-4 flex h-4 w-4 items-center justify-center rounded-sm border-[1px] peer-checked:border-0"
                            >
                                {values.requiredField && (
                                    <img src="src\assets\images\icon-checkbox-check.svg" />
                                )}
                            </div>
                            <label htmlFor="requiredField" className="mb-0 cursor-pointer">
                                I consent to being contacted by the team{" "}
                                <span className="text-green-600">*</span>
                            </label>
                        </div>
                        {errors.requiredField && touched.requiredField && (
                            <span className="mt-2 inline-block text-red">
                                {errors.requiredField}
                            </span>
                        )}
                    </div>
                    <div>
                        <button
                            tabIndex={8}
                            type="submit"
                            className="focus:outline:none w-full rounded-md bg-green-600 p-3 font-bold text-white transition-colors hover:bg-grey-900 focus:outline-grey-900"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
            <div className="text-center text-[11px]">
                Challenge by{" "}
                <a
                    href="https://www.frontendmentor.io/challenges/contact-form--G-hYlqKJj"
                    className="text-attributionLink"
                >
                    Frontend Mentor
                </a>
                . Coded by{" "}
                <a href="https://github.com/mikailafsin" className="text-attributionLink">
                    Mikail Afşin
                </a>
                .
            </div>
        </>
    );
}

export default Form;
