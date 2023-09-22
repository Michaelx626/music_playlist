import React from 'react';
import { Navbar} from './Components/Navbar';



function App() {
  return (
    <><Navbar />
    <div className="App">
      <div className="container">
      <h1 className='d-flex justify-content-center mt-2 mb-2'>Music Playlist!</h1>
      <div className="d-flex justify-content-center">
      <input type="text" placeholder="Search"></input>
      </div>
      
      </div>
    </div></>
  );
}

export default App;
