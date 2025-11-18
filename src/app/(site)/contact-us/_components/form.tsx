"use client";
import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { IconRefresh, IconX } from "@tabler/icons-react";

const Form = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<null | string>(null);
  const [error, setError] = useState<null | string>(null);

  const formId = 1115; // Replace with your actual CF7 form ID

  const { handleBlur, handleChange, resetForm, handleSubmit, values, errors, touched } = useFormik({
    initialValues: {
      yourname: "",
      yourmobile: "",
      youremail: "",
      project: "",
      message: "",
      consent: false,
    },
    validationSchema: Yup.object({
      yourname: Yup.string().required("Name is required"),
      yourmobile: Yup.string().required("Mobile number is required"),
      youremail: Yup.string().email("Invalid email address").required("Email is required"),
      project: Yup.string().required("Project is required"),
      message: Yup.string().min(10, "Message should be at least 10 characters"),
      consent: Yup.boolean().oneOf([true], "You must agree to the privacy policy"),
    }),
    onSubmit: async (values) => {
      setSuccess(null);
      setError(null);
      setLoading(true);

      try {
        // Create FormData to match CF7 expected format
        const formData = new FormData();
        formData.append("yourname", values.yourname);
        formData.append("yourmobile", values.yourmobile);
        formData.append("youremail", values.youremail);
        formData.append("project", values.project);
        formData.append("message", values.message);
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
          setSuccess(data?.message || "Thank you for your message. It has been sent.");
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
      {success && (
        <div className="bg-green-100 text-green-900 px-4 py-2 rounded-lg flex items-center justify-between mb-4">
          <span>{success}</span>
          <button className="cursor-pointer" type="button" onClick={() => setSuccess(null)}>
            <IconX />
          </button>
        </div>
      )}

      {error && (
        <div className="bg-red-100 text-red-900 px-4 py-2 rounded-lg flex items-center justify-between mb-4">
          <span>{error}</span>
          <button className="cursor-pointer" type="button" onClick={() => setError(null)}>
            <IconX />
          </button>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="text"
            name="yourname"
            placeholder="Your Name"
            className={`bg-white px-4 w-full py-2 placeholder:text-zinc-400 text-black ${
              touched.yourname && errors.yourname ? "border-2 border-red-500" : ""
            }`}
            value={values.yourname}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.yourname && errors.yourname && (
            <p className="text-red-500 text-sm mt-1">{errors.yourname}</p>
          )}
        </div>

        <div>
          <input
            type="text"
            name="yourmobile"
            placeholder="Your Mobile"
            className={`bg-white px-4 w-full py-2 placeholder:text-zinc-400 text-black ${
              touched.yourmobile && errors.yourmobile ? "border-2 border-red-500" : ""
            }`}
            value={values.yourmobile}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.yourmobile && errors.yourmobile && (
            <p className="text-red-500 text-sm mt-1">{errors.yourmobile}</p>
          )}
        </div>

        <div>
          <input
            type="email"
            name="youremail"
            placeholder="Your Email"
            className={`bg-white px-4 w-full py-2 placeholder:text-zinc-400 text-black ${
              touched.youremail && errors.youremail ? "border-2 border-red-500" : ""
            }`}
            value={values.youremail}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.youremail && errors.youremail && (
            <p className="text-red-500 text-sm mt-1">{errors.youremail}</p>
          )}
        </div>

        <div>
          <input
            type="text"
            name="project"
            placeholder="Project"
            className={`bg-white px-4 w-full py-2 placeholder:text-zinc-400 text-black ${
              touched.project && errors.project ? "border-2 border-red-500" : ""
            }`}
            value={values.project}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.project && errors.project && (
            <p className="text-red-500 text-sm mt-1">{errors.project}</p>
          )}
        </div>

        <div>
          <textarea
            name="message"
            placeholder="Your Message"
            className={`bg-white px-4 w-full py-2 placeholder:text-zinc-400 text-black ${
              touched.message && errors.message ? "border-2 border-red-500" : ""
            }`}
            rows={4}
            value={values.message}
            onChange={handleChange}
            onBlur={handleBlur}
          ></textarea>
          {touched.message && errors.message && (
            <p className="text-red-500 text-sm mt-1">{errors.message}</p>
          )}
        </div>

        <div className="lg:col-span-3 col-span-1">
          <div className="flex items-start">
            <input
              type="checkbox"
              id="consent"
              name="consent"
              className="mr-2 mt-1"
              checked={values.consent}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <label htmlFor="consent" className="text-white text-sm select-none">
              By providing Mani Group your contact information, you acknowledge and agree to our
              Privacy Policy and consent to receiving marketing communications, including through
              automated calls, texts, and emails, some of which may use artificial or prerecorded
              voices. This consent isn{"'"}t necessary for purchasing any products or services and you
              may opt out at any time. To opt out from texts, you can reply, {"'"}stop{"'"} at any time. To
              opt out from emails, you can click on the unsubscribe link in the emails. Message and
              data rates may apply.
            </label>
          </div>
          {touched.consent && errors.consent && (
            <p className="text-red-500 text-sm mt-1">{errors.consent}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={loading}
          className="mani-button text-center flex items-center justify-center gap-2"
        >
          {loading && <IconRefresh className="animate-spin" />}
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;