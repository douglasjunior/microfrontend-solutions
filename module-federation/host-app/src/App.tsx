import { Suspense } from 'react';
import Routes from './Routes';

function App() {
  return (
    <div>
      <Suspense>
        <Routes />
      </Suspense>
    </div>
  );
}

export default App;
