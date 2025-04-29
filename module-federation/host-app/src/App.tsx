import { BrowserRouter, Routes } from 'react-router';

import { routes } from './Routes';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {routes}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
