import React from 'react'
import useMovieById from '../hooks/useMovieById'
import { useSelector } from 'react-redux';

const VideoBackground = (movieId) => {
  const trailer = useSelector(store => store.movie.trailerMovie);
  useMovieById(movieId);
  return (
    <div className='w-screen'>
      <iframe className='w-screen aspect-video'
      src={`https://www.youtube.com/embed/${trailer.key}?si=hbUNuLowWjTxo3-h&autoplay=1&mute=1`}
      title="YouTube video player" 
      frameBorder="0" 
      allowFullScreen></iframe>
    </div>
  )
}

export default VideoBackground
