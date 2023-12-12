import About from './Pages/About'
import HomePage from './Pages/Home'
import Page404 from './Pages/Page404'
import { Route } from './Route'
import { Router } from './Router'



function App() {

  const appRoutes = [
    {
      path: '/search/:query',
      Component: ({ routeParams }) => <h1>Has buscado: {routeParams.query}</h1>
    }
  ]

  return (
    <main>
      <Router routes={appRoutes} defaultComponent={Page404} >
        <Route path='/' Component={HomePage} />
        <Route path='/about' Component={About} />
      </Router >

    </main>
  )
}

export default App
