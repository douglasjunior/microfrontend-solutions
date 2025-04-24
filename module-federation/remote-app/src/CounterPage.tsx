import { useState } from "react";

function Content() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h2>Counter Page</h2>
      <button onClick={() => setCount(count + 1)}>
        count is {count}
      </button>
    </div>
  )
}

export default Content
