import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import './index.css'
import App from './App.jsx'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000,
      gcTime: 10 * 60 * 1000,
      refetchOnWindowFocus: false,
    },
  },
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </StrictMode>,
)

// Prefetch modules au repos pour accélérer navigation
if (typeof window !== 'undefined') {
  const prefetch = () => {
    import('./pages/Login');
    import('./pages/Register');
  }
  if ('requestIdleCallback' in window) {
    window.requestIdleCallback(prefetch)
  } else {
    setTimeout(prefetch, 1500)
  }
}
