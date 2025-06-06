import { VehicleCard } from "./VehicleCard";

export const VehicleCardList = ({ allvehicles }) => {
    return (
        <>
            <div className="row d-flex flex-nowrap overflow-auto">
                {
                    allvehicles.map(vehicle => {
                        return(
                        <VehicleCard 
                            key={vehicle.uid}
                            id={vehicle.uid}
                            name={vehicle.name}
                        />
                        );
                    })
                }
            </div>
        </>
    );
}