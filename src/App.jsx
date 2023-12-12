import { lazy, Suspense } from 'react'
import Page404 from './Pages/Page404'
import { Route } from './Route'
import { Router } from './Router'

const About = lazy(() => import('./Pages/About.jsx')) //Import dinamico
const HomePage = lazy(() => import('./Pages/Home.jsx')) //Import dinamico



function App() {

  const appRoutes = [
    {
      path: '/search/:query',
      Component: ({ routeParams }) => <h1>Has buscado: {routeParams.query}</h1>
    }
  ]

  return (
    <main>
      <Suspense fallback={null}>
        <Router routes={appRoutes} defaultComponent={Page404} >
          <Route path='/' Component={HomePage} />
          <Route path='/about' Component={About} />
        </Router >
      </Suspense>

    </main>
  )
}

export default App
