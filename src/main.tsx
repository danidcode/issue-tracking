import { Auth0Provider } from '@auth0/auth0-react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Auth from './Auth'
import MainContent from './components/MainContent'
import './index.css'
import { AuthenticationGuard } from './guards/authentication-guard'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 15 * 1000,
    },
  },
})

const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthenticationGuard component={MainContent} />,
  },
  {
    path: "/auth",
    element: <Auth />,
  },
]);

const domain = `${import.meta.env.VITE_AUTH0_DOMAIN}`
const clientId = `${import.meta.env.VITE_AUTH0_CLIENT_ID}`

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
    >
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </Auth0Provider>
  </React.StrictMode>,
)
