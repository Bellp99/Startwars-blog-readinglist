import { useEffect } from "react";
import { useParams } from "react-router-dom";

import useGlobalReducer from "../hooks/useGlobalReducer";
import { FetchSinglePerson } from "../lib/fetch";
import { CharacterProperties } from "../components/CharacterProperties";


export const PeopleProfilePage = () => {
    const { store, dispatch } = useGlobalReducer();

    const { uid } = useParams(); // 👈 get id from route

    useEffect(() => {
          FetchSinglePerson(dispatch, uid); // 👈 pass id to fetch function
    }, []);


    return (
        <>
            <div className="row my-5">
                <div className="col-1"></div>
                <div className="col-5">
                <img src={`https://github.com/breatheco-de/swapi-images/blob/master/public/images/people/${uid}.jpg?raw=true`} className="card-img-top" alt="..." width={75} height={400}/>
                </div>
                <div className="col-5">
                    <CharacterProperties 
                        singleperson={store.singlePerson}
                    />
                </div>        
                <div className="col-1"></div>
            </div>
        </>
    )
}