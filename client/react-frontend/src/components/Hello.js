import { React, useEffect, useState } from 'react'

export const Hello = () => {
  console.log("Hello.js Component");

  const [ initialState, setInitialState ] = useState( [] )
  useEffect( () => {
    fetch('/api/hello-names').then(res => {
      if(res.ok){
        return res.json()
      }
    }).then(jsonResponse => setInitialState(jsonResponse.hello))
  }, [] )

  // console.log(initialState)
  return(
    <>
      <ul>
        <h1>Hello.js Component</h1>
        {initialState.length > 0 
        && initialState.map( (name,i) => <li key={i}> {name} </li> )}
      </ul>
    </>
  )
}