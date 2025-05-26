export const VehicleProperties = ({ singlevehicle }) => {
 //  if (!singleperson || !singleperson.properties) {
  //     return <p>Loading character data...</p>;
  //  }

    const {
        name,
        created,
        edited,
        consumables,
        cargo_capacity,
        passengers,
        max_atmosphering_speed,
        crew,
        length,
        model,
        cost_in_credits,
        manufacturer,
        vehicle_class
    } = singlevehicle;

    return (
        <div className="card p-4 shadow-sm">
            <h3 className="text-danger">{name}</h3>
            <ul className="list-group list-group-flush">
                <li className="list-group-item"><strong>Created:</strong> {created}</li>
                <li className="list-group-item"><strong>Edited:</strong> {edited}</li>
                <li className="list-group-item"><strong>Consumables:</strong> {consumables} </li>
                <li className="list-group-item"><strong>Cargo capacity:</strong> {cargo_capacity} </li>
                <li className="list-group-item"><strong>Passengers:</strong> {passengers}</li>
                <li className="list-group-item"><strong>Max atmosphering spedd:</strong> {max_atmosphering_speed}</li>
                <li className="list-group-item"><strong>Crew:</strong> {crew}</li>
                <li className="list-group-item"><strong>Length:</strong> {length}</li>
                <li className="list-group-item"><strong>Model:</strong> {model}</li>
                <li className="list-group-item"><strong>Cost in credits:</strong> {cost_in_credits}</li>
                <li className="list-group-item"><strong>Manufacturer:</strong> {manufacturer}</li>
                <li className="list-group-item"><strong>Vehicle class:</strong> {vehicle_class}</li>
            </ul>
        </div>
    );
};
