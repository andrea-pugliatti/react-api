import { useEffect, useState } from "react";
import Card from "./Card";

export default function Main() {
	const actorsEndpoint = "https://lanciweb.github.io/demo/api/actors/";
	const actressesEndpoint = "https://lanciweb.github.io/demo/api/actresses/";

	const [actors, setActors] = useState([]);
	const [actresses, setActresses] = useState([]);
	const [list, setList] = useState([]);

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

	useEffect(() => {
		// console.log("On change of actors and actresses", actors, actresses);
		actresses.map((actress) => {
			actress.id += 100;
			return actress;
		});
		setList([...actors, ...actresses]);
	}, [actors, actresses]);

	return (
		<div className="container">
			<ul className="actors-list">
				{list.length > 0
					? list.map((actor) => (
							<li key={actor.id}>
								<Card actor={actor} />
							</li>
						))
					: ""}
			</ul>
		</div>
	);
}
