import { styled } from 'styled-components';
import './App.css';
// import Home from './pages/Home';
import Navbar from './components/Navbar';
import Featured from './components/Featured';
import MovieList from './components/MovieList';

const HomeContainer = styled.div`
  background-color: #0b0b0b;
  overflor: hidden;
`

function App() {
  return (
    <HomeContainer>
      <Navbar/>
      <Featured/>
      <MovieList/>
      <MovieList/>
      <MovieList/>
      <MovieList/>
    
    </HomeContainer>
  );
}

export default App;
