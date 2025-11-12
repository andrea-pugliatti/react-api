export default function Card({ actor }) {
	return (
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
	);
}
