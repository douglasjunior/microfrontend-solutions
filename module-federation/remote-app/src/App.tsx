import { BrowserRouter, Navigate, Route, Routes } from 'react-router'

import { basename, routes } from './entrypoint'
import { renderRoutes } from './utils';

const content = renderRoutes(routes, basename);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<Navigate to={basename} />} />
        {content}
      </Routes>
    </BrowserRouter>
  )
}

export default App
