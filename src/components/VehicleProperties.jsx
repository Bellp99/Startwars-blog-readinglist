export const VehicleProperties = ({ singlevehicle }) => {
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
    } = singlevehicle;

    return (
        <div className="card p-4 shadow-sm">
            <h3 className="text-danger">{name}</h3>
            <ul className="list-group list-group-flush">
                <li className="list-group-item"><strong>Birth Year:</strong> {birth_year}</li>
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
