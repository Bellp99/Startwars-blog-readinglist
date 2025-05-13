import { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { fetchAllPeople, fetchAllPlanets, fetchAllVehicles } from "../lib/fetch";
import { CharacterCardList } from "../components/CharacterCardList";

export const StarWarsLandingPage = () => {
    const { store, dispatch } = useGlobalReducer();



    useEffect(() =>  {
        fetchAllPeople(dispatch);
       // fetchAllVehicles(dispatch);
       // fecthAllPlanets(dispatch);
    },[])

    return (
        <>
            <div className="row my-5">
                <div className="col-1"></div>
                <div className="col-10">
                    <h1>Characters</h1>
                    <CharacterCardList 
                        allpeople={store.allPeople}
                    
                    />
                </div>
                <div className="col-1"></div>
            </div>
        </>
    )
}