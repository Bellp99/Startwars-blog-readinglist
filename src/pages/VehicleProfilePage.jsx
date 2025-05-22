import { useEffect } from "react";
import { useParams } from "react-router-dom";

import useGlobalReducer from "../hooks/useGlobalReducer";
import { FetchSingleVehicle } from "../lib/fetch";
import { VehicleProperties } from "../components/VehicleProperties";


export const VehicleProfilePage = () => {
    const { store, dispatch } = useGlobalReducer();

    const { uid } = useParams(); // 👈 get id from route

    useEffect(() => {
          FetchSingleVehicle(dispatch, uid); // 👈 pass id to fetch function
    }, []);


    return (
        <>
            <div className="row my-5">
                <div className="col-1"></div>
                <div className="col-5">
                <img src={`https://github.com/breatheco-de/swapi-images/blob/master/public/images/vehicles/${uid}.jpg?raw=true`} className="card-img-top" alt="..." width={75} height={400}/>
                </div>
                <div className="col-5">
                    <VehicleProperties 
                        singlevehicle={store.singleVehicle}
                    />
                </div>        
                <div className="col-1"></div>
            </div>
        </>
    )
}