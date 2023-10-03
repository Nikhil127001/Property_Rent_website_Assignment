import './App.css';
import {BrowserRouter as Router , Routes,Route} from 'react-router-dom'
import HomePage from './Pages/HomePage';

import DetailsPage from './Pages/DetailsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' exact element = {<HomePage/>}/>
        <Route path='/pages/:id'  element = {<DetailsPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
