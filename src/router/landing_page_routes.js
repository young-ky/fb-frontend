const LandingPageIndex = () => import('@/views/landing/LandingPageIndex.vue')
const Home = () => import('@/views/landing/Home.vue')
const AboutUs = () => import('@/views/landing/AboutUs.vue')
const FAQ = () => import('@/views/landing/FAQ.vue')
const Promotion = () => import('@/views/landing/Promotion.vue')

const landingPageRoutes = [
  {
    path: '/',
    component: LandingPageIndex,
    children: [
      {
        path: '',
        name: 'Home',
        component: Home
      },
      {
        path: 'home',
        redirect: '/',
      },
      {
        path: 'faq',
        name: 'FAQ',
        component: FAQ
      },
      {
        path: 'about-us',
        name: 'AboutUs',
        component: AboutUs
      },
      {
        path: 'promotion',
        name: 'Promotion',
        component: Promotion
      }
    ]
  }
]

export default landingPageRoutes
