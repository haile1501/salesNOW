import routesConfig from "../config/routes";

//import pages
import Home from "../pages/Home";

//import layout

//public route

const publicRoutes = [];

const privateRoutes = [
	{ path: routesConfig.home, component: Home, title: "Overall" },
];

export { publicRoutes, privateRoutes };
