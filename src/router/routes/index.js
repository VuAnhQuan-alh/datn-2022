import { lazy } from 'react'

// ** Document title
const TemplateTitle = 'Top Code | Algorithm website'

// ** Default Route
const DefaultRoute = '/login'

// ** Merge Routes
const Routes = [
  {
    path: '/home',
    component: lazy(() => import('../../views/HomePage'))
  },
  {
    path: '/challenges',
    component: lazy(() => import('../../views/Challenges'))
  },
  {
    path: '/challenge/:id/solve',
    component: lazy(() => import('../../views/SolveChallenge'))
  },
  {
    path: '/challenge/:id/detail',
    component: lazy(() => import('../../views/DetailChallenge'))
  },
  {
    path: '/rank-board',
    component: lazy(() => import('../../views/RankBoard')),
  },
  {
    path: '/login',
    component: lazy(() => import('../../views/Login')),
    layout: 'BlankLayout',
    meta: {
      authRoute: true
    }
  },
  {
    path: '/error',
    component: lazy(() => import('../../views/Error')),
    layout: 'BlankLayout'
  }
]

export { DefaultRoute, TemplateTitle, Routes }
