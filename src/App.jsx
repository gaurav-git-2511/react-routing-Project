import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Movie from './pages/Movie';
import Contact, { contactData } from './pages/Contact';
import AppLayout from './components/layout/AppLayout';
import ErrorPage from './pages/ErrorPage';
import getMovieData from './api/GetAPIData.JSX';
import MovieDetails from './components/UI/MovieDetails';
import getMoviesDetails from './api/GetMoviesDetails';

const App = () => {
  // Way:2
  const router = createBrowserRouter([

    {
      path: '/',
      element: <AppLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/about',
          element: <About />
        },
        {
          path: '/movie',
          element: <Movie />,
          loader: getMovieData // This will fetch movie data before rendering the Movie component
        },
        {
          path: '/movie/:movieID',
          element: <MovieDetails />,
          loader: getMoviesDetails,
        },
        {
          path: "contact",
          element: <Contact />,
          action: contactData
        }
      ]
    },
  ]);

  return (
    <RouterProvider router={router} />
  )
}

export default App

// Way:1
// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route>
//       <Route path='/' element={<Home />} />
//       <Route path='/about' element={<About />} />
//       <Route path='/movie' element={<Movie />} />
//       <Route path='/contact' element={<Contact />} />
//     </Route>
//   )
// )