import { Container } from 'react-bootstrap';

import { Home } from './pages';
import { NavbarHeader } from './components';
import './App.css';

function App() {
  return (
    <div className="app">
      <NavbarHeader />
      <Container className="pt-3">
        <Home />
      </Container>
    </div>
  );
}

export default App;
