import React from "react";
import Stars from "./components/Stars";
import { uniqueId } from "lodash";
import './App.css';

function App() {
  const count = Math.floor(Math.random() * 8);
  console.log(count)
     return (
        <>
           <div className="bl">
              {count > 0 && count <= 5 && !Number.isNaN(count) && (
                 <Stars count={count} key={uniqueId("stars_")} />
              )}
           </div>
        </>
     );
}

export default App;
