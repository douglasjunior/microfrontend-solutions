import { Suspense, lazy, useState } from 'react';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const RemoteApp = lazy(() => import('@remote-app'));

function App() {
  const [count, setCount] = useState(0)
  const [mounted, setMounted] = useState(false)

  return (
    <div>
      <h1>Host App</h1>
      <Suspense fallback="Loading Button...">
        {mounted ? (
          <RemoteApp count={count} setCount={setCount} />
        ) : (
          <div>
            <p>Remote App is not mounted</p>
          </div>
        )}
      </Suspense>
      {!mounted ? (
        <div>
          <button onClick={() => setMounted(true)}>
            Mount Remote App
          </button>
        </div>
      ) : null}
      <p>Footer in host app</p>
    </div>
  );
}

export default App;
