import { Route, Routes } from 'react-router-dom';
import { Home } from './Pages/Home';
import { About } from './Pages/About';
import Show from './Pages/Show';
import './App.css';

function App() {
  return (
    <div >
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Show' element={<Show />} />

      </Routes>
    </div>
  );
}

export default App;
