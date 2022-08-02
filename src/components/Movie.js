import React from 'react'

const Movie = ({name, children}) => {
  return (
    <>
    <a href={children}>{name}</a>
    </>
  )
}

export default Movie