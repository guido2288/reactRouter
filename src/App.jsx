import About from './Pages/About'
import HomePage from './Pages/Home'
import Page404 from './Pages/Page404'
import { Router } from './Router'

function App() {

  const appRoutes = [
    {
      path: '/',
      Component: HomePage
    },
    {
      path: '/about',
      Component: About
    },
    {
      path: '/search/:query',
      Component: ({ routeParams }) => <h1>Has buscado: {routeParams.query}</h1>
    }
  ]

  return (
    <main>
      <Router routes={appRoutes} defaultComponent={Page404} />
    </main>
  )
}

export default App
