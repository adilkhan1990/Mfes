import { registerApplication, start } from "single-spa";
import {
  constructApplications,
  constructRoutes,
  constructLayoutEngine,
} from "single-spa-layout";
import microfrontendLayout from "./microfrontend-layout.html";

const routes = constructRoutes(microfrontendLayout);
const applications = constructApplications({
  routes,
  loadApp({ name }) {
    return System.import(name);
  },
});
const layoutEngine = constructLayoutEngine({ routes, applications });
registerApplication({
  name: "@vm/toast-service",
  app: () => System.import("@vm/toast-service"),
  activeWhen: ["/"], // Always load the toast service
});
applications.forEach(registerApplication);
layoutEngine.activate();
start();
