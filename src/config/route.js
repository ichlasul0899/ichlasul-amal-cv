import { HomePage, AboutPage, ContactPage, PortfolioPage, DetailPortfolioPage } from "../component/pages/index";


const routes = [
  {
    path: "/about",
    component: AboutPage,
  },
  {
    path: "/contact",
    component: ContactPage,
  },
  {
    path: "/portfolio/:id",
    component: DetailPortfolioPage,
  },
  {
    path: "/portfolio",
    component: PortfolioPage,
  },
  {
    path: "/",
    component: HomePage,
  },
];

export default routes