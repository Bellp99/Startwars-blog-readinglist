import { PlanetsCard } from "./PlanetsCard";

export const PlanetsCardList = ({ allplanets }) => {
    return (
        <>
            <div className="row d-flex flex-nowrap overflow-auto">
                {
                    allplanets.map(planet => {
                        return(
                        <PlanetsCard 
                            key={planet.uid}
                            id={planet.uid}
                            name={planet.name}
                        />
                        );
                    })
                }
            </div>
        </>
    );
}