import { Container } from 'react-bootstrap';
import { Route, Routes } from "react-router-dom";

import { Home } from './pages';
import { NavbarHeader } from './components';
import './App.css';

function App() {
  return (
    <div className="app">
      <NavbarHeader />
      <Container className="pt-3">
        <Routes>
          <Route path="/" element={ <Home/> }/>
        </Routes>
      </Container>
    </div>
  );
}

export default App;
