export const PlanetProperties = ({ singleplanet }) => {
 //  if (!singleperson || !singleperson.properties) {
  //     return <p>Loading character data...</p>;
  //  }

    const {
        name,
        edited,
        created,
        climate,
        surface_water,
        diameter,
        rotation_period,
        terrain,
        gravity,
        orbital_period,
        population,
        
    } = singleplanet;

    return (
        <div className="card p-4 shadow-sm">
            <h3 className="text-danger">{name}</h3>
            <ul className="list-group list-group-flush">
                <li className="list-group-item"><strong>Created:</strong> {created}</li>
                <li className="list-group-item"><strong>Edited:</strong> {edited}</li>
                <li className="list-group-item"><strong>Climate:</strong> {climate} </li>
                <li className="list-group-item"><strong>Surface water:</strong> {surface_water} </li>
                <li className="list-group-item"><strong>Rotation period:</strong> {rotation_period}</li>
                <li className="list-group-item"><strong>Diameter:</strong> {diameter}</li>
                <li className="list-group-item"><strong>Terrain</strong> {terrain}</li>
                <li className="list-group-item"><strong>Gravity:</strong> {gravity}</li>
                <li className="list-group-item"><strong>Orbital period:</strong> {orbital_period}</li>
                <li className="list-group-item"><strong>Population:</strong> {population}</li>
            </ul>
        </div>
    );
};
