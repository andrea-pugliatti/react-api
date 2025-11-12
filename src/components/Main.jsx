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
		<div className="container">
			<ul className="actors-list">
				{actors.length > 0
					? actors.map((actor) => (
							<li key={actor.id}>
								<div className="card">
									<img src={actor.image} alt={actor.name} />
									<div className="card-body">
										<h3>{actor.name}</h3>
										<div>{actor.birth_year}</div>
										<div>
											<span className="bold">Nationality: </span>
											{actor.nationality}
										</div>
										<div>
											<span className="bold">Biography: </span>
											{actor.biography}
										</div>
										<div>
											<span className="bold">Awards: </span>
											{actor.awards.join(", ")}
										</div>
									</div>
								</div>
							</li>
						))
					: ""}
			</ul>
		</div>
	);
}
