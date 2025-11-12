export default function Card({ actor }) {
	return (
		<div className="card">
			<div className="card-image">
				<img src={actor.image} alt={actor.name} />
			</div>
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
					{actor.id > 100 ? actor.awards : actor.awards.join(", ")}
				</div>
				{actor.id > 100 ? (
					<ul className="most-famous-movies">
						<span className="bold">Most Famous Movies: </span>
						{actor.most_famous_movies.map((item, index) => (
							<li key={`${actor.name}-${index}`}>{item}</li>
						))}
					</ul>
				) : (
					""
				)}
			</div>
		</div>
	);
}
