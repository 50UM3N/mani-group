"use client";
import { IconArrowRight, IconRefresh, IconX } from "@tabler/icons-react";
import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const NewsLetterForm = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<null | string>(null);
  const [error, setError] = useState<null | string>(null);

  const formId = 1110; // Replace with your actual CF7 form ID for newsletter

  const { handleBlur, handleChange, resetForm, handleSubmit, values, errors, touched } = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Email is required"),
    }),
    onSubmit: async (values) => {
      setSuccess(null);
      setError(null);
      setLoading(true);

      try {
        // Create FormData to match CF7 expected format
        const formData = new FormData();
        formData.append("email", values.email);
        formData.append("_wpcf7", formId.toString());
        formData.append("_wpcf7_version", "5.7.7");
        formData.append("_wpcf7_locale", "en_US");
        formData.append("_wpcf7_unit_tag", `wpcf7-f${formId}-p1-o1`);
        formData.append("_wpcf7_container_post", "0");

        // Contact Form 7 WordPress REST API endpoint
        const apiUrl = `${process.env.NEXT_PUBLIC_WP_JSON}/wp-json/contact-form-7/v1/contact-forms/${formId}/feedback`;
        const response = await fetch(apiUrl, {
          method: "POST",
          body: formData,
        });

        const data = await response.json();

        if (!response.ok || data.status !== "mail_sent") {
          throw new Error("An unexpected error occurred. Please try again later.");
        } else {
          setError(null);
          setSuccess(data?.message || "Thank you for subscribing to our newsletter!");
          setLoading(false);
          resetForm();
        }
      } catch (err: any) {
        setLoading(false);
        setError("An unexpected error occurred. Please try again later.");
        console.error("Form submission error:", err.message);
      }
    },
  });

  return (
    <div>
      <label htmlFor="subscription" className="font-semibold mb-1 inline-block uppercase">
        Subscribe to newsletter
      </label>

      {success && (
        <div className="bg-green-100 text-green-900 px-4 py-2 rounded-lg flex items-center justify-between mb-2 text-sm">
          <span>{success}</span>
          <button className="cursor-pointer" type="button" onClick={() => setSuccess(null)}>
            <IconX size={16} />
          </button>
        </div>
      )}

      {error && (
        <div className="bg-red-100 text-red-900 px-4 py-2 rounded-lg flex items-center justify-between mb-2 text-sm">
          <span>{error}</span>
          <button className="cursor-pointer" type="button" onClick={() => setError(null)}>
            <IconX size={16} />
          </button>
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div
          className={`border-2 ${
            touched.email && errors.email ? "border-red-500" : "border-black"
          } rounded-lg flex justify-between items-center overflow-hidden`}
        >
          <input
            id="subscription"
            name="email"
            type="email"
            placeholder="Enter your email"
            className="focus:outline-none px-3 py-1 sm:w-auto w-full"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <button
            type="submit"
            disabled={loading}
            className="bg-black rounded-r-md text-white size-9 flex items-center justify-center disabled:opacity-50"
          >
            {loading ? <IconRefresh className="animate-spin" size={20} /> : <IconArrowRight />}
          </button>
        </div>
        {touched.email && errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email}</p>
        )}
      </form>
    </div>
  );
};

export default NewsLetterForm;