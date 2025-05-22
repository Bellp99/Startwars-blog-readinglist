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
                <div className="col-10">
                    <h2 className="text-danger">Characters</h2>
                    <CharacterProperties 
                        singleperson={store.singlePerson}
                    />
                </div>        
                <div className="col-1"></div>
            </div>
        </>
    )
}