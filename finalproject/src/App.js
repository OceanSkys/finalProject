
import './App.css';
import HeaderFooter from './components/HeaderFooter';
import { Outlet } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
        <HeaderFooter>
          <Outlet />
        </HeaderFooter>
    </div>
  );
}

export default App;
