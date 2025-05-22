export const CharacterProperties = ({ singleperson }) => {
 //  if (!singleperson || !singleperson.properties) {
  //     return <p>Loading character data...</p>;
  //  }

    const {
        name,
        birth_year,
        gender,
        height,
        mass,
        hair_color,
        eye_color,
        skin_color,
        homeworld,
        species,
        films,
        vehicles,
        starships,
    } = singleperson;

    return (
        <div className="card p-4 shadow-sm">
            <h3>{name}</h3>
            <ul className="list-group list-group-flush">
                <li className="list-group-item"><strong>Birth Year:</strong> {birth_year}</li>
                <li className="list-group-item"><strong>Gender:</strong> {gender}</li>
                <li className="list-group-item"><strong>Height:</strong> {height} cm</li>
                <li className="list-group-item"><strong>Mass:</strong> {mass} kg</li>
                <li className="list-group-item"><strong>Hair Color:</strong> {hair_color}</li>
                <li className="list-group-item"><strong>Eye Color:</strong> {eye_color}</li>
                <li className="list-group-item"><strong>Skin Color:</strong> {skin_color}</li>
                <li className="list-group-item"><strong>Homeworld:</strong> {homeworld}</li>
                <li className="list-group-item"><strong>Species:</strong> {species?.join(', ') || 'N/A'}</li>
                <li className="list-group-item"><strong>Films:</strong> {films?.join(', ') || 'N/A'}</li>
                <li className="list-group-item"><strong>Vehicles:</strong> {vehicles?.join(', ') || 'N/A'}</li>
                <li className="list-group-item"><strong>Starships:</strong> {starships?.join(', ') || 'N/A'}</li>
            </ul>
        </div>
    );
};
