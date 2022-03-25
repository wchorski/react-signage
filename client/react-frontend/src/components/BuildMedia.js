import { React, useEffect, useState } from 'react'

export const BuildMedia = () => {
  console.log("BuildMedia.js Component :))))))");

  const [ initialState, setInitialState ] = useState( [] )
  useEffect( () => {
    fetch('/api/media1').then(res => {
      if(res.ok){
        return res.json()
      }
    }).then(jsonResponse => setInitialState(jsonResponse.media))
  }, [] )

  return(
    <>
      <h1>BuildMedia.js Component</h1>
      <ul>
        {initialState.length > 0 
        && initialState.map( (media,i) => <img key={i} src={"./media/" + media} alt={"slide " + (i + 1) + " out of " + media.length }></img> )}
      </ul>
    </>
  )
}