import Link from "next/link";
import React from "react";
import MovieCard from "../components/MovieCard";
import styles from "@/app/styles/common.module.css";
import { resolve } from "styled-jsx/css";

const Movie = async () => {
	await new Promise((resolve) => setTimeout(resolve, 2000));
	const url = process.env.RAPID_KEY;
	const options = {
		method: "GET",
		headers: {
			"X-RapidAPI-Key":
				"61420ec3d9msha807ca165d8d83bp1b81c9jsn22e2a567a54f",
			"X-RapidAPI-Host": "netflix54.p.rapidapi.com",
		},
	};
	const res = await fetch(url, options);
	const data = await res.json();
	const main_data = data.titles;

	return (
		<>
			<section className={`${styles.movieSection}`}>
				<div className={styles.container}>
					<h1>Series & Movie </h1>
					<div className={styles.card_section}>
						{main_data.map((curElm) => {
							return <MovieCard key={curElm.id} {...curElm} />;
						})}
					</div>
				</div>
			</section>
		</>
	);
};

export default Movie;
