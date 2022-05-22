
import Movie from './Movie.js'
import Stack from 'react-bootstrap/Stack'
import Row from 'react-bootstrap/Row'
import { useEffect, useReducer, useCallback} from 'react';
import axios from 'axios'


export const ACTIONS = {
  addFavorite: "add",
  removeFavorite: "remove",
  initFavorites: "initFavorites",
  loadMovies: "loadMovies"
}

const initialState = {
  favorites: [],
  movies: []
}

const reducer = (state, action) => {
  switch (action.type) {

    case ACTIONS.initFavorites:
      return {...state, favorites: action.favorites}
    case ACTIONS.addFavorite:
      return {...state, favorites: [...state.favorites, action.favorite]}
    case ACTIONS.removeFavorite:
      return {...state, favorites: [...state.favorites.filter((favorite)=> favorite.imdbID !== action.favorite.imdbID)]}
    case ACTIONS.loadMovies:
      return {...state, movies: action.movies}
    default: 
      return state;
  }
}



const MovieList = ({searchValue, onlyFavorites}) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const showMovies =  onlyFavorites ? state.favorites : state.movies

  const loadingMovies = useCallback(async() => {
    if({searchValue}){
      const responseAll = await axios.get("http://www.omdbapi.com/?i=tt3896198&apikey=2c033d0", { params: { s: searchValue } })
      const bodyAll = responseAll.data.Search;
      const formattedMovies = bodyAll && bodyAll.map((movie) => ({title: movie.Title, year: movie.Year, poster: movie.Poster, imdbID: movie.imdbID}))
      dispatch({type: ACTIONS.loadMovies, movies: formattedMovies})
    }
  }, [searchValue])

  useEffect(() => {
    loadingMovies()
  },[loadingMovies, state.favorites])

  const loadingFavorites = useCallback(async() => {
      const responseFavorites = await axios.get("http://localhost:8082/api/fav")
      const bodyFavorites =  responseFavorites.data;
      dispatch({type: ACTIONS.initFavorites, favorites: bodyFavorites})
  }, [])

  useEffect(() => {
    loadingFavorites()
  },[loadingFavorites])


  return (
    <Stack direction="horizontal" className="justify-content-md-center" >
      <Row className="g-4 justify-content-md-center" >
        {showMovies && showMovies.map((movie) => (
            <Movie key={movie.imdbID} poster={movie.poster} title={movie.title} year={movie.year} imdbID={movie.imdbID} isFavorite={state.favorites.map(favorite => favorite.imdbID).includes(movie.imdbID)} dispatch={dispatch}/>
        ))}
      </Row>
    </Stack>
  );
}

export default MovieList


