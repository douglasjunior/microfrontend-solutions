import Garfish from 'garfish'
import { useEffect } from 'react';

const App = () => {
  useEffect(() => {
    Garfish.run({
      apps: [
        {
          name: 'spa1',
          entry: 'http://localhost:4444',
          activeWhen: '/spa1',
          domGetter: () => document.getElementById('remote-app-spa1'),
        },
      ],
    });
  }, []);

  return (
    <div>
      <h1>Welcome to Host App</h1>

      <a href="/spa1">Go to SPA1</a>

      <div id="remote-app-spa1">Here will be rendered the spa1</div>
    </div>
  );
};

export default App
