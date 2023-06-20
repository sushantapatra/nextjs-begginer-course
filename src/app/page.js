import Image from "next/image";
import styles from "./page.module.css";
import HeroSection from "./components/HeroSection";

export default function Home() {
	return (
		<>
			<HeroSection
				title={"Let's Watch Movie Together"}
				imageUrl={"home.svg"}
			/>
		</>
	);
}
