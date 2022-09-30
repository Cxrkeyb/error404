import scarecrow from "./media/Scarecrow.png"
import './App.css';
import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      
      <div className="Error404text">404 NOT FOUND</div>
      <div className="Container404">
        <img className="Error404scarecrow" src={scarecrow} alt="Scarecrow 404"/>
        <div>
          <h1 className="Error404title">I have bad news for you</h1>
          <p className="Error404paragraph">The page you are looking for night be removed or is temporarily unavailable</p>
          <button className="Error404button">BACK TO HOMEPAGE</button>
        </div>
      </div>
      <div className="Error404createdby">
        created by Corkeyb - devChallenges
      </div>
    </Fragment>
  );
}

export default App;
