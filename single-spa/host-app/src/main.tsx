import { registerApplication, start } from "single-spa";
import {
  constructApplications,
  constructRoutes,
  constructLayoutEngine,
} from "single-spa-layout";
import microfrontendLayout from "./microfrontend-layout.html?raw";

console.log('microfrontendLayout', microfrontendLayout);

const routes = constructRoutes(microfrontendLayout);
console.log('routes', routes);
const applications = constructApplications({
  routes,
  loadApp({ name }) {
    return import(/* @vite-ignore */ name);
  },
});
const layoutEngine = constructLayoutEngine({ routes, applications });

applications.forEach(registerApplication);
layoutEngine.activate();
start();
