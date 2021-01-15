import React, { forwardRef } from 'react'
import '../css/VideoCard.css'
import TextTruncate from 'react-text-truncate'
import { ThumbUpSharp } from '@material-ui/icons'

const base_url = 'https://image.tmdb.org/t/p/original/'
const VideoCard = forwardRef(({ movie }, ref) => {
  return (
    <div className='videoCard'>
      <img
        src={`${base_url}${movie.backdrop_path || movie.poster_path}`}
        alt={movie.title || movie.original_name}
        title={movie.title || movie.original_name}
      />
      <TextTruncate line={2} element='p' truncate='...' text={movie.overview} />
      <h2>{movie.title || movie.original_name}</h2>
      <p className='videoCard__stats'>
        <span>
          Release Date :&nbsp;{movie.release_date || movie.first_air_date}
        </span>
        <span>
          <ThumbUpSharp className='videoCard__thumbsUp' />
          {movie.vote_count}
        </span>
      </p>
    </div>
  )
})

export default VideoCard
