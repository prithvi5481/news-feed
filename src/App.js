import { HashRouter as Router } from 'react-router-dom';
import AppRoutes from './components/AppRoutes';

function App() {
  return (
    <HashRouter>
        <AppRoutes />
    </HashRouter>
  );
}

export default App;
