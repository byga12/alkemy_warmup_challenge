// import { useEffect } from 'react';

import {Route} from 'wouter'
import Sidebar from './components/Sidebar/Sidebar';
import HomePage from './pages/HomePage/HomePage';
import DetailPage from './pages/DetailPage/DetailPage';
import LoginPage from './pages/LoginPage/LoginPage';

//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
//React-Bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
//styles
import s from './App.module.css';

//redux
import {Provider} from 'react-redux'
import store from './store';






function App() {




  return (
    <Provider store={store}>   
      <div className="App">
      <Container>

        <Row>

          <Col xs={1}>   
           <Sidebar/>
          </Col>

          <Col className="border-start border-end" style={{padding:"0px"}}>
            <div className={`${s.topBar} border-bottom`}>Inicio</div>
            <Route path='/login' component={LoginPage}/>
            <Route path='/' component={HomePage}/>
            <Route path='/post/:id' component={DetailPage}/>
          </Col>

          <Col xs={4}>
            3 of 3
          </Col>

        </Row>
        
      </Container>
    </div>
    </Provider>
  );
}

export default App;
