import Link from "next/link";
import Image from "next/image";
import React from "react";
import styles from "@/app/styles/common.module.css";

const MovieDetail = async ({ params }) => {
	const id = params.id;
	const url = `https://netflix54.p.rapidapi.com/title/details/?ids=${id}&lang=en`;
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
	const mainData = data[0].details;
	return (
		<>
			<div className={styles.container}>
				<h2 className={styles.movie_title}>
					Netflix \ <span>{mainData.type}</span>
				</h2>
				<div className={styles.card_section}>
					<div>
						<Image
							src={mainData.backgroundImage.url}
							alt={mainData.title}
							width={800}
							height={300}
						/>
					</div>
					<div>
						<h1>{mainData.title}</h1>
						<p>{mainData.synopsis}</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default MovieDetail;
