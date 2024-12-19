import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Searchrecipy from './components/main/Searchrecipy';
import Home from "./components/main/Home";

const App = () => {
  return (
  <div>
    <BrowserRouter>
      <Routes>
              <Route index element={<Home />}/>
              <Route path="/Searchrecipy" element={<Searchrecipy />}/>
      </Routes>
    </BrowserRouter>
  </div>
  )
}

export default App
