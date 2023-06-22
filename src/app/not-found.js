import React from "react";
import styles from "@/app/styles/common.module.css";
import Link from "next/link";

const NotFOUND = () => {
	return (
		<section className={styles.container}>
			<div className={styles.error_page}>
				<h1>404</h1>
				<h2>Not Found </h2>
				<p>Could not find requested resource</p>
				<Link href="/">Go to Home Page</Link>
			</div>
		</section>
	);
};

export default NotFOUND;
