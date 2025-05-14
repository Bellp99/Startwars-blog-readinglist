import { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { fetchAllPeople, fetchAllPlanets, fetchAllVehicles } from "../lib/fetch";
import { CharacterCardList } from "../components/CharacterCardList";
import { VehicleCardList } from "../components/VehicleCardList";
import { PlanetsCardList } from "../components/PlanetsCardList";

export const StarWarsLandingPage = () => {
    const { store, dispatch } = useGlobalReducer();



    useEffect(() =>  {
        fetchAllPeople(dispatch);
        fetchAllVehicles(dispatch);
        fetchAllPlanets(dispatch);
    },[])

    return (
        <>
            <div className="row my-5">
                <div className="col-1"></div>
                <div className="col-10">
                    <h2 className="text-danger">Characters</h2>
                    <CharacterCardList 
                        allpeople={store.allPeople}
                    
                    />
                </div>
                <div className="col-1"></div>
            </div>
            <div className="row my-5">
                <div className="col-1"></div>
                <div className="col-10">
                    <h2 className="text-danger">Vehicles</h2>
                    <VehicleCardList 
                        allvehicles={store.allVehicles}
                    
                    />
                </div>
                <div className="col-1"></div>
            </div>
            <div className="row my-5">
                <div className="col-1"></div>
                <div className="col-10">
                    <h2 className="text-danger">Planets</h2>
                    <PlanetsCardList 
                        allplanets={store.allPlanets}
                    
                    />
                </div>
                <div className="col-1"></div>
            </div>
        </>
    )
}