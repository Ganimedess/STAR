import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './components/ErrorPage.jsx';
import Base from "./components/Base.jsx";
  import BaseEnglish from './components/traducciones/BaseEnglish.jsx';
import App from './App.jsx'
  import AppEn from './components/traducciones/AppEn.jsx';
import Ayuda from './components/Ayuda.jsx'
  import Help from './components/traducciones/Help.jsx'
import ConsejosSeguridad from './components/ConsejosSeguridad.jsx'
  import SecurityAdvice from './components/traducciones/SecurityAdvice.jsx'
import Personajes from './components/Personajes.jsx'
  import Characters from './components/traducciones/Characters.jsx';
import Personalidades from './components/Personalidades.jsx'
  import Personalities from './components/traducciones/personalities.jsx';
import PoliticaPrivacidad from './components/PoliticaPrivacidad.jsx'
  import PrivacyPolicy from './components/traducciones/PrivacyPolicy.jsx';
import PreguntasFrecuentes from './components/PreguntasFrecuentes.jsx'
  import FAQ from './components/traducciones/FAQ.jsx';
import ReglasComunidad from './components/ReglasComunidad.jsx'
  import CommunityRules from './components/traducciones/CommunityRules.jsx';
import TerminosCondiciones from './components/TerminosCondiciones.jsx'
  import TermsConditions from './components/traducciones/TermsConditions.jsx';
import Premio from './components/Premio.jsx'

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
        {
          path: "/premio",
          element: <Premio />,
        },
    ],
  },
  {
    path: "/en/",
    element: <BaseEnglish />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/en/',
        element: <AppEn />,
      },
      {
        path: '/en/personalities',
        element: <Personalities />,
      },
      {
        path: '/en/anime-characters',
        element: <Characters />,
      },
      {
        path: '/en/help',
        element: <Help />,
      },
      {
        path: '/en/faq',
        element: <FAQ />,
      },
      {
        path: '/en/safety-tips',
        element: <SecurityAdvice />,
      },
      {
        path: '/en/community-rules',
        element: <CommunityRules />,
      },
      {
        path: '/en/privacy-policy',
        element: <PrivacyPolicy />,
      },
      {
        path: '/en/terms-and-conditions',
        element: <TermsConditions />,
      },
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <RouterProvider router={rutas} />
  </React.StrictMode>,
)
