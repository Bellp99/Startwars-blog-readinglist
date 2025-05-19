import { CharacterCard } from "./CharacterCard"

export const CharacterCardList = ({ allpeople, dispatch }) => {
    return (
        <>
            <div className="row d-flex flex-nowrap overflow-auto">
                {
                    allpeople.map (person => {
                        return(
                        <CharacterCard 
                            key={person.uid}
                            id={person.uid}
                            name={person.name}
                            dispatch={dispatch}



                        />
                        );
                    })
                }
            </div>
        </>
    );
}