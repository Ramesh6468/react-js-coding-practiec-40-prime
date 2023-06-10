// Write your code here
import MoviesSlider from '../MoviesSlider'
import './index.css'

const PrimeVideo = props => {
  const {moviesList} = props
  const actionMoviesList = moviesList.filter(
    eachItem => eachItem.categoryId === 'ACTION',
  )
  const comedyMoviesList = moviesList.filter(
    eachItem => eachItem.categoryId === 'COMEDY',
  )
  return (
    <div className="bgContainer">
      <img
        className="image"
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
      />
      <div className="movieContainer">
        <h1 className="heading">Action Movies</h1>
        <MoviesSlider moviesList={actionMoviesList} />
        <h1 className="heading">Comedy Movies </h1>
        <MoviesSlider moviesList={comedyMoviesList} />
      </div>
    </div>
  )
}

export default PrimeVideo
