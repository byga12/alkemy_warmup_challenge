import {Route, Link} from 'wouter'
import HomePage from './pages/HomePage';

//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

//React-Bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';





function App() {
  return (
    <div className="App">
      
      <Container>
        <Row>


          <Col xs={1}>
            1 of 3
          </Col>

          <Col>
            <Route path='/' component={HomePage}/>
          </Col>

          <Col xs={4}>
            3 of 3
          </Col>



        </Row>
      </Container>
    </div>
  );
}

export default App;
