import './App.css';
import axios from 'axios';
import Layout from './components/Layout';
import Home from './components/home/Home';
import { Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';


function App() {

  const [movies, setMovies] = useState();

  const getMovies = async () => {

    try{
      const resp = await axios.get("http://localhost:8080/api/v1/movies")
      console.log(resp.data);
      setMovies(resp.data);
    } catch(err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getMovies();
  }, [])

  return (
    <div className="App">

    <Routes>
        <Route path="/" element={<Layout />}>
          <Route path='/' element={<Home movies={movies} />} />

        </Route>
    </Routes>

    </div>
  );
}

export default App;
