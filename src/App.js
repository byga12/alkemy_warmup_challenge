import {Route} from 'wouter'
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className="App">
      <Route path='/' component={HomePage}/>
    </div>
  );
}

export default App;
