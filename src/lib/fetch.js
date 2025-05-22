const baseURL = 'https://www.swapi.tech/api'


export const FetchSinglePerson = async (dispatch, id) => {
    try {
        const response = await fetch(`${baseURL}/people/${id}`) ;          
        if (!response.ok){
            throw new Error(response.status);
        }
        const data = await response.json();
        console.log(data);
        dispatch(
            {
                type: 'FetchSinglePerson',
                payload: data.result.properties,
            }
        );
        return data;  
        
    }
    catch (error) {
        console.log("Error getting Star Wars person Attributes!", error)
    }
    
}

export const fetchAllPeople = async (dispatch) => {
    try {
        const response = await fetch(`${baseURL}/people`) ;          
        if (!response.ok){
            throw new Error(response.status);
        }
        const data = await response.json();
        console.log(data);
        dispatch(
            {
                type: 'fetchedAllPeople',
                payload: data.results,
            }
        );
        return data;  
        
    }
    catch (error) {
        console.log("Error get Star Wars people profiles!", error)
    }
    
}


export const fetchAllPlanets = async(dispatch) => {
            try {
            const response = await fetch(`${baseURL}/planets`) ;          
            if (!response.ok){
                throw new Error(response.status);
            }
            const data = await response.json();
            dispatch(
                {
                type: 'fetchedAllPlanets',
                payload: data.results,
                }
            );
            return data;  
        }
    catch (error) {
        console.log("Error get Star Wars planets profiles!", error)
    }
}

export const fetchAllVehicles = async(dispatch) => {
        try {
        const response = await fetch(`${baseURL}/vehicles`) ;          
        if (!response.ok){
            throw new Error(response.status);
        }
        const data = await response.json();
        dispatch(
            {
                type: 'fetchedAllVehicles',
                payload: data.results,
            }
        );
        return data;  
    }
    catch (error) {
        console.log("Error get Star Wars vehicles profiles!", error)
    }
}