import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchBox from "./Components/SearchBox";
import { Row } from 'react-bootstrap'
import MovieList from './Components/MovieList';
import Container from 'react-bootstrap/Container'
import { useState } from 'react';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'


function App() {

  const [searchValue, setSearchValue] = useState('')

  return (
    <div className="App">
      <header className="movie-app">
        <Container fluid="md" className='app-header'>
          <h1>Einat Sidi Movies App</h1>
        </Container>
        </header>
        <Tabs defaultActiveKey="home" id="tabs" className="mb-3" unmountOnExit >
          <Tab eventKey="home" title="Home">
            <Container>
              <Row>
                <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
              </Row>
              <br />
              <Row>
                <MovieList searchValue={searchValue} onlyFavorites={false} />
              </Row>
            </Container>


          </Tab>
          <Tab eventKey="favorites" title="Favorites">
            <Container>
              <br />
              <Row>
                <MovieList searchValue={searchValue} onlyFavorites={true} />
              </Row>
            </Container>
          </Tab>
        </Tabs>
    </div>
  );
}

export default App;
