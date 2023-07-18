import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './components/ErrorPage.jsx';
import Base from "./components/Base.jsx";
import App from './App.jsx'
import Ayuda from './components/Ayuda.jsx'
import ConsejosSeguridad from './components/ConsejosSeguridad.jsx'
import Personajes from './components/Personajes.jsx'
import Personalidades from './components/Personalidades.jsx'
import PoliticaPrivacidad from './components/PoliticaPrivacidad.jsx'
import PreguntasFrecuentes from './components/PreguntasFrecuentes.jsx'
import ReglasComunidad from './components/ReglasComunidad.jsx'
import TerminosCondiciones from './components/TerminosCondiciones.jsx'

import './index.css'

const rutas = createBrowserRouter([
  {
    path: "/",
    element: <Base />,
    errorElement: <ErrorPage />,
    children: [
        {
          path: "/",
          element: <App />,
        },
        {
          path: "/personalidades",
          element: <Personalidades />,
        },
        {
          path: "/personajes",
          element: <Personajes />,
        },
        {
          path: "/ayuda",
          element: <Ayuda />,
        },
        {
          path: "/preguntas-frecuentes",
          element: <PreguntasFrecuentes />,
        },
        {
          path: "/consejos-de-seguridad",
          element: <ConsejosSeguridad />,
        },
        {
          path: "/reglas-comunidad",
          element: <ReglasComunidad />,
        },
        {
          path: "/terminos-y-condiciones",
          element: <TerminosCondiciones />,
        },
        {
          path: "/politica-privacidad",
          element: <PoliticaPrivacidad />,
        },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <RouterProvider router={rutas} />
  </React.StrictMode>,
)
