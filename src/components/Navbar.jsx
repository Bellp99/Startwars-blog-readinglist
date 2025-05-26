import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Navbar = () => {
	const { store, dispatch } = useGlobalReducer();

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1 ms-3"><img src={`https://raw.githubusercontent.com/breatheco-de/swapi-images/09392b3f505af988e930f391f7b9cc38d43288d9/public/images/sw_logo.svg`} className="card-img-top" alt="..." width="50" height="35"/></span>
				</Link>
				<div className="ml-auto d-flex">
						<div className="btn-group favList">
							<button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
								<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
								<path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
								</svg>   Favoritos
							</button>
							<ul className="dropdown-menu dropdown-menu-end">
								{
									store.favorites.map(favorite => {
										return (
											<li key={`${favorite.id}${favorite.name}`} className="d-flex justify-content-between">
												<Link className="dropdown-item" to={`/profile-page/people/${favorite.id}`}>
													{
													favorite.name} 
												</Link>
												<svg xmlns="http://www.w3.org/2000/svg" 
													 width="16" 
													 height="16" 
													 fill="red" 
													 className="bi bi-trash3-fill m-2 btn-outline-danger" 
													 viewBox="0 0 16 16"
													 onClick={()=> {
														dispatch({
															type: 'removedFavorite',
															payload: {name: favorite.name}
														});
													 }}
													 >
													<path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5"/>
												</svg>
											</li> 
											
										)
									})
								}
							</ul>
						</div>
				</div>
			</div>
		</nav>
	);
};