import React from "react";
import styles from "@/app/styles/navbar.module.css";
import Image from "next/image";
import Link from "next/link";

import logoPic from "/public/logo.png";
import Nav from "./Nav";

const Header = () => {
	return (
		<header className={styles.main_header}>
			<div className={styles.navbar_brand}>
				<Link href="/">
					<Image
						src={logoPic}
						alt="Logo"
						width={150} //automatically provided
						height={150} //automatically provided
						// blurDataURL="data:..." automatically provided
						// placeholder="blur" // Optional blur-up while loading
					/>
				</Link>
			</div>
			<Nav />
		</header>
	);
};

export default Header;
