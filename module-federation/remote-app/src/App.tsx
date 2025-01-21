import './App.css'

type AppPropsType = {
  readonly count: number
  readonly setCount: (count: number) => void
}

function App({count, setCount}: AppPropsType) {

  return (
    <>
      <h1>Vite + React + Remote</h1>
      <div className="card">
        <button onClick={() => setCount(count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
    </>
  )
}

export default App
