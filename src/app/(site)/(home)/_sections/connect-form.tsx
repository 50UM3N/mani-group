"use client";
import React, { useState } from "react";
import bg1 from "@/app/_assets/bg/bg1.png";
import Image from "next/image";
import { useFormik } from "formik";
import * as Yup from "yup";
import { IconRefresh, IconX } from "@tabler/icons-react";
import { motion } from "framer-motion";

const ConnectForm: React.FC<{ type?: string }> = ({
	type = "connect-form",
}) => {
	const [loading, setLoading] = useState(false);
	const [success, setSuccess] = useState<null | string>(null);
	const [error, setError] = useState<null | string>(null);

	const formId = 1109;

	const {
		handleBlur,
		handleChange,
		resetForm,
		handleSubmit,
		values,
		errors,
		touched,
	} = useFormik({
		initialValues: {
			yourname: "",
			youremail: "",
			yourmobile: "",
			consent: false,
			formtype: type === "connect-form" ? "" : type,
		},
		validationSchema: Yup.object({
			yourname: Yup.string().required("Name is required"),
			youremail: Yup.string()
				.email("Invalid email address")
				.required("Email is required"),
			yourmobile: Yup.string().required("Mobile number is required"),
			consent: Yup.boolean().oneOf(
				[true],
				"You must agree to the privacy policy"
			),
			formtype: Yup.string().required("Please select a type"),
		}),
		onSubmit: async (values) => {
			setSuccess(null);
			setError(null);
			setLoading(true);

			try {
				const formData = new FormData();
				formData.append("yourname", values.yourname);
				formData.append("youremail", values.youremail);
				formData.append("yourmobile", values.yourmobile);
				formData.append("type", values.formtype);
				formData.append("_wpcf7", formId.toString());
				formData.append("_wpcf7_version", "5.7.7");
				formData.append("_wpcf7_locale", "en_US");
				formData.append("_wpcf7_unit_tag", `wpcf7-f${formId}-p1-o1`);
				formData.append("_wpcf7_container_post", "0");

				const apiUrl = `${process.env.NEXT_PUBLIC_WP_JSON}/wp-json/contact-form-7/v1/contact-forms/${formId}/feedback`;
				const response = await fetch(apiUrl, {
					method: "POST",
					body: formData,
				});
				const data = await response.json();

				if (!response.ok || data.status !== "mail_sent") {
					throw new Error(
						"An unexpected error occurred. Please try again later."
					);
				} else {
					setError(null);
					setSuccess(
						data?.message || "Thank you for your message. It has been sent."
					);
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
		<section className="relative m-section p-section mb-0">
			<Image
				src={bg1}
				alt="Background"
				className="absolute top-0 left-0 w-full h-full object-cover -z-10"
			/>

			<motion.div
				initial={{ opacity: 0, y: 30 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.7 }}
				viewport={{ once: true }}
				className="mani-title-wrapper"
			>
				<h2 className="mani-title text-white">LET{"'"}S CONNECT</h2>
			</motion.div>

			<motion.div
				initial={{ opacity: 0, y: 40 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8, delay: 0.2 }}
				viewport={{ once: true }}
				className="container max-w-6xl"
			>
				{success && (
					<div className="bg-green-100 text-green-900 px-4 py-2 rounded-lg flex items-center justify-between mb-4">
						<span>{success}</span>
						<button
							type="button"
							onClick={() => setSuccess(null)}
							className="cursor-pointer"
						>
							<IconX />
						</button>
					</div>
				)}

				{error && (
					<div className="bg-red-100 text-red-900 px-4 py-2 rounded-lg flex items-center justify-between mb-4">
						<span>{error}</span>
						<button
							type="button"
							onClick={() => setError(null)}
							className="cursor-pointer"
						>
							<IconX />
						</button>
					</div>
				)}

				<form onSubmit={handleSubmit}>
					<div className="grid lg:grid-cols-2 grid-cols-1 gap-4 mb-8">
						<div>
							<input
								type="text"
								name="yourname"
								className={`border-2 ${
									touched.yourname && errors.yourname
										? "border-red-500"
										: "border-white"
								} px-4 py-2 w-full placeholder:text-white/60 text-white bg-transparent`}
								placeholder="Your Name *"
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
								type="email"
								name="youremail"
								className={`border-2 ${
									touched.youremail && errors.youremail
										? "border-red-500"
										: "border-white"
								} px-4 py-2 w-full placeholder:text-white/60 text-white bg-transparent`}
								placeholder="Your Email *"
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
								name="yourmobile"
								className={`border-2 ${
									touched.yourmobile && errors.yourmobile
										? "border-red-500"
										: "border-white"
								} px-4 py-2 w-full placeholder:text-white/60 text-white bg-transparent`}
								placeholder="Your Mobile *"
								value={values.yourmobile}
								onChange={handleChange}
								onBlur={handleBlur}
							/>
							{touched.yourmobile && errors.yourmobile && (
								<p className="text-red-500 text-sm mt-1">{errors.yourmobile}</p>
							)}
						</div>

						<div>
							<select
								name="formtype"
								className={`border-2 ${
									touched.formtype && errors.formtype
										? "border-red-500"
										: "border-white"
								} px-4 py-2 w-full text-white bg-transparent`}
								value={values.formtype}
								onChange={handleChange}
								onBlur={handleBlur}
							>
								<option value="">Select Type *</option>
								<option value="residential">Residential</option>
								<option value="commercial">Commercial</option>
								<option value="retail">Retail</option>
								<option value="eduhealth">Edu-Health</option>
								<option value="hospitality">Hospitality</option>
							</select>
							{touched.formtype && errors.formtype && (
								<p className="text-red-500 text-sm mt-1">{errors.formtype}</p>
							)}
						</div>

						<div className="lg:col-span-2 col-span-1">
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
								<label htmlFor="consent" className="text-white text-sm">
									By providing Mani Group your contact information, you
									acknowledge and agree to our Privacy Policy and consent to
									receiving marketing communications, including through
									automated calls, texts, and emails, some of which may use
									artificial or prerecorded voices. This consent isn{"'"}t
									necessary for purchasing any products or services and you may
									opt out at any time. To opt out from texts, you can reply,
									{"'"}stop{"'"} at any time. To opt out from emails, you can
									click on the unsubscribe link in the emails. Message and data
									rates may apply.
								</label>
							</div>
							{touched.consent && errors.consent && (
								<p className="text-red-500 text-sm mt-1">{errors.consent}</p>
							)}
						</div>
					</div>

					<div className="flex justify-center">
						<button
							type="submit"
							disabled={loading}
							className="mani-button text-center flex items-center justify-center gap-2"
						>
							{loading && <IconRefresh className="animate-spin" />}
							Submit
						</button>
					</div>
				</form>
			</motion.div>
		</section>
	);
};

export default ConnectForm;
