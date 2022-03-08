import React from "react";
import { directors } from "../data";

function Directors() {
  return (
    <>
      <h1>Directors Page</h1>
      {directors.map(director =>
        {
          return (
          <div key={director.name}>{director.name}
            <ul>
            {director.movies.map(movie =>
              <li key={movie}>{movie}</li>)}
            </ul>
          
          </div>
          
        )
        
        }
        )
        }
    </>
  )
}

export default Directors;
