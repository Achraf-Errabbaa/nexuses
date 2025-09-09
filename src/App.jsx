
import { BrowserRouter as Router } from 'react-router-dom';
import {BigHome} from './components/BigHome';

function App() {
  return (
    <div className="overflow-x-hidden">
    <Router>
      <BigHome />
    </Router>
    </div>
  );
}

export default App;