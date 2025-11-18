"use client";
import React, { useState, useRef } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { IconRefresh, IconX, IconUpload } from "@tabler/icons-react";

const Form = () => {
	const [loading, setLoading] = useState(false);
	const [success, setSuccess] = useState<null | string>(null);
	const [error, setError] = useState<null | string>(null);
	const [fileName, setFileName] = useState("");
	const fileInputRef = useRef<HTMLInputElement>(null);

	const formId = 1119; // Replace with your actual CF7 form ID

	const {
		handleBlur,
		handleChange,
		resetForm,
		handleSubmit,
		values,
		errors,
		touched,
		setFieldValue,
	} = useFormik({
		initialValues: {
			yourname: "",
			yourmobile: "",
			youremail: "",
			interested: "",
			resume: null as File | null,
		},
		validationSchema: Yup.object({
			yourname: Yup.string().required("Name is required"),
			yourmobile: Yup.string().required("Mobile number is required"),
			youremail: Yup.string()
				.email("Invalid email address")
				.required("Email is required"),
			interested: Yup.string().required("Interested position is required"),
			resume: Yup.mixed()
				.required("Resume is required")
				.test(
					"fileType",
					"Only .doc, .docx, and .pdf files are accepted",
					(value) => {
						if (!value) return false;
						const file = value as File;
						return [
							"application/pdf",
							"application/msword",
							"application/vnd.openxmlformats-officedocument.wordprocessingml.document",
						].includes(file.type);
					}
				)
				.test("fileSize", "File is too large. Maximum size is 5MB", (value) => {
					if (!value) return false;
					const file = value as File;
					return file.size <= 5 * 1024 * 1024; // 5MB limit
				}),
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
				formData.append("interested", values.interested);

				if (values.resume instanceof File) {
					formData.append("resume", values.resume);
				}

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
					throw new Error(
						"An unexpected error occurred. Please try again later."
					);
				} else {
					setError(null);
					setSuccess(
						data?.message || "Thank you for your application. It has been sent."
					);
					setLoading(false);
					resetForm();
					setFileName("");
				}
			} catch (err: any) {
				setLoading(false);
				setError("An unexpected error occurred. Please try again later.");
				console.error("Form submission error:", err.message);
			}
		},
	});

	const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files?.[0] || null;
		if (file) {
			setFieldValue("resume", file);
			setFileName(file.name);
		}
	};

	const handleBrowseClick = () => {
		fileInputRef.current?.click();
	};

	return (
		<div>
			{success && (
				<div className="bg-green-100 text-green-900 px-4 py-2 rounded-lg flex items-center justify-between mb-4">
					<span>{success}</span>
					<button
						className="cursor-pointer"
						type="button"
						onClick={() => setSuccess(null)}
					>
						<IconX />
					</button>
				</div>
			)}

			{error && (
				<div className="bg-red-100 text-red-900 px-4 py-2 rounded-lg flex items-center justify-between mb-4">
					<span>{error}</span>
					<button
						className="cursor-pointer"
						type="button"
						onClick={() => setError(null)}
					>
						<IconX />
					</button>
				</div>
			)}

			<form
				onSubmit={handleSubmit}
				encType="multipart/form-data"
				className="space-y-4"
			>
				<div>
					<input
						type="text"
						name="yourname"
						placeholder="Your Name"
						className={`bg-white px-4 w-full py-2 placeholder:text-zinc-400 text-black ${
							touched.yourname && errors.yourname
								? "border-2 border-red-500"
								: ""
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
							touched.yourmobile && errors.yourmobile
								? "border-2 border-red-500"
								: ""
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
							touched.youremail && errors.youremail
								? "border-2 border-red-500"
								: ""
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
						name="interested"
						placeholder="Interested In"
						className={`bg-white px-4 w-full py-2 placeholder:text-zinc-400 text-black ${
							touched.interested && errors.interested
								? "border-2 border-red-500"
								: ""
						}`}
						value={values.interested}
						onChange={handleChange}
						onBlur={handleBlur}
					/>
					{touched.interested && errors.interested && (
						<p className="text-red-500 text-sm mt-1">{errors.interested}</p>
					)}
				</div>

				<div>
					<input
						type="file"
						ref={fileInputRef}
						onChange={handleFileChange}
						className="hidden"
						accept=".doc,.docx,.pdf"
					/>
					<div
						className={`bg-white px-4 w-full py-2 flex items-center justify-between cursor-pointer ${
							touched.resume && errors.resume ? "border-2 border-red-500" : ""
						}`}
						onClick={handleBrowseClick}
					>
						<span className={fileName ? "text-black" : "text-zinc-400"}>
							{fileName || "Resume"}
						</span>
						<IconUpload size={20} className="text-zinc-400" />
					</div>
					{touched.resume && errors.resume && (
						<p className="text-red-500 text-sm mt-1">
							{errors.resume as string}
						</p>
					)}
					<p className="text-xs text-zinc-300 mt-1">
						Accepted formats: .doc, .docx, .pdf (Max size: 5MB)
					</p>
				</div>

				<button
					type="submit"
					disabled={loading}
					className="mani-button text-center flex items-center justify-center gap-2"
				>
					{loading && <IconRefresh className="animate-spin" />}
					Apply
				</button>
			</form>
		</div>
	);
};

export default Form;
