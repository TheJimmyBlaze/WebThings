import { Container } from 'react-bootstrap';

import Loader from './features/loader/Loader';

const App = () => {

  return (
    <div className="vh-100 d-flex flex-column justify-content-center align-items-center bg-dark text-light overflow-hidden">

      <Container>

        <Loader />
      </Container>
    </div>
  )
};

export default App;
