import React from 'react'
import { useRouteError } from 'react-router';

export default function Error() {
    const error = useRouteError()
    console.log(error);
    
  return (
    <div>Smething went wrong  {error.status}</div>
  )
}
