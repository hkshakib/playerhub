import React from 'react'
import useGenres from '../hooks/useGenre';

const GenreList = () => {
    const {genres} = useGenres();
  return (
    <ul>
        {genres && genres.map(genre => <li key={genre.id}> {genre.name} </li>) }
    </ul>
  )
}

export default GenreList;