import { useEffect, useState } from "react";

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

	useEffect(() => console.log(actors, actresses), [actors, actresses]);

	return (
		<>
			<div className="container"></div>
		</>
	);
}
