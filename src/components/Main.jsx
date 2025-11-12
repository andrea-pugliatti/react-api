import { useEffect, useState } from "react";
import Card from "./Card";

export default function Main() {
	const actorsEndpoint = "https://lanciweb.github.io/demo/api/actors/";
	const actressesEndpoint = "https://lanciweb.github.io/demo/api/actresses/";

	const [actors, setActors] = useState([]);
	const [actresses, setActresses] = useState([]);

	function fetchActors() {
		fetch(actorsEndpoint)
			.then((res) => res.json())
			.then(setActors)
			.catch((error) => console.error(error.message));

		fetch(actressesEndpoint)
			.then((res) => res.json())
			.then(setActresses)
			.catch((error) => console.error(error.message));
	}

	useEffect(fetchActors, []);

	useEffect(
		() => console.log("On change of actors and actresses", actors, actresses),
		[actors, actresses],
	);

	return (
		<div className="container">
			<ul className="actors-list">
				{actors.length > 0
					? actors.map((actor) => (
							<li key={actor.id}>
								<Card actor={actor} gender={"m"} />
							</li>
						))
					: ""}
			</ul>
			<ul className="actors-list">
				{actresses.length > 0
					? actresses.map((actress) => (
							<li key={actress.id}>
								<Card actor={actress} gender={"f"} />
							</li>
						))
					: ""}
			</ul>
		</div>
	);
}
