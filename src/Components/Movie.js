import Card from 'react-bootstrap/Card'
import { Button } from 'react-bootstrap'
import { HeartFill } from 'react-bootstrap-icons';
import axios from 'axios'
import { ACTIONS } from './MovieList';
import { useState } from 'react';

const defaultPicture = "https://motivatevalmorgan.com/wp-content/uploads/2016/06/default-movie.jpg"


const Movie = (props) => {

  const movie = {
    poster: props.poster  === "N/A" ? defaultPicture : props.poster,
    title: props.title,
    year: props.year,
    imdbID: props.imdbID,
    isFavorite: props.isFavorite,
  }
  const [isFavorite, setIsFavorite] = useState(movie.isFavorite);

  const handleFavorites = async (movie) => {

    const addFavorite = async (movie) => {
      setIsFavorite(true)
      try {
        await axios.post("http://localhost:8082/api/fav", { title: movie.title, year: movie.year, poster: movie.poster, imdbID: movie.imdbID })
        props.dispatch({ type: ACTIONS.addFavorite, favorite: movie })
      } catch (err) {
        console.log(err)
      }
    }

    const removeFavorite = async (movie) => {
      setIsFavorite(false)
      try {
        await axios.delete(`http://localhost:8082/api/fav/${movie.imdbID}`)
        props.dispatch({ type: ACTIONS.removeFavorite, favorite: movie })
      } catch (err) {
        console.log(err)
      }
    }

    isFavorite ? removeFavorite(movie) : addFavorite(movie)

  }


  return (
    <>
      <Card className='movie-card' bg="dark" border="dark" style={{ width: '18rem' }}>
        <div className='image-container'>
          <Card.Img variant="top" src={movie.poster}  height="280rem" width="18rem" alt="poster" />
          <div className='overlay d-flex align-items-center justify-content-center'>
            <Button className="like-button secondary" variant="outline-light"
              onClick={() => { handleFavorites(movie) }} >{isFavorite ? "Remove from" : "Add to"} favorites <HeartFill color={isFavorite ? 'red' : 'white'} /></Button>
          </div>
        </div>
        <Card.Body>
          <Card.Title className="Title" text="light">{movie.title}</Card.Title>
          <Card.Subtitle className="Year mb-2 text-muted">{movie.year}</Card.Subtitle>
        </Card.Body>
        <Button className='liked' onClick={() => { handleFavorites(movie) }} ><HeartFill size={'20px'} color={isFavorite ? 'red' : 'white'} /></Button>
      </Card>
      <br />
    </>
  )
}

export default Movie