import { Home, About } from "./Components";

const Routes = [
  { id: 1, path: "/", exact: true, component: Home },
  { id: 2, path: "/about", exact: true, component: About },
];

export default Routes;
