import React from 'react';
import { Link } from 'react-router-dom';

import Sidebar from "../sidebar/Sidebar";  // Import Sidebar if you plan to use it

function Home() {
  return (
    <div>
        <Sidebar/>
            <div>
                <h1>Welcome to the Recipe App</h1>
                <p>Click below to search recipes:</p>
                <Link to="/searchrecipy">Go to Recipe Search</Link>
            </div>
      
    </div>
  );
}

export default Home;
