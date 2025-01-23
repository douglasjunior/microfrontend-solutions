/* eslint-disable @typescript-eslint/no-explicit-any */

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { reactBridge } from '@garfish/bridge-react-v18';

if (!(window as any)?.__GARFISH__) {
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <App />
    </StrictMode>,
  )
}

export const provider = reactBridge({
  rootComponent: App,
  errorBoundary(caughtError, props) {
    console.error(caughtError, props);
    return <div>Error</div>
  },
});
