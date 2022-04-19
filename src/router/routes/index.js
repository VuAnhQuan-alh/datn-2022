import { lazy } from 'react'

// ** Document title
const TemplateTitle = 'Top Code | Algorithm website'

// ** Default Route
const DefaultRoute = '/login'

// ** Merge Routes
const Routes = [
  {
    path: '/home',
    component: lazy(() => import('../../views/HomePage')),
    meta: {
      authRoute: true
    }
  },
  {
    path: '/profiles',
    component: lazy(() => import('../../views/Profiles')),
    meta: {
      authRoute: true
    }
  },
  {
    path: '/admin-site',
    component: lazy(() => import('../../views/AdminSite')),
    meta: {
      authRoute: true
    }
  },
  {
    path: '/challenges',
    component: lazy(() => import('../../views/Challenges')),
    meta: {
      authRoute: true
    }
  },
  {
    path: '/challenge/:id/solve',
    component: lazy(() => import('../../views/SolveChallenge')),
    meta: {
      authRoute: true
    }
  },
  {
    path: '/challenge/:id/detail',
    component: lazy(() => import('../../views/DetailChallenge')),
    meta: {
      authRoute: true
    }
  },
  {
    path: '/rank-board',
    component: lazy(() => import('../../views/RankBoard')),
    meta: {
      authRoute: true
    }
  },
  {
    path: '/my-challenges',
    component: lazy(() => import('../../views/Users')),
    meta: {
      authRoute: true
    }
  },
  {
    path: '/login',
    component: lazy(() => import('../../views/WelcomeWeb')),
    layout: 'BlankLayout',
    meta: {
      authRoute: false
    }
  },
  {
    path: '/error',
    component: lazy(() => import('../../views/Error')),
    layout: 'BlankLayout'
  }
]

export { DefaultRoute, TemplateTitle, Routes }
