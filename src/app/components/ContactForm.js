"use client";
import React, { useState } from "react";
import styles from "@/app/contact/contact.module.css";

const ContactForm = () => {
	const [user, setUser] = useState({
		name: "",
		email: "",
		phone: "",
		message: "",
	});
	const [status, setStatus] = useState("");

	const handleChange = (event) => {
		const name = event.target.name;
		const value = event.target.value;
		setUser((prevUser) => ({
			...prevUser,
			[name]: value,
		}));
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log(user.name);
		try {
			const response = await fetch("/api/contact", {
				method: "POST",
				headers: { Content_Type: "application/json" },
				body: JSON.stringify({
					name: user.name,
					email: user.email,
					phone: user.phone,
					message: user.message,
				}),
			});

			if (response.status == 200) {
				setUser({
					name: "",
					email: "",
					phone: "",
					message: "",
				});
				setStatus("success");
			} else {
				setStatus("Error");
			}
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<form
			className={styles.contact_form}
			method="POST"
			onSubmit={handleSubmit}
		>
			<div>
				{status == "success" && (
					<p className={styles.success_message}>
						Thank you for your message.
					</p>
				)}
				{status == "error" && (
					<p className={styles.success_message}>
						There was an error submmiting your message.
					</p>
				)}
			</div>
			<div className={styles.input_field}>
				<label htmlFor="username" className={styles.label}>
					Name
					<input
						type="text"
						name="name"
						id="name"
						placeholder="Enter your name"
						value={user.name}
						onChange={handleChange}
					/>
				</label>
			</div>
			<div className={styles.input_field}>
				<label htmlFor="email" className={styles.label}>
					Email
					<input
						type="text"
						name="email"
						id="email"
						placeholder="Enter your Email"
						value={user.email}
						onChange={handleChange}
					/>
				</label>
			</div>
			<div className={styles.input_field}>
				<label htmlFor="phone" className={styles.label}>
					Phone No
					<input
						type="text"
						name="phone"
						id="phone"
						placeholder="Enter your phone no"
						value={user.phone}
						onChange={handleChange}
					/>
				</label>
			</div>
			<div className={styles.input_field}>
				<label htmlFor="message" className={styles.label}>
					Message
					<textarea
						name="message"
						id="message"
						cols="30"
						rows="10"
						placeholder="Enter your message"
						value={user.message}
						onChange={handleChange}
					></textarea>
				</label>
			</div>
			<div>
				<button type="submit" className="text-black">
					Send Message
				</button>
			</div>
		</form>
	);
};

export default ContactForm;
