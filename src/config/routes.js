// Layouts
import HomeLayout from "../layouts/homeLayout";
// -AdminLayout-

// Home Pages
import Home from "../pages/home/homePage";
import Contact from "../pages/home/contact";
import Certificates from "../pages/home/certificates";

//Admin Pages

// Others
import Error404 from "../pages/others/error404";

const routes = [
  {
    path: "/",
    component: HomeLayout,
    exact: false,
    routes: [
      {
        path: "/",
        component: Home,
        exact: true,
      },
      {
        path: "/contact",
        component: Contact,
        exact: true,
      },
      {
        path: "/certificates",
        component: Certificates,
        exact: true,
      },
      {
        component: Error404,
      },
    ],
  },
];

export default routes;
