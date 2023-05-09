import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Pixabay from './Components/Pixabay';
import Unsplash from './Components/Unsplash';
import { Link } from 'react-router-dom'
import { Select } from './Components/Select';

import { DataContextProvider } from './Context/Context';

function App() {

  return (
    <>
      <DataContextProvider>
        <Router>
          <Navbar />
          <Select />
          <Routes>
            <Route path="/" element={<Unsplash />} />
            <Route path="/Pixabay" element={<Pixabay />} />
          

          </Routes>
        </Router>
      </DataContextProvider>
    </>
  );
}

export default App;
