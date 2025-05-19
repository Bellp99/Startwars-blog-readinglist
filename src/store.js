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
      case 'FetchSinglePerson':
        const singlepersonArray = action.payload;
        return{
          ...store,
          singlePerson: [...singlepersonArray]
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
      case 'favedProfile': 
        {
        const { id, name } = action.payload;

        const filteredArray = store.favorites.filter(favorite => favorite.name !== name)

        return {
          ...store,
          favorites: [...filteredArray, {id: id, name: name}]
        }

      }
        case 'removedFavorite':
        {
          const { name } = action.payload;

          const filteredArray = store.favorites.filter(favorite => favorite.name !== name)

          return {
            ...store,
            favorites: [...filteredArray]
          }
        }

    default:
      throw Error('Unknown action.');
  }    
}
