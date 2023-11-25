import routesConfig from "../config/routes";
import Forbiden403 from "../pages/Forbiden403/Forbiden403";

//import pages
import Home from "../pages/Home";
import NotFound404 from "../pages/NotFound404/NotFound404";

//import layout

//public route

const publicRoutes = [];

const privateRoutes = [
	{ path: routesConfig.home, component: Home, title: "Overall" },
	{ path: routesConfig.notfound404, component: NotFound404, title: "" },
	{ path: routesConfig.forbiden403, component: Forbiden403, title: "" },
];

export { publicRoutes, privateRoutes };
