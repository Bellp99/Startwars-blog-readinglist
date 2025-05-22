export const PlanetProperties = ({ singleplanet }) => {
 //  if (!singleperson || !singleperson.properties) {
  //     return <p>Loading character data...</p>;
  //  }

    const {
        name,
        created,
        edited,
        climate,
        surface_water,
        diameter,
        rotation_period,
        population,
        
    } = singleplanet;

    return (
        <div className="card p-4 shadow-sm">
            <h3 className="text-danger">{name}</h3>
            <ul className="list-group list-group-flush">
                <li className="list-group-item"><strong>Birth Year:</strong> {created}</li>
                <li className="list-group-item"><strong>Gender:</strong> {gender}</li>
                <li className="list-group-item"><strong>Height:</strong> {height} cm</li>
                <li className="list-group-item"><strong>Mass:</strong> {mass} kg</li>
                <li className="list-group-item"><strong>Hair Color:</strong> {hair_color}</li>
                <li className="list-group-item"><strong>Eye Color:</strong> {eye_color}</li>
                <li className="list-group-item"><strong>Skin Color:</strong> {skin_color}</li>
                <li className="list-group-item"><strong>Homeworld:</strong> {homeworld}</li>
            </ul>
        </div>
    );
};
