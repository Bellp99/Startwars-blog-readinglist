export const initialStore=()=>{
  return{
      allPeople: [],
      allPlanets: [],
      allVehicles: [],
      singlePerson: [],
      singlePlanet: [],
      singleVehicle: [],
      favorites: []
  }
}

export default function storeReducer(store, action = {}) {
  switch(action.type){
    //case 'add_task':

    //  const { id,  color } = action.payload

    //  return {
      //  ...store,
      //  todos: store.todos.map((todo) => (todo.id === id ? { ...todo, background: color } : todo))
      //};
      case 'fetchedAllPeople':
        const peopleArray = action.payload;
        return{
          ...store,
          allPeople: [...peopleArray]
        }
      case 'fetchedAllPlanets':
        const planetsArray = action.payload;
        return{
          ...store,
          allPlanets: [...planetsArray]
        }
      case 'fetchedAllVehicles':
        const vehiclesArray = action.payload;
        return{
          ...store,
          allVehicles: [...vehiclesArray]
        }
    default:
      throw Error('Unknown action.');
  }    
}
